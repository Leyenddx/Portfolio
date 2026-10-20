/* LIGHTBOX: vista ampliada por categoría, navegación anterior/siguiente, teclado (Esc, flechas) y foco */
(() => {
  const { $, esc } = App;

  App.initLightbox = () => {
    const lb = $("#lb");
    let items = [], index = 0, lastFocus = null;

    function show(i){
      index = (i + items.length) % items.length;
      const it = items[index];
      $("#lbMedia").innerHTML = App.fullMedia(it);
      const meta = [it.formato, it.cliente].filter(Boolean).map(esc).join(" · ");
      const link = it.enlace ? ` <a href="${esc(it.enlace.url)}" target="_blank" rel="noopener">${esc(it.enlace.texto)} ↗</a>` : "";
      $("#lbCap").innerHTML = `<b>${esc(it.titulo)}</b>${meta ? `<small>${meta} · ${index + 1}/${items.length}</small>` : ""}${it.descripcion ? `<span>${esc(it.descripcion)}${link}</span>` : ""}`;
      const multi = items.length > 1;
      $("#lbPrev").hidden = !multi; $("#lbNext").hidden = !multi;
    }

    function open(cat, i, trigger){
      items = App.lightboxItems(cat); lastFocus = trigger;
      show(i);
      lb.hidden = false;
      requestAnimationFrame(() => lb.classList.add("open"));
      document.body.style.overflow = "hidden";
      $("#lbClose").focus();
    }

    function close(){
      lb.classList.remove("open"); document.body.style.overflow = "";
      setTimeout(() => { lb.hidden = true; $("#lbMedia").innerHTML = ""; }, 350);
      lastFocus?.focus();
    }

    $("#workBlocks").addEventListener("click", e => {
      const t = e.target.closest("[data-cat][data-i]"); if (!t) return;
      open(t.dataset.cat, +t.dataset.i, t);
    });
    $("#lbClose").onclick = close;
    $("#lbPrev").onclick = () => show(index - 1);
    $("#lbNext").onclick = () => show(index + 1);
    lb.addEventListener("click", e => { if (e.target === lb || e.target.tagName === "FIGURE") close(); });
    addEventListener("keydown", e => {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft" && items.length > 1) show(index - 1);
      if (e.key === "ArrowRight" && items.length > 1) show(index + 1);
      if (e.key === "Tab") { // mantiene el foco dentro del lightbox
        const f = [...lb.querySelectorAll("button:not([hidden]),a,iframe")];
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  };
})();
