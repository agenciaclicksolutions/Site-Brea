/* Clínica Brea — interações
   Progressive enhancement: o site funciona integralmente sem JS. */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  /* Estado do header ao rolar */
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Menu mobile */
  if (toggle && nav && header) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      header.classList.toggle("nav-open", !open);
      document.body.style.overflow = open ? "" : "hidden";
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        header.classList.remove("nav-open");
        document.body.style.overflow = "";
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("nav-open")) {
        toggle.setAttribute("aria-expanded", "false");
        header.classList.remove("nav-open");
        document.body.style.overflow = "";
        toggle.focus();
      }
    });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Luz que segue o cursor (só em ponteiro fino, sem reduced motion) */
  var glow = document.querySelector(".cursor-glow");
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (glow && finePointer && !reduceMotion) {
    var gx = window.innerWidth / 2;
    var gy = window.innerHeight / 2;
    var targetX = gx;
    var targetY = gy;
    var rafId = null;

    var tick = function () {
      gx += (targetX - gx) * 0.07;
      gy += (targetY - gy) * 0.07;
      glow.style.transform = "translate(" + gx + "px, " + gy + "px)";
      if (Math.abs(targetX - gx) + Math.abs(targetY - gy) > 0.3) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    window.addEventListener(
      "mousemove",
      function (event) {
        targetX = event.clientX;
        targetY = event.clientY;
        glow.classList.add("is-active");
        if (rafId === null) {
          rafId = requestAnimationFrame(tick);
        }
      },
      { passive: true }
    );

    document.documentElement.addEventListener("mouseleave", function () {
      glow.classList.remove("is-active");
    });
  }

  /* Reveal on scroll, com stagger por grupo */
  var revealed = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealed.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  document.querySelectorAll("[data-stagger]").forEach(function (group) {
    var children = group.querySelectorAll(".reveal");
    children.forEach(function (child, index) {
      child.style.setProperty("--reveal-delay", index * 90 + "ms");
    });
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  revealed.forEach(function (el) {
    observer.observe(el);
  });
})();
