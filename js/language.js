/* IDIOMA: detección (guardado/navegador), estado ES/EN y botón de cambio */
(() => {
  const { $, state } = App;

  function detectLang(){
    try { const saved = localStorage.getItem("lang"); if (saved === "es" || saved === "en") return saved; } catch {}
    return (navigator.language || "").toLowerCase().startsWith("en") ? "en" : "es";
  }

  function applyLang(lang){
    state.lang = lang;
    state.C = CONFIG[lang];
    state.T = UI[lang];
  }

  function setLanguage(lang){
    if (lang !== "es" && lang !== "en") return;
    applyLang(lang);
    try { localStorage.setItem("lang", lang); } catch {}
    App.renderContent(true);
  }

  App.initLanguage = () => {
    applyLang(detectLang());
    $("#langBtn").addEventListener("click", () => setLanguage(state.lang === "es" ? "en" : "es"));
  };
})();
