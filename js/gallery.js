/* GALERÍA: filtros por disciplina, accesos del collage y re-acomodo del masonry al cambiar de tamaño */
(() => {
  const { $, $$, reduce, state } = App;

  /* Muestra solo la categoría elegida ("todo" = todas) */
  App.applyFilter = (key, scroll = true) => {
    state.filter = key;
    $$("#filters .chip-btn").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.filter === key)));
    $$("#workBlocks .block").forEach(b => { b.hidden = key !== "todo" && b.dataset.cat !== key; });
    if (scroll) $("#workBlocks").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  App.initGallery = () => {
    $("#filters").addEventListener("click", e => {
      const b = e.target.closest(".chip-btn"); if (b) App.applyFilter(b.dataset.filter);
    });

    /* Collage de la portada: lleva al bloque correspondiente (y quita el filtro si lo ocultaba) */
    $("#collage").addEventListener("click", e => {
      const a = e.target.closest(".collage__card"); if (!a) return;
      e.preventDefault();
      if (state.filter !== "todo") App.applyFilter("todo", false);
      $("#cat-" + a.dataset.cat).scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });

    /* Re-acomoda las columnas del masonry solo cuando cambia su número */
    let cols = App.masonryCols();
    addEventListener("resize", () => {
      const n = App.masonryCols();
      if (n !== cols) { cols = n; App.layoutMasonry(); }
    });
  };
})();
