/* RENDER: pinta todo el contenido traducible (portada, trabajos, perfil, contacto, dock) */
(() => {
  const { $, $$, esc, state } = App;

  /* Iconos SVG de contacto */
  const ico = {
    wa:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3z"/><path d="M9 9.5c.3 2 2.3 4.2 5 5l1.2-1.2 2 1-.5 1.6c-3.5.6-8.4-3.4-9-7.6L9.3 7l1.2 2z"/></svg>`,
    mail:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
    ig:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
    cv:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>`,
    ext:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>`
  };
  App.ico = ico;

  const meta = it => [it.formato, it.cliente].filter(Boolean).map(esc).join(" · ");
  const waUrl = k => `https://wa.me/${encodeURIComponent(k.whatsapp)}`;
  const set = (sel, prop, val) => { const el = $(sel); if (el) el[prop] = val; };
  const attr = (sel, name, val) => $(sel)?.setAttribute(name, val);

  /* Galería de diseño (masonry): cada pieza va a la columna más corta; las muy altas se recortan a MAX_H */
  const MAX_H = 620;
  App.masonryCols = () => innerWidth <= 980 ? 2 : 3;
  const masonryHTML = (cat, items) => {
    const n = App.masonryCols(), cols = Array.from({length:n}, () => []), heights = Array(n).fill(0);
    const colW = Math.max(150, (($("#workBlocks")?.clientWidth || innerWidth) - (n - 1) * 20) / n);
    items.forEach((it, i) => {
      const wh = App.size(it.src), c = heights.indexOf(Math.min(...heights));
      heights[c] += Math.min(wh ? colW * wh[1] / wh[0] : colW * 1.25, MAX_H) + 70; // 70 ≈ pie de foto + espacio
      cols[c].push(
      `<button class="piece" type="button" data-cat="${cat}" data-i="${i}" aria-label="${esc(state.T.verAria(it.titulo))}">
        <span class="piece__media">${App.img(it.src)}<span class="piece__zoom" aria-hidden="true">+</span></span>
        <span class="piece__info"><b>${esc(it.titulo)}</b><small>${meta(it)}</small></span>
      </button>`);
    });
    return cols.map(c => `<div class="masonry__col">${c.join("")}</div>`).join("");
  };
  App.layoutMasonry = () => {
    const m = $("#masonry-diseno");
    if (m) m.innerHTML = masonryHTML("diseno", state.C.trabajos.diseno.items);
  };

  const videoHTML = items => items.map((it, i) => {
    return `<button class="vid ${it.vertical ? "vid--v" : "vid--h"}" type="button" data-cat="video" data-i="${i}" aria-label="${esc(state.T.reproducirAria(it.titulo))}">
      <span class="vid__media">${App.ytImg(it.src)}${App.playIcon}${i === 0 ? `<span class="vid__tag">${esc(it.formato)}</span>` : ""}</span>
      <span class="vid__info"><b>${esc(it.titulo)}</b><small>${meta(it)}</small></span>
    </button>`;
  }).join("");

  const projectsHTML = items => {
    const T = state.T; let start = 0;
    return items.map((p, i) => {
      const first = start; start += p.imagenes.length;
      return `<article class="project${i === 0 ? " project--lead" : ""}">
        <button class="project__media" type="button" data-cat="digital" data-i="${first}" aria-label="${esc(T.verAria(p.titulo))}">
          ${App.img(p.imagenes[0])}
          ${p.imagenes.length > 1 ? `<span class="project__count">${esc(T.imagenes(p.imagenes.length))}</span>` : ""}
        </button>
        <div class="project__body">
          <small class="project__meta">${meta(p)}</small>
          <h4>${esc(p.titulo)}</h4>
          <p>${esc(p.descripcion)}</p>
          ${p.enlace ? `<a class="btn btn--ghost btn--sm" href="${esc(p.enlace.url)}" target="_blank" rel="noopener">${esc(p.enlace.texto)} ${ico.ext}</a>` : ""}
        </div>
      </article>`;
    }).join("");
  };

  /* Lista plana para el lightbox de cada categoría (en digital: una entrada por imagen) */
  App.lightboxItems = cat => {
    const items = state.C.trabajos[cat].items;
    if (cat !== "digital") return items;
    return items.flatMap(p => p.imagenes.map(src => ({ ...p, tipo: "imagen", src })));
  };

  const blockHTML = key => {
    const b = state.C.trabajos[key], T = state.T;
    const body = key === "diseno" ? `<div class="masonry" id="masonry-diseno"></div>`
               : key === "video"  ? `<div class="reel">${videoHTML(b.items)}</div>`
               : `<div class="projects">${projectsHTML(b.items)}</div>`;
    return `<section class="block" id="cat-${key}" data-cat="${key}" aria-labelledby="h-${key}">
      <header class="block__head rv-up">
        <span class="block__num" aria-hidden="true">${esc(b.numero)}</span>
        <div class="block__title">
          <h3 id="h-${key}">${esc(b.titulo)}</h3>
          <p>${esc(b.intro)}</p>
        </div>
        <ul class="block__tools" aria-label="${esc(T.herramientasDe)}">${b.herramientas.map(h => `<li>${esc(h)}</li>`).join("")}</ul>
      </header>
      ${body}
    </section>`;
  };

  App.renderContent = isSwitch => {
    const { C, T, keys } = state, k = C.contacto, P = C.perfil;

    /* Textos de interfaz */
    document.documentElement.lang = T.htmlLang;
    document.title = T.pageTitle;
    attr("#nav", "aria-label", T.navSecciones);
    attr("#menuBtn", "aria-label", T.menuAbrir);
    attr("#logo", "aria-label", T.logoAlt);
    set("#navTrabajos", "textContent", T.navTrabajos);
    set("#navPerfil", "textContent", T.navPerfil);
    set("#navContacto", "textContent", T.navContacto);
    set("#navCta", "textContent", T.navCta);
    set(".skip", "textContent", T.skip);
    set("#langBtn", "textContent", T.langBtn);
    attr("#langBtn", "aria-label", T.langBtnAria);
    attr("#lb", "aria-label", T.lbAria);
    attr("#lbClose", "aria-label", T.lbClose);
    attr("#lbPrev", "aria-label", T.prevAria);
    attr("#lbNext", "aria-label", T.nextAria);
    attr("#dock", "aria-label", T.dockAria);
    App.updateThemeBtn();

    /* Portada */
    set("#heroDisponible", "textContent", C.hero.disponible);
    set("#heroCiudad", "textContent", C.hero.ciudad);
    $("#heroTitle").innerHTML = C.hero.titulo.split("|").map(l => `<span class="ln"><span>${esc(l.trim())}</span></span>`).join("");
    set("#heroText", "textContent", C.hero.texto);
    set("#ctaWork", "textContent", T.ctaWork);
    $("#ctaWa").href = waUrl(k);
    $("#ctaWa").innerHTML = `${ico.wa}<span>${esc(T.waLabel)}</span>`;
    $("#ctaMail").href = `mailto:${k.correo}`;
    $("#ctaMail").innerHTML = `${ico.mail}<span>${esc(T.mailLabel)}</span>`;
    $("#ctaCV").href = k.cv;
    $("#ctaCV").innerHTML = `${ico.cv}<span>${esc(T.ctaCV)}</span>`;
    $("#collage").innerHTML = C.hero.destacados.map((d, i) => {
      const b = C.trabajos[d.cat];
      return `<a class="collage__card collage__card--${i + 1}" href="#cat-${d.cat}" data-cat="${d.cat}">
        <img src="${esc(d.src)}" alt="" decoding="async" ${i ? 'loading="lazy"' : 'fetchpriority="high"'}>
        ${d.cat === "video" ? App.playIcon : ""}
        <span class="collage__label"><b>${esc(b.numero)}</b>${esc(b.titulo)}</span>
      </a>`;
    }).join("");
    set("#clientsTitle", "textContent", C.hero.clientesTitulo);
    $("#clients").innerHTML = C.hero.clientes.map(c => `<li>${esc(c)}</li>`).join("");

    /* Trabajos: filtros + bloques */
    set("#workTitle", "textContent", T.workTitle);
    attr("#filters", "aria-label", T.filtrosAria);
    const total = keys.reduce((n, key) => n + C.trabajos[key].items.length, 0);
    $("#filters").innerHTML = [["todo", T.filtroTodo, total], ...keys.map(key => [key, C.trabajos[key].titulo, C.trabajos[key].items.length])]
      .map(([key, label, n]) => `<button class="chip-btn" type="button" data-filter="${key}" aria-pressed="${String(state.filter === key)}">${esc(label)}<small>${n}</small></button>`).join("");
    $("#workBlocks").innerHTML = keys.map(blockHTML).join("");
    App.layoutMasonry();
    App.applyFilter?.(state.filter, false);

    /* Perfil */
    set("#perfilTitle", "textContent", T.perfilTitle);
    $("#perfilFoto").src = P.foto;
    $("#perfilFoto").alt = T.retratoAlt(C.nombre);
    set("#perfilNombre", "textContent", `${C.nombre} · ${C.marca}`);
    set("#perfilRol", "textContent", P.rol);
    set("#perfilTexto", "textContent", P.texto);
    $("#perfilCV").href = k.cv;
    $("#perfilCV").innerHTML = `${ico.cv}<span>${esc(T.ctaCV)}</span>`;
    set("#expTitle", "textContent", T.expTitle);
    $("#jobs").innerHTML = P.experiencia.map(j => `<li><div class="jobs__head"><b>${esc(j.empresa)}</b><span>${esc(j.puesto)}</span></div><p>${esc(j.texto)}</p></li>`).join("");
    set("#skillsTitle", "textContent", T.skillsTitle);
    $("#skills").innerHTML = P.habilidades.map(s => `<li>${esc(s)}</li>`).join("");
    set("#langTitle", "textContent", T.langTitle);
    $("#langs").innerHTML = P.idiomas.map(l => `<li><div class="langs__row"><b>${esc(l.nombre)}</b><span>${esc(l.nivel)}</span></div>
      <span class="meter" role="img" aria-label="${esc(l.nombre)}: ${esc(l.nivel)}"><i style="width:${Number(l.valor) || 0}%"></i></span></li>`).join("");
    set("#eduTitle", "textContent", T.eduTitle);
    const e = P.educacion;
    $("#edu").innerHTML = `<img src="${esc(e.escudo)}" alt="${esc(T.sealAlt)}" width="52" height="52" loading="lazy">
      <div><b>${esc(e.titulo)}</b><span>${esc(e.institucion)}</span></div>
      <p>${esc(e.complementaria)}</p>`;
    set("#toolsTitle", "textContent", T.toolsTitle);
    $("#tools").innerHTML = P.herramientas.map(t => `<li title="${esc(t.nombre)}"><b aria-hidden="true"><img src="${esc(t.icono)}" alt="" loading="lazy"></b><span>${esc(t.nombre)}</span></li>`).join("");

    /* Contacto */
    set("#contactKicker", "textContent", T.contactKicker);
    set("#contactTitle", "textContent", T.contactTitle);
    set("#contactLead", "textContent", T.contactLead);
    $("#ways").innerHTML = `
      <div class="way rv-up"><span class="way__icon">${ico.wa}</span><strong>${esc(T.waLabel)}</strong><span>${esc(k.telefonoVisible)}</span>
        <div class="way__actions"><a class="btn btn--solid btn--sm" href="${waUrl(k)}" target="_blank" rel="noopener">${esc(T.waCta)}</a></div></div>
      <div class="way rv-up"><span class="way__icon">${ico.mail}</span><strong>${esc(T.mailLabel)}</strong><span>${esc(k.correo)}</span>
        <div class="way__actions"><a class="btn btn--solid btn--sm" href="mailto:${esc(k.correo)}">${esc(T.mailCta)}</a><button class="btn btn--ghost btn--sm" type="button" data-copy="${esc(k.correo)}">${esc(T.copiar)}</button></div></div>
      <div class="way rv-up"><span class="way__icon">${ico.ig}</span><strong>${esc(T.igLabel)}</strong><span>@${esc(k.instagram)}</span>
        <div class="way__actions"><a class="btn btn--solid btn--sm" href="https://instagram.com/${esc(k.instagram)}" target="_blank" rel="noopener">${esc(T.igCta)}</a></div></div>
      <div class="way way--cv rv-up"><span class="way__icon">${ico.cv}</span><strong>CV</strong><span>PDF</span>
        <div class="way__actions"><a class="btn btn--solid btn--sm" href="${esc(k.cv)}" target="_blank" rel="noopener">${esc(T.ctaCV)}</a></div></div>`;
    set("#footText", "textContent", `© ${new Date().getFullYear()} ${C.nombre} · ${C.marca} · ${k.ciudad}`);
    set("#toTop", "textContent", T.toTop);

    /* Dock de contacto rápido */
    $("#dock").innerHTML = `
      <a class="dock__btn dock__btn--wa" href="${waUrl(k)}" target="_blank" rel="noopener">${ico.wa}<span>${esc(T.waLabel)}</span></a>
      <a class="dock__btn" href="mailto:${esc(k.correo)}">${ico.mail}<span>${esc(T.mailLabel)}</span></a>`;

    App.observeReveal?.(isSwitch);
    if (isSwitch) $$(".rv-up").forEach(el => el.classList.add("in"));
  };
})();
