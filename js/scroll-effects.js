/* SCROLL: aparición de elementos (reveal), header compacto y botón "volver arriba" */
(() => {
  const { $, $$, reduce } = App;
  let rev = null;

  /* Observa los elementos .rv-up que todavía no han aparecido (se llama también tras cada render) */
  App.observeReveal = () => {
    if (!rev) return;
    $$(".rv-up:not(.in)").forEach(el => {
      el.style.transitionDelay = (Math.min([...el.parentNode.children].indexOf(el), 4) * 80) + "ms";
      rev.observe(el);
    });
  };

  App.initScrollEffects = () => {
    if (reduce || !("IntersectionObserver" in window)) { $$(".rv-up").forEach(el => el.classList.add("in")); }
    else {
      rev = new IntersectionObserver(entries => entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); }
      }), { threshold: .12 });
      App.observeReveal();
    }

    /* Header compacto */
    const header = $("#top");
    let ticking = false;
    const frame = () => { header.classList.toggle("is-compact", scrollY > 24); ticking = false; };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
    frame();

    /* Volver arriba */
    $("#toTop").onclick = () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };
})();
