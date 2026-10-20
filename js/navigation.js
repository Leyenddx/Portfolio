/* NAVEGACIÓN: menú móvil, enlace activo (scroll-spy), dock de contacto y botón "copiar correo" */
(() => {
  const { $, $$, state } = App;

  App.initNavigation = () => {
    /* Menú móvil */
    const nav = $("#nav"), mb = $("#menuBtn");
    const setMenu = o => { nav.classList.toggle("open", o); mb.setAttribute("aria-expanded", String(o)); document.body.classList.toggle("menu-open", o); };
    mb.onclick = () => setMenu(!nav.classList.contains("open"));
    nav.addEventListener("click", e => { if (e.target.tagName === "A") setMenu(false); });
    addEventListener("keydown", e => { if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); mb.focus(); } });

    /* Enlace activo según la sección visible */
    const spy = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      $$("#nav a").forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main > section").forEach(s => spy.observe(s));

    /* Dock: visible después de la portada y oculto cuando el contacto está en pantalla */
    const dock = $("#dock");
    let pastHero = false, onContact = false;
    const updateDock = () => dock.classList.toggle("show", pastHero && !onContact);
    new IntersectionObserver(([en]) => { pastHero = !en.isIntersecting; updateDock(); }, { rootMargin: "-30% 0px 0px 0px" }).observe($("#inicio"));
    new IntersectionObserver(([en]) => { onContact = en.isIntersecting; updateDock(); }, { threshold: .15 }).observe($("#contacto"));

    /* Copiar correo */
    $("#ways").addEventListener("click", async e => {
      const b = e.target.closest("[data-copy]"); if (!b) return;
      try { await navigator.clipboard.writeText(b.dataset.copy); } catch { location.href = "mailto:" + b.dataset.copy; return; }
      b.textContent = state.T.copiado;
      setTimeout(() => { b.textContent = state.T.copiar; }, 1800);
    });
  };
})();
