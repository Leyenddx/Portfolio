/* CONTENIDO (ES): portada, trabajos, perfil (experiencia, habilidades, educación) y contacto */
const CONFIG = {};

CONFIG.es = {
  nombre: "Aron Navarro",
  marca: "Leyenddx",

  hero: {
    disponible: "Disponible para trabajar",
    ciudad: "Ciudad Juárez, MX",
    titulo: "Diseño gráfico,|edición de video|y diseño digital.",   // la barra | marca el salto de línea
    texto: "Soy Aron Navarro (Leyenddx), diseñador y editor. Creo campañas, video corporativo, contenido para redes y experiencias interactivas para empresas e instituciones como ECI y la UACJ.",
    clientesTitulo: "He trabajado con",
    clientes: ["ECI · Electrical Components International", "UACJ", "MIAAD", "Boyante", "Freelance"],
    // Collage de la portada: cada tarjeta lleva a su categoría
    destacados: [
      { cat: "diseno",  src: "img/thumbs/eci6.webp" },
      { cat: "video",   src: "https://i.ytimg.com/vi/Qs_ZFwY1nxg/maxresdefault.jpg" },
      { cat: "digital", src: "img/thumbs/indsite.webp" }
    ]
  },

  /* TRABAJOS: cada categoría tiene número, título, introducción, herramientas y piezas.
     La miniatura se toma de img/thumbs/<mismo nombre>.webp; si no existe, se usa la imagen original. */
  trabajos: {
    diseno: {
      numero: "01", titulo: "Diseño gráfico", corto: "Diseño",
      intro: "Campañas internas, carteles, infografías, branding y piezas para redes sociales con objetivos claros de comunicación.",
      herramientas: ["Photoshop", "Illustrator"],
      items: [
        { tipo: "imagen", src: "img/diseno/eci6.webp",   titulo: "Tu carrera en Electro", cliente: "ECI", formato: "Cartel", descripcion: "Cartel de campaña interna sobre el plan de carrera de los colaboradores." },
        { tipo: "imagen", src: "img/diseno/miaad1.webp", titulo: "Eureka AICA", cliente: "MIAAD · UACJ", formato: "Post para redes", descripcion: "Anuncio de la aprobación del proyecto Erasmus+ Eureka AICA por la Comisión Europea." },
        { tipo: "imagen", src: "img/diseno/eci1.webp",   titulo: "Somos Familia", cliente: "ECI", formato: "Campaña de reconocimiento", descripcion: "Banner vertical para campaña de reconocimiento a colaboradores." },
        { tipo: "imagen", src: "img/diseno/Camisa.webp", titulo: "Corremos juntos", cliente: "ECI", formato: "Diseño de playera", descripcion: "Playera (frente y espalda) para evento deportivo corporativo." },
        { tipo: "imagen", src: "img/diseno/barber.webp", titulo: "Fade City Barber Shop", cliente: "Fade City", formato: "Logotipo", descripcion: "Identidad con lettering estilo graffiti sobre el skyline de la ciudad." },
        { tipo: "imagen", src: "img/diseno/eci3.webp",   titulo: "Día Mundial del Autismo", cliente: "ECI", formato: "Cartel", descripcion: "Campaña de concientización para comunicación interna." },
        { tipo: "imagen", src: "img/diseno/eci4.webp",   titulo: "¿Qué es el TEA?", cliente: "ECI", formato: "Infografía", descripcion: "Infografía complementaria a la campaña del Día Mundial del Autismo." },
        { tipo: "imagen", src: "img/diseno/miaad2.jpg",  titulo: "II Cumbre Nacional de Posgrados", cliente: "MIAAD · UACJ", formato: "Post para redes", descripcion: "Difusión del encuentro de estudiantes en Inteligencia Artificial y Analítica de Datos." },
        { tipo: "imagen", src: "img/diseno/eci5.webp",   titulo: "Contrataciones Planta 3", cliente: "ECI", formato: "Volante", descripcion: "Volante de reclutamiento con vacantes, requisitos y prestaciones." },
        { tipo: "imagen", src: "img/diseno/eci2.webp",   titulo: "Connecting Asia & Mexico", cliente: "ECI", formato: "Newsletter", descripcion: "Boletín interno sobre la visita de colaboración entre plantas." },
        { tipo: "imagen", src: "img/diseno/eci7.jpg",    titulo: "Día Mundial de la Diabetes", cliente: "ECI", formato: "Infografía", descripcion: "Pieza de salud para la división médica de la planta." },
        { tipo: "imagen", src: "img/diseno/eci9.jpg",    titulo: "ECI 50th Anniversary", cliente: "ECI", formato: "Carta de reconocimiento", descripcion: "Plantilla de reconocimiento por antigüedad para el 50 aniversario." }
      ]
    },

    video: {
      numero: "02", titulo: "Edición de video", corto: "Video",
      intro: "Video corporativo, cobertura de eventos, spots y contenido vertical para redes: guion visual, edición, motion graphics y color.",
      herramientas: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      items: [
        { tipo: "youtube", src: "Qs_ZFwY1nxg", titulo: "Data Center", cliente: "ECI", formato: "Video corporativo", descripcion: "Video institucional sobre las capacidades de la planta." },
        { tipo: "youtube", src: "hi4sQe1Siik", titulo: "Carrera 5K ECI", cliente: "ECI", formato: "Video de evento", descripcion: "Cobertura y edición del evento deportivo para colaboradores." },
        { tipo: "youtube", src: "NJKLn5tpc5g", titulo: "Spot MIAAD", cliente: "MIAAD · UACJ", formato: "Spot vertical", vertical: true, descripcion: "Testimonio en formato vertical para la Maestría en IA y Analítica de Datos." },
        { tipo: "youtube", src: "PmzrSf-JDtI", titulo: "Top Perro Frenchies", cliente: "Freelance", formato: "Cápsula para redes", vertical: true, descripcion: "Contenido vertical para redes sociales." }
      ]
    },

    digital: {
      numero: "03", titulo: "Diseño digital", corto: "Digital",
      intro: "Aplicaciones interactivas, videojuegos y experiencias 3D: diseño de interfaz, programación, arte y audio.",
      herramientas: ["Unity", "Blender", "VS Code"],
      items: [
        { tipo: "proyecto", titulo: "Press Start to Learn", cliente: "UACJ · Congreso de IA 2025", formato: "App educativa",
          descripcion: "Aplicación/juego interactivo por encargo de la UACJ para el taller de redes neuronales del congreso de Inteligencia Artificial 2025. Explica conceptos de redes neuronales de forma dinámica y fácil.",
          imagenes: ["img/digital/PSTL1.png", "img/digital/PSTL2.png"] },
        { tipo: "proyecto", titulo: "Indsite: Ecos de Paquimé", cliente: "Proyecto propio", formato: "Experiencia 3D",
          descripcion: "Proyecto de difusión histórica y artística: una experiencia corta de recorridos que enseña sobre la cultura autóctona de Chihuahua, México.",
          imagenes: ["img/digital/indsite.png"],
          enlace: { texto: "Probar en itch.io", url: "https://leyenddx.itch.io/indsite-ecos-de-paquim" } },
        { tipo: "proyecto", titulo: "Tribulación: Last Breath", cliente: "Proyecto propio", formato: "Videojuego FPS",
          descripcion: "Juego de disparos en primera persona donde hay que resistir el mayor tiempo posible. Integra programación, diseño y grabación de audio.",
          imagenes: ["img/digital/Tribulacion.png"],
          enlace: { texto: "Jugar en itch.io", url: "https://leyenddx.itch.io/tribulacion-last-breath" } },
        { tipo: "proyecto", titulo: "Ilustración digital", cliente: "Personal", formato: "Ilustración",
          descripcion: "Ilustración digital hecha a mano, inspirada en la lucha libre y la lotería mexicana.",
          imagenes: ["img/digital/ilustrr.webp"] }
      ]
    }
  },

  /* PERFIL: información general (resumida) */
  perfil: {
    foto: "img/foto.jpg",
    rol: "Diseñador gráfico · Editor de video · Diseñador digital",
    texto: "Egresado de Diseño Digital de Medios Interactivos con años de experiencia en agencias, empresas e instituciones. Combino diseño, video y tecnología para que cada pieza comunique con claridad.",
    experiencia: [
      { empresa: "ECI", puesto: "Especialista de comunicación", texto: "Comunicación interna y marketing a nivel nacional: campañas, infografías, video corporativo y redes." },
      { empresa: "Boyante", puesto: "Diseñador gráfico", texto: "Contenido visual para redes sociales de pequeñas y medianas empresas." },
      { empresa: "UACJ · MIAAD", puesto: "Beca de trabajo · Diseño y edición", texto: "Material audiovisual, flyers y spots para la Maestría en IA y Analítica de Datos." },
      { empresa: "Freelance", puesto: "Editor y desarrollador", texto: "Proyectos de diseño, edición de video y desarrollo web." }
    ],
    habilidades: [
      "Diseño gráfico y editorial", "Edición y postproducción de video", "Motion graphics", "Contenido para redes sociales",
      "Comunicación interna y marketing", "Branding", "Modelado 3D", "Desarrollo de videojuegos y apps", "Desarrollo web con WordPress", "IA como herramienta de diseño"
    ],
    idiomas: [
      { nombre: "Español", nivel: "Nativo", valor: 100 },
      { nombre: "Inglés", nivel: "Intermedio-avanzado", valor: 75 }
    ],
    herramientas: [
      { nombre: "Photoshop", icono: "img/Icons/PS.svg" }, { nombre: "Illustrator", icono: "img/Icons/AI.svg" },
      { nombre: "Premiere Pro", icono: "img/Icons/PR.svg" }, { nombre: "After Effects", icono: "img/Icons/AE.svg" },
      { nombre: "DaVinci Resolve", icono: "img/Icons/DaVinci.svg" }, { nombre: "Blender", icono: "img/Icons/Blender.svg" },
      { nombre: "Unity", icono: "img/Icons/Unity.svg" }, { nombre: "WordPress", icono: "img/Icons/WordPress.svg" },
      { nombre: "VS Code", icono: "img/Icons/Visual.svg" }, { nombre: "GitHub", icono: "img/Icons/Github.svg" },
      { nombre: "Claude", icono: "img/Icons/Claude.svg" }
    ],
    educacion: {
      escudo: "img/uacj.webp",
      titulo: "Lic. en Diseño Digital de Medios Interactivos",
      institucion: "Universidad Autónoma de Ciudad Juárez · IADA",
      complementaria: "Formación continua: modelado 3D, motion graphics, desarrollo web, edición de video, videojuegos, prompting e IA."
    }
  },

  contacto: {
    whatsapp: "526564581972",
    telefonoVisible: "+52 656 458 1972",
    correo: "aarok_ny224@hotmail.com",
    instagram: "aron_leyend0806",
    ciudad: "Ciudad Juárez, Chihuahua",
    cv: "img/documents/CV%20-%20en.pdf"
  }
};
