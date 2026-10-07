/* GALERÍA: pestañas de categoría, carrusel deslizable, flechas y barra de progreso */
(() => {
  const { $, reduce, state } = App;

  App.initGallery = () => {
    const tabs = $("#tabs"), gallery = $("#gallery"), track = $("#track");

    /* Abrir/cerrar/cambiar categoría */
    function openCategory(key){
      const btns = tabs.querySelectorAll(".tab");
      if (state.current === key) { // toggle closed
        state.current = null; gallery.classList.remove("open");
        btns.forEach(b => b.setAttribute("aria-expanded","false")); return;
      }
      const wasOpen = gallery.classList.contains("open");
      const { C, T } = state;
      state.current = key; state.items = C.trabajos[key].items;
      btns.forEach(b => b.setAttribute("aria-expanded", String(b.dataset.key === key)));
      const render = () => {
        $("#stageTitle").textContent = C.trabajos[key].titulo;
        $("#stageCount").textContent = `${state.items.length} ${T.piezas}`;
        track.innerHTML = state.items.map((it,i) => App.cardHTML(it,i)).join("");
        track.scrollLeft = 0; updateNav();
        gallery.classList.remove("open"); void gallery.offsetWidth; gallery.classList.add("open");
      };
      if (wasOpen && !reduce) { gallery.classList.remove("open"); setTimeout(render, 380); }
      else render();
      setTimeout(() => $("#stage").scrollIntoView({behavior: reduce ? "auto" : "smooth", block:"nearest"}), wasOpen ? 700 : 350);
    }
    tabs.addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) openCategory(b.dataset.key); });

    /* Flechas y barra de progreso */
    const step = () => (track.querySelector(".card")?.offsetWidth || 300) + 22;
    $("#prev").onclick = () => track.scrollBy({left:-step(), behavior: reduce ? "auto" : "smooth"});
    $("#next").onclick = () => track.scrollBy({left: step(), behavior: reduce ? "auto" : "smooth"});
    function updateNav(){
      const max = track.scrollWidth - track.clientWidth;
      $("#prev").disabled = track.scrollLeft < 4;
      $("#next").disabled = track.scrollLeft > max - 4;
      const vis = track.clientWidth / Math.max(track.scrollWidth,1);
      $("#bar").style.width = Math.min(100, (vis + (max > 0 ? track.scrollLeft/max : 1) * (1 - vis)) * 100) + "%";
    }
    App.updateNav = updateNav;
    track.addEventListener("scroll", updateNav, {passive:true});
    addEventListener("resize", updateNav);
  };
})();
