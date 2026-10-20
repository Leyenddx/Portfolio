/* TEXTOS DE INTERFAZ (ES): menú, botones, etiquetas de accesibilidad */
const UI = {};

UI.es = {
  htmlLang: "es", pageTitle: "Aron Navarro · Diseño gráfico, video y diseño digital",
  skip: "Ir a los trabajos", navSecciones: "Secciones", menuAbrir: "Abrir menú", logoAlt: "Leyenddx, inicio",
  navTrabajos: "Trabajos", navPerfil: "Perfil", navContacto: "Contacto", navCta: "Contáctame",
  ctaWork: "Ver trabajos", ctaCV: "Descargar CV",
  workTitle: "Trabajos seleccionados", filtroTodo: "Todo", filtrosAria: "Filtrar trabajos por disciplina",
  piezas: n => `${n} ${n === 1 ? "pieza" : "piezas"}`,
  herramientasDe: "Herramientas",
  imagenes: n => `${n} imágenes`,
  verProyecto: "Ver imágenes",
  perfilTitle: "Perfil", expTitle: "Experiencia", skillsTitle: "Habilidades", langTitle: "Idiomas", toolsTitle: "Herramientas", eduTitle: "Educación",
  contactKicker: "Contacto", contactTitle: "¿Trabajamos juntos?",
  contactLead: "Respondo rápido por WhatsApp o correo. Cuéntame de tu vacante o proyecto de diseño, video o web.",
  waLabel: "WhatsApp", waCta: "Enviar mensaje",
  mailLabel: "Correo", mailCta: "Escribir correo", copiar: "Copiar", copiado: "¡Copiado!",
  igLabel: "Instagram", igCta: "Ver perfil",
  dockAria: "Contacto rápido",
  toTop: "Volver arriba",
  lbAria: "Vista ampliada", lbClose: "Cerrar", prevAria: "Anterior", nextAria: "Siguiente",
  verAria: titulo => `Ver ${titulo}`,
  reproducirAria: titulo => `Reproducir ${titulo}`,
  retratoAlt: nombre => `Retrato de ${nombre}`,
  sealAlt: "Escudo de la Universidad Autónoma de Ciudad Juárez",
  langBtn: "EN", langBtnAria: "Cambiar a inglés",
  themeToLight: "Cambiar a tema claro", themeToDark: "Cambiar a tema oscuro"
};
