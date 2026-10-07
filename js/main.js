/* MAIN: arranque, inicializa los módulos en orden (idioma → tema → contenido → interacciones) */
document.addEventListener("DOMContentLoaded", () => {
  App.initLanguage();
  App.initTheme();
  App.renderContent(false);
  App.initGallery();
  App.initLightbox();
  App.initNavigation();
  App.initScrollEffects();
});
