/* CONTENIDO (ES): textos, educación, herramientas, experiencia, trabajos y contacto */
const CONFIG = {};

CONFIG.es = {
  nombre: "Aron (Leyenddx)",
  marca: "Leyenddx",

  hero: {
    titulo: "Bienvenido a|mi portafolio",   // la barra | marca el salto de línea
    rol: "Diseño digital, Diseño gráfico, video y comunicación",
    texto: "Soy Aron Navarro (aka Leyenddx) 29 años, diseñador y editor en Ciudad Juárez. Con una amplia experiencia en la elaboración de contenido audiovisual para todo tipo de medios, así como el desarrollo de soluciones digitales: Aquí reúno lo que he hecho y cómo lo hago.",
    foto: "img/foto.jpg"
  },

  educacion: {
    escudo: "img/uacj.webp",
    profesional: {
      titulo: "Educación profesional",
      subtitulo: "Universidad Autónoma de Ciudad Juárez",
      texto: "Recién egresado de la carrera de Diseño Digital de medios interactivos en el campus IADA de la UACJ. DDMI es una carrera que fusiona lo mejor de varias ramas de la tecnología, el diseño, la ingeniería y el arte. No se deje engañar, aunque recién egrese de la carrera, tengo experiencia laboral desde hace años ya que he tenido la oportunidad de trabajar en diversos proyectos, empresas y agencias que me ayudaron."
    },
    complementaria: {
      titulo: "Educación complementaria",
      subtitulo: "Cursos y certificaciones",
      texto: "El diseño digital esta en constante evolución, por lo que me gusta mantenerme actualizando, tomando cursos de todo tipo. Modelado 3D,  Motion Graphics, Desarrollo web, Diseño, Edición de video, Videojuegos, e incluso Prompting e IA como herramientas de diseño."
    }
  },

  herramientas: [
    { grupo: "3D y tiempo real", items: [
      { nombre: "Blender", icono: "img/Icons/Blender.svg" }, { nombre: "Unity", icono: "img/Icons/Unity.svg" }, { nombre: "DaVinci Resolve", icono: "img/Icons/DaVinci.svg" } ] },
    { grupo: "Adobe", items: [
      { nombre: "Photoshop", icono: "img/Icons/PS.svg" }, { nombre: "Illustrator", icono: "img/Icons/AI.svg" },
      { nombre: "After Effects", icono: "img/Icons/AE.svg" }, { nombre: "Premiere Pro", icono: "img/Icons/PR.svg" } ] },
    { grupo: "Código", items: [
      { nombre: "VS Code", icono: "img/Icons/Visual.svg" }, { nombre: "Claude", icono: "img/Icons/Claude.svg" }, { nombre: "GitHub", icono: "img/Icons/Github.svg" } ] }
  ],

  experiencia: [
    { empresa: "ECI", puesto: "Especialista de comunicación",
      texto: "Comunicación interna y marketing a nivel nacional: campañas de reconocimiento, infografías, video corporativo y contenido para redes." },
    { empresa: "Boyante", puesto: "Diseñador gráfico",
      texto: "Desarrollador de contenido visual para redes sociales brindando servicio a diferentes negocios pequeños y medianos." },
    { empresa: "UACJ · MIAAD", puesto: "Beca de trabajo · Diseño y edición",
      texto: "Gracias a la beca de trabajo de la UACJ tuve la oportunidad de trabajar de la mano con la coordinación de la Maestría en Inteligencia Artificial y Analítica de Datos de la UACJ desarrollando diferente material audiovisual de comunicación, flayers, videos spots, etc." },
    { empresa: "Freelance", puesto: "Editor y desarrollador",
      texto: "En el apartado de trabajador independiente cuento con diferentes proyectos de diseño, edición de video, desarrollo web, etc." }
  ],

  trabajos: {
    diseno: { titulo: "Diseño", items: [
      { tipo: "imagen", src: "img/diseno/eci1.webp", titulo: "Campaña de reconocimiento", descripcion: "" },
      { tipo: "imagen", src: "img/diseno/eci4.webp", titulo: "Infografía", descripcion: "Pieza para comunicación interna." },
      { tipo: "imagen", src: "img/diseno/miaad1.webp", titulo: "Flayer de comunicación para la MIAAD", descripcion: "" },
      { tipo: "imagen", src: "img/diseno/eci6.webp", titulo: "Cartel", descripcion: "" },
      { tipo: "imagen", src: "img/diseno/eci5.webp", titulo: "Volante", descripcion: "" },
      { tipo: "imagen", src: "img/diseno/eci2.webp", titulo: "Newsletter", descripcion: "" },
      { tipo: "imagen", src: "img/diseno/miaad2.jpg", titulo: "Post para redes sociales", descripcion: "" }
    ]},
    video: { titulo: "Video", items: [
      { tipo: "youtube", src: "hi4sQe1Siik", titulo: "Video corporativo", descripcion: "" },
      { tipo: "youtube", src: "Qs_ZFwY1nxg", titulo: "Video Social", descripcion: "" },
      { tipo: "youtube", src: "NJKLn5tpc5g", titulo: "Testimonio MIAAD", descripcion: "" },
      { tipo: "youtube", src: "PmzrSf-JDtI", titulo: "Cápsula para redes", descripcion: "" }
    ]},
    digital: { titulo: "Diseño digital", items: [
      { tipo: "imagen", src: "img/digital/ilustrr.webp", titulo: "Ilustracion digital", descripcion: "Ilustracion digital echa a mano." },
      { tipo: "imagen", src: "img/digital/PSTL1.png", titulo: "PRESS START TO LEARN", descripcion: "Press start to learn es una aplicación realizada por encargo de la UACJ especialmente para el taller de redes neuronales en el congreso de Inteligencia artificial de la UACJ llevado a cabo en el 2025." },
      { tipo: "imagen", src: "img/digital/PSTL2.png", titulo: "PRESS START TO LEARN", descripcion: "Es una aplicación/juego interactivo que sirve como material de apoyo para explicar conceptos de redes neuronales de forma dinámica y fácil." },
      { tipo: "imagen", src: "img/digital/indsite.png", titulo: "PROYECTO INDSITE", descripcion: "Indiste es un proyecto de difusión histórica/artística, es una experiencia corta de 3 recorridos que busca enseñar sobre la cultura autóctona del estado de Chihuahua en México. Se puede probar descargándolo desde el siguiente enlace: https://leyenddx.itch.io/indsite-ecos-de-paquim." },
      { tipo: "imagen", src: "img/digital/Tribulacion.png", titulo: "Tribulación: Last Breath", descripcion: "“Tribulación: Last Breath” es un pequeño juego de disparos en primera persona en el que tienes que aguantar el mayor tiempo posible, en este proyecto se puso en practica una serie de conocimientos de programación, diseño, grabación de audio, etc. Se puede probar en el siguiente enlace: https://leyenddx.itch.io/tribulacion-last-breath" }
    ]}
  },

  contacto: {
    whatsapp: "6564581972",
    telefonoVisible: "+52 656 458 1972",
    correo: "aarok_ny224@hotmail.com",
    instagram: "aron_leyend0806",
    ciudad: "Ciudad Juárez, Chihuahua"
  }
};
