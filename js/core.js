/* CORE: namespace global App, estado compartido y utilidades (selector, escape HTML, assets) */
const App = {};

App.$ = s => document.querySelector(s);
App.$$ = s => [...document.querySelectorAll(s)];
App.esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
App.reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Estado: idioma activo, textos, filtro de trabajos */
App.state = {
  lang: "es",
  C: null,                               // contenido del idioma activo (CONFIG[lang])
  T: null,                               // textos de interfaz del idioma activo (UI[lang])
  keys: Object.keys(CONFIG.es.trabajos), // categorías de trabajo (diseno, video, digital)
  filter: "todo"                         // categoría visible ("todo" = todas)
};
