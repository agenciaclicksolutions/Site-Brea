/* BREA, jornada de scroll do hero.
   Camadas de foto reais animadas pelo progresso de scroll:
   aproximação lenta por cena, fusão entre cenas, legendas ritmadas
   em distância de scroll. Sem vídeo: as fotos são compostas pela GPU,
   o que dispensa blob, seeks e keyframes. O resto do padrão fica:
   interpolação normalizada por dt que descansa, escritas de DOM só na
   mudança, cinco portões de hero estático vivos em CSS e JS, e
   movimento reduzido honrado ao vivo nas duas direções. */
(function () {
  "use strict";

  var hero = document.getElementById("jhero");
  if (!hero) return;
  var stage = hero.querySelector(".jstage");
  var layers = Array.prototype.slice.call(stage.querySelectorAll(".jlayer"));
  var bands = Array.prototype.slice.call(stage.querySelectorAll(".jband"));

  /* Faixas de cena: [entra, sai] em progresso 0..1 (fusão nas sobreposições) */
  var SCENES = [
    { fadeIn: [0.0, 0.0], fadeOut: [0.30, 0.38], zoom: [1.04, 1.16], drift: [0, -12] },
    { fadeIn: [0.30, 0.38], fadeOut: [0.60, 0.68], zoom: [1.14, 1.04], drift: [10, 0] },
    { fadeIn: [0.60, 0.68], fadeOut: [1.01, 1.02], zoom: [1.10, 1.03], drift: [-8, 0] }
  ];

  bands.forEach(function (band) {
    var r = (band.dataset.range || "0,1").split(",");
    band.range = [parseFloat(r[0]), parseFloat(r[1])];
    band.lastOp = -1;
    band.lastK = -1;
  });
  layers.forEach(function (l) {
    l.lastOp = -1;
    l.lastT = "";
  });

  var lastJp = -1;
  var smoothstep = function (p, e0, e1) {
    var t = Math.min(1, Math.max(0, (p - e0) / (e1 - e0)));
    return t * t * (3 - 2 * t);
  };
  var clamp = function (v, lo, hi) { return Math.min(hi, Math.max(lo, v)); };

  /* Divisão dos títulos em palavras com offsets estáveis (gerador com semente) */
  function rng(seed) {
    var s = seed >>> 0;
    return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }
  bands.forEach(function (band, bi) {
    var r = rng(97 + bi * 31);
    band.querySelectorAll("[data-split]").forEach(function (el) {
      var text = el.textContent;
      el.setAttribute("aria-label", text);
      el.textContent = "";
      var words = text.split(" ");
      words.forEach(function (w, i) {
        var span = document.createElement("span");
        span.className = "jw";
        span.setAttribute("aria-hidden", "true");
        span.textContent = w;
        span.style.setProperty("--th", (i / Math.max(1, words.length) * 0.5 + r() * 0.08).toFixed(3));
        el.appendChild(span);
        if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
      });
    });
  });

  /* Progresso pelo hero fixado */
  function heroProgress() {
    var rect = hero.getBoundingClientRect();
    var span = hero.offsetHeight - window.innerHeight;
    if (span <= 0) return 1;
    return clamp(-rect.top / span, 0, 1);
  }

  /* Rampa única de carregamento da primeira faixa */
  var loadK = 0;
  var loadStart = 0;
  function tickLoad(now) {
    if (!loadStart) loadStart = now;
    loadK = clamp((now - loadStart) / 900, 0, 1);
    render(shown);
    if (loadK < 1) requestAnimationFrame(tickLoad);
  }

  /* O loop que descansa */
  var target = 0, shown = 0, rafId = null, lastTick = 0, heroOnScreen = true;
  function tick(now) {
    var dt = Math.min(100, now - (lastTick || now));
    lastTick = now;
    var k = 0.16;
    shown += (target - shown) * (1 - Math.pow(1 - k, dt / 16.667));
    if (Math.abs(target - shown) < 0.0005) {
      shown = target;
      rafId = null;
      lastTick = 0;
    } else {
      rafId = requestAnimationFrame(tick);
    }
    render(shown);
  }
  function onScroll() {
    target = heroProgress();
    if (rafId === null && heroOnScreen) rafId = requestAnimationFrame(tick);
  }

  function render(p) {
    if (Math.abs(p - lastJp) > 0.01) { lastJp = p; stage.style.setProperty("--jp", p.toFixed(2)); }
    layers.forEach(function (l, i) {
      var s = SCENES[i];
      var op = smoothstep(p, s.fadeIn[0], s.fadeIn[1] || s.fadeIn[0] + 0.001) *
               (1 - smoothstep(p, s.fadeOut[0], s.fadeOut[1]));
      if (i === 0) op = 1 - smoothstep(p, s.fadeOut[0], s.fadeOut[1]);
      var lp = clamp((p - s.fadeIn[0]) / (s.fadeOut[1] - s.fadeIn[0]), 0, 1);
      var scale = s.zoom[0] + (s.zoom[1] - s.zoom[0]) * lp;
      var ty = s.drift[0] + (s.drift[1] - s.drift[0]) * lp;
      var t = "translate3d(0," + ty.toFixed(1) + "px,0) scale(" + scale.toFixed(4) + ")";
      if (Math.abs(op - l.lastOp) > 0.004) { l.lastOp = op; l.style.opacity = op.toFixed(3); }
      if (t !== l.lastT) { l.lastT = t; l.style.transform = t; }
    });

    bands.forEach(function (band, i) {
      var a = band.range[0], b = band.range[1];
      var f = Math.min(0.02, (b - a) / 3);
      var op = smoothstep(p, a, a + f) * (1 - smoothstep(p, b - f, b));
      if (i === 0) op = 1 - smoothstep(p, b - f, b);
      if (i === bands.length - 1) op = smoothstep(p, a, a + f);
      var ramp = parseFloat(band.dataset.ramp) || Math.min(0.025, (b - a) * 0.35);
      var k = clamp((p - a) / ramp, 0, 1);
      if (i === 0) k = Math.max(k, loadK);
      if (Math.abs(op - band.lastOp) > 0.004) { band.lastOp = op; band.style.opacity = op.toFixed(3); }
      if (Math.abs(k - band.lastK) > 0.008) { band.lastK = k; band.style.setProperty("--k", k.toFixed(3)); }
    });
  }

  /* Estados finais para movimento reduzido */
  function pinToFinalStates() {
    layers.forEach(function (l, i) {
      l.style.opacity = i === layers.length - 1 ? "1" : "0";
      l.style.transform = "none";
    });
    bands.forEach(function (band, i) {
      band.style.opacity = i === bands.length - 1 ? "1" : "0";
      band.style.setProperty("--k", "1");
    });
  }
  function unpinFinalStates() {
    layers.forEach(function (l) { l.lastOp = -1; l.lastT = ""; });
    bands.forEach(function (band) { band.lastOp = -1; band.lastK = -1; });
  }

  /* Os cinco portões, idênticos ao CSS, vivos */
  var GATES = [
    "(max-width: 720px)",
    "(orientation: portrait) and (max-width: 1024px)",
    "(orientation: portrait) and (pointer: coarse)",
    "(orientation: landscape) and (pointer: coarse) and (max-height: 560px)",
    "(prefers-reduced-motion: reduce)"
  ];
  var scrubOn = false;
  var io = null;
  function enableScrub() {
    if (scrubOn) return;
    scrubOn = true;
    unpinFinalStates();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        heroOnScreen = entries[0].isIntersecting;
      });
      io.observe(hero);
    }
    requestAnimationFrame(tickLoad);
    target = shown = heroProgress();
    render(shown);
  }
  function disableScrub() {
    if (!scrubOn) return;
    scrubOn = false;
    window.removeEventListener("scroll", onScroll);
    if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
  }
  function applyHeroMode() {
    var gated = GATES.some(function (q) { return matchMedia(q).matches; });
    if (gated) { disableScrub(); pinToFinalStates(); }
    else enableScrub();
  }
  var MQLS = GATES.map(function (q) { return matchMedia(q); });
  MQLS.forEach(function (m) { m.addEventListener("change", applyHeroMode); });
  applyHeroMode();
})();
