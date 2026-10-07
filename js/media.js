/* MEDIA: placeholders, miniaturas/embeds (imagen, video, YouTube) y HTML de tarjetas */
(() => {
  const { esc, state } = App;

  /* Arte de relleno para huecos de galería sin archivo */
  const hues = [["#12467A","#0C3259"],["#A51731","#7E0F23"],["#2A5A86","#12467A"],["#6B7280","#374151"]];
  function placeholder(label, i, video){
    const [a,b] = hues[i % hues.length];
    const txt = video ? state.T.placeholderVideo : state.T.placeholderImagen;
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs><rect width='400' height='500' fill='url(#g)'/><path d='M400 0v500H0z' fill='#fff' opacity='.06'/><path d='M400 180v60L0 440v-60z' fill='#fff' opacity='.08'/><text x='32' y='70' font-family='Arial' font-weight='700' font-size='22' fill='#fff' opacity='.85'>${txt}</text><text x='32' y='100' font-family='Arial' font-size='16' fill='#fff' opacity='.6'>${label.replace(/[<&'"]/g,"")}</text></svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  /* Fallback onerror: reemplaza el elemento roto por el placeholder */
  window.__ph = (el, label, i, video) => {
    const img = document.createElement("img"); img.src = placeholder(label, i, video); img.alt = "";
    el.replaceWith(img);
  };

  /* Medio de una pieza: miniatura (tarjeta) o versión completa (lightbox) */
  App.mediaFor = (it, i, inLightbox) => {
    const fb = `onerror="__ph(this,'${esc(it.titulo).replace(/'/g,"")}',${i},${it.tipo !== "imagen"})"`;
    const src = it.src;
    if (it.tipo === "youtube" && src) {
      return inLightbox ? `<iframe src="https://www.youtube-nocookie.com/embed/${esc(src)}?autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen title="${esc(it.titulo)}"></iframe>`
                        : `<img src="https://i.ytimg.com/vi/${esc(src)}/hqdefault.jpg" alt="" loading="lazy">`;
    }
    if (it.tipo === "video" && src) {
      return inLightbox ? `<video src="${esc(src)}" controls autoplay playsinline ${fb}></video>`
                        : `<video src="${esc(src)}#t=0.5" muted playsinline preload="metadata" ${fb}></video>`;
    }
    const url = src ? esc(src) : placeholder(it.titulo, i, it.tipo !== "imagen");
    return `<img src="${url}" alt="${inLightbox ? esc(it.titulo) : ""}" loading="lazy" ${src ? fb : ""}>`;
  };

  /* Tarjeta de la galería */
  App.cardHTML = (it, i) => {
    return `<button class="card" data-i="${i}" style="animation-delay:${i*90}ms" aria-label="${esc(state.T.verAria(it.titulo))}">
      <div class="card__media">${App.mediaFor(it,i,false)}${it.tipo !== "imagen" ? `<span class="play"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M8 5v14l11-7z"/></svg></span>` : ""}</div>
      <h4>${esc(it.titulo)}</h4><p>${esc(it.descripcion)}</p></button>`;
  };
})();
