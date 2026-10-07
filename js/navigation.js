/* NAVEGACIÓN: menú móvil, puntos laterales de sección y resaltado del enlace activo (scroll-spy) */
(() => {
  const { $, esc, reduce, state } = App;

  App.initNavigation = () => {
    /* Menú móvil */
    const nav = $("#nav"), mb = $("#menuBtn");
    mb.onclick = () => { const o = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", o); };
    nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); mb.setAttribute("aria-expanded","false"); } });

    /* Puntos laterales + enlace activo */
    const sections = [...document.querySelectorAll("main > section")];
    const dots = $("#dots");
    dots.innerHTML = sections.map(s => `<button aria-label="${esc(state.T.dotsGoTo(s.id))}" data-id="${s.id}"></button>`).join("");
    dots.addEventListener("click", e => { const b = e.target.closest("button"); if (b) document.getElementById(b.dataset.id).scrollIntoView({behavior: reduce ? "auto" : "smooth"}); });
    const spy = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      dots.querySelectorAll("button").forEach(b => b.classList.toggle("is-active", b.dataset.id === id));
      nav.querySelectorAll("a").forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + id));
      dots.classList.toggle("on-red", id === "experiencia" || id === "contacto");
    }), {rootMargin:"-45% 0px -50% 0px"});
    sections.forEach(s => spy.observe(s));
  };
})();
