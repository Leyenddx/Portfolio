/* SCROLL: aparición de elementos (reveal), header compacto, parallax y botón "volver arriba" */
(() => {
  const { $, reduce } = App;

  App.initScrollEffects = () => {
    /* Reveal al hacer scroll */
    const rev = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); }
    }), {threshold:.18});
    document.querySelectorAll(".rv,.rv-up,.job").forEach(el => {
      if (el.matches(".tool,.job,.way")) el.style.transitionDelay = (Array.from(el.parentNode.children).indexOf(el) * 110) + "ms";
      rev.observe(el);
    });

    /* Header compacto + parallax */
    const header = $("#top");
    const px = [...document.querySelectorAll("[data-parallax]")];
    let ticking = false;
    function frame(){
      const y = scrollY, vh = innerHeight;
      header.classList.toggle("is-compact", y > 40);
      if (!reduce) px.forEach(el => {
        const r = el.parentElement.getBoundingClientRect();
        const d = (r.top + r.height/2 - vh/2);
        const s = parseFloat(el.dataset.parallax);
        el.style.transform = `translate3d(0,${(d * s).toFixed(1)}px,0)` + (el.dataset.rotate ? ` rotate(${(d * -0.02).toFixed(2)}deg)` : "");
      });
      ticking = false;
    }
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, {passive:true});
    addEventListener("resize", frame);
    frame();

    /* Volver arriba */
    $("#toTop").onclick = () => scrollTo({top:0, behavior: reduce ? "auto" : "smooth"});
  };
})();
