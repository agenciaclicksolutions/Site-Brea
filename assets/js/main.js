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

  /* Reveal on scroll, com stagger por grupo */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
