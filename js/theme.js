/* TEMA: claro/oscuro, sigue al sistema hasta que el usuario elige y se guarda */
(() => {
  const { $, state } = App;
  const root = document.documentElement;

  const isDark = () => root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;

  App.updateThemeBtn = () => {
    const b = $("#themeBtn"), T = state.T;
    b.setAttribute("aria-label", isDark() ? T.themeToLight : T.themeToDark);
    b.setAttribute("aria-pressed", String(isDark()));
  };

  App.initTheme = () => {
    try { const t = localStorage.getItem("theme"); if (t === "light" || t === "dark") root.dataset.theme = t; } catch {}
    if (!root.dataset.theme) root.dataset.theme = isDark() ? "dark" : "light"; // follow system until the user chooses
    $("#themeBtn").addEventListener("click", () => {
      const next = isDark() ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch {}
      App.updateThemeBtn();
    });
  };
})();
