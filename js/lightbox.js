/* LIGHTBOX: vista ampliada, navegación anterior/siguiente, teclado (Esc, flechas) y foco */
(() => {
  const { $, esc, state } = App;

  App.initLightbox = () => {
    const lb = $("#lb"), track = $("#track");
    let lbIndex = 0, lastFocus = null;

    function showLb(i){
      const items = state.items;
      lbIndex = (i + items.length) % items.length;
      const it = items[lbIndex];
      $("#lbMedia").innerHTML = App.mediaFor(it, lbIndex, true);
      $("#lbCap").innerHTML = `<b>${esc(it.titulo)}</b>${esc(it.descripcion)}`;
    }
    const closeLb = () => { lb.classList.remove("open"); document.body.style.overflow = ""; setTimeout(()=>$("#lbMedia").innerHTML="",400); lastFocus?.focus(); };

    track.addEventListener("click", e => { const c = e.target.closest(".card"); if (!c) return;
      lastFocus = c; showLb(+c.dataset.i); lb.classList.add("open"); document.body.style.overflow = "hidden"; $("#lbClose").focus(); });
    $("#lbClose").onclick = closeLb;
    $("#lbPrev").onclick = () => showLb(lbIndex - 1);
    $("#lbNext").onclick = () => showLb(lbIndex + 1);
    lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
    addEventListener("keydown", e => { if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLb(); if (e.key === "ArrowLeft") showLb(lbIndex-1); if (e.key === "ArrowRight") showLb(lbIndex+1); });
  };
})();
