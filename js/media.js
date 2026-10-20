/* MEDIA: miniaturas optimizadas, imágenes de YouTube y medios del lightbox */
(() => {
  const { esc } = App;

  /* img/diseno/eci1.webp -> img/thumbs/eci1.webp (si no existe, se usa la original) */
  App.thumb = src => /^img\/(?!thumbs\/)/.test(src)
    ? "img/thumbs/" + src.split("/").pop().replace(/\.[^.]+$/, "") + ".webp"
    : src;

  App.ytThumb = id => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/maxresdefault.jpg`;

  /* Tamaño [ancho, alto] de la miniatura según js/data/thumbs.js (generado por tools/miniaturas.sh) */
  App.size = src => (typeof THUMBS !== "undefined" && THUMBS[src.split("/").pop().replace(/\.[^.]+$/, "")]) || null;

  /* <img> con miniatura, tamaño reservado (sin saltos al cargar) y respaldo automático */
  App.img = (src, alt = "", extra = "") => {
    const t = App.thumb(src), wh = App.size(src);
    const fb = t !== src ? `data-full="${esc(src)}" onerror="this.onerror=null;this.src=this.dataset.full"` : "";
    const dims = wh ? `width="${wh[0]}" height="${wh[1]}"` : "";
    return `<img src="${esc(t)}" alt="${esc(alt)}" ${dims} loading="lazy" decoding="async" ${fb} ${extra}>`;
  };

  /* Miniatura de YouTube (maxres con respaldo a hq) */
  App.ytImg = (id, alt = "") =>
    `<img src="${App.ytThumb(id)}" alt="${esc(alt)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${esc(id)}/hqdefault.jpg'">`;

  /* Medio a tamaño completo para el lightbox */
  App.fullMedia = it => {
    if (it.tipo === "youtube") {
      return `<iframe class="${it.vertical ? "is-vertical" : ""}" src="https://www.youtube-nocookie.com/embed/${esc(it.src)}?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen title="${esc(it.titulo)}"></iframe>`;
    }
    return `<img src="${esc(it.src)}" alt="${esc(it.titulo)}">`;
  };

  App.playIcon = `<span class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="#fff" d="M8 5v14l11-7z"/></svg></span>`;
})();
