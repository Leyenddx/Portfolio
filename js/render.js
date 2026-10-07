/* RENDER: pinta todo el contenido traducible (hero, educación, experiencia, contacto, pestañas) */
(() => {
  const { $, esc, asset, state } = App;

  const eduBlock = e => `<h2>${esc(e.titulo)}</h2><p class="sub">${esc(e.subtitulo)}</p><p>${esc(e.texto)}</p>`;

  /* Iconos SVG de las tarjetas de contacto */
  const ico = {
    wa:`<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3z"/><path d="M9 9.5c.3 2 2.3 4.2 5 5l1.2-1.2 2 1-.5 1.6c-3.5.6-8.4-3.4-9-7.6L9.3 7l1.2 2z"/></svg>`,
    mail:`<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
    ig:`<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#fff"/></svg>`
  };

  App.renderContent = isSwitch => {
    const { C, T, keys, current } = state;

    /* Textos de interfaz (nav, botones, aria-labels) */
    document.documentElement.lang = T.htmlLang;
    document.title = T.pageTitle;
    $("#nav").setAttribute("aria-label", T.navSecciones);
    $("#menuBtn").setAttribute("aria-label", T.menuAbrir);
    $("#logoImg").alt = T.logoAlt;
    $("#navInicio").textContent = T.navInicio;
    $("#navEducacion").textContent = T.navEducacion;
    $("#navExperiencia").textContent = T.navExperiencia;
    $("#navTrabajos").textContent = T.navTrabajos;
    $("#navContacto").textContent = T.navContacto;
    $("#ctaWork").textContent = T.ctaWork;
    $("#ctaContact").textContent = T.ctaContact;
    $("#dots").setAttribute("aria-label", T.dotsAria);
    $("#dots").querySelectorAll("button").forEach(b => b.setAttribute("aria-label", T.dotsGoTo(b.dataset.id)));
    $("#expTitle").textContent = T.expTitle;
    $("#workTitle").textContent = T.workTitle;
    $("#workHint").textContent = T.workHint;
    $("#prev").setAttribute("aria-label", T.prevAria);
    $("#next").setAttribute("aria-label", T.nextAria);
    $("#contactTitle").textContent = T.contactTitle;
    $("#contactLead").textContent = T.contactLead;
    $("#toTop").textContent = T.toTop;
    $("#lb").setAttribute("aria-label", T.lbAria);
    $("#lbClose").setAttribute("aria-label", T.lbClose);
    $("#lbPrev").setAttribute("aria-label", T.prevAria);
    $("#lbNext").setAttribute("aria-label", T.nextAria);
    $("#langBtn").textContent = T.langBtn;
    $("#langBtn").setAttribute("aria-label", T.langBtnAria);
    App.updateThemeBtn();

    /* Hero */
    $("#heroRol").textContent = C.hero.rol;
    $("#heroTitle").innerHTML = C.hero.titulo.split("|").map(l=>`<span class="ln"><span>${esc(l.trim())}</span></span>`).join("");
    $("#heroText").textContent = C.hero.texto;
    $("#heroFoto").src = asset(C.hero.foto);
    $("#heroFoto").alt = T.retratoAlt(C.nombre);
    $("#heroTag").textContent = C.nombre;

    /* Education */
    $("#eduSeal").src = asset(C.educacion.escudo);
    $("#eduSeal").alt = T.sealAlt;
    $("#eduPro").innerHTML = eduBlock(C.educacion.profesional);
    $("#eduCom").innerHTML = eduBlock(C.educacion.complementaria);
    $("#tools").innerHTML = C.herramientas.map(g => `<div class="tool rv-up"><h3>${esc(g.grupo)}</h3><ul>${
      g.items.map(t=>`<li class="chip" title="${esc(t.nombre)}"><b aria-hidden="true"><img src="${esc(t.icono)}" alt=""></b><span>${esc(t.nombre)}</span></li>`).join("")}</ul></div>`).join("");

    /* Experience */
    $("#timeline").innerHTML = C.experiencia.map(j => `<article class="job rv-up"><h3>${esc(j.empresa)}</h3><p class="role">${esc(j.puesto)}</p><p class="when">${esc(j.periodo)}</p><p>${esc(j.texto)}</p></article>`).join("");

    /* Contact */
    const k = C.contacto;
    $("#ways").innerHTML = `
      <a class="way rv-up" href="https://wa.me/${esc(k.whatsapp)}" target="_blank" rel="noopener"><span class="way__icon">${ico.wa}</span><strong>${esc(T.waLabel)}</strong><span>${esc(k.telefonoVisible)}</span><em>${esc(T.waCta)}</em></a>
      <a class="way rv-up" href="mailto:${esc(k.correo)}"><span class="way__icon">${ico.mail}</span><strong>${esc(T.mailLabel)}</strong><span>${esc(k.correo)}</span><em>${esc(T.mailCta)}</em></a>
      <a class="way rv-up" href="https://instagram.com/${esc(k.instagram)}" target="_blank" rel="noopener"><span class="way__icon">${ico.ig}</span><strong>${esc(T.igLabel)}</strong><span>@${esc(k.instagram)}</span><em>${esc(T.igCta)}</em></a>`;
    $("#footText").textContent = `© ${new Date().getFullYear()} ${C.nombre} · ${C.marca} · ${k.ciudad}`;

    /* Work tabs */
    $("#tabs").innerHTML = keys.map(key => `<button class="tab" data-key="${key}" aria-expanded="${String(key === current)}" aria-controls="gallery">${esc(C.trabajos[key].titulo)}<small>${C.trabajos[key].items.length} ${esc(T.piezas)}</small></button>`).join("");

    if (isSwitch) {
      // Content already revealed before the switch: show it instantly instead of replaying the scroll animation.
      $("#tools").querySelectorAll(".tool").forEach(el => el.classList.add("in"));
      $("#timeline").querySelectorAll(".job").forEach(el => el.classList.add("in"));
      $("#ways").querySelectorAll(".way").forEach(el => el.classList.add("in"));
      if (current) {
        state.items = C.trabajos[current].items;
        $("#stageTitle").textContent = C.trabajos[current].titulo;
        $("#stageCount").textContent = `${state.items.length} ${T.piezas}`;
        $("#track").innerHTML = state.items.map((it,i) => App.cardHTML(it,i)).join("");
        App.updateNav();
      }
    }
  };
})();
