/* CORE: namespace global App, estado compartido y utilidades (selector, escape HTML, assets) */
const App = {};

App.$ = s => document.querySelector(s);
App.esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
App.asset = v => (typeof v === "string" && v.startsWith("asset:")) ? (window.ASSETS?.[v.slice(6)] || "") : v;
App.reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Estado: idioma activo, textos, categoría abierta y piezas visibles */
App.state = {
  lang: "es",
  C: null,                               // contenido del idioma activo (CONFIG[lang])
  T: null,                               // textos de interfaz del idioma activo (UI[lang])
  keys: Object.keys(CONFIG.es.trabajos), // categorías de trabajo
  current: null,                         // categoría abierta en la galería
  items: []                              // piezas de la categoría abierta
};
