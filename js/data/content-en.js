/* CONTENT (EN): same content in English */

CONFIG.en = {
  nombre: "Aron Navarro",
  marca: "Leyenddx",

  hero: {
    disponible: "Open to work",
    ciudad: "Ciudad Juárez, MX",
    titulo: "Graphic design,|video editing|& digital design.",
    texto: "I'm Aron Navarro (Leyenddx), a designer and editor. I create campaigns, corporate video, social media content and interactive experiences for companies and institutions such as ECI and UACJ.",
    clientesTitulo: "I've worked with",
    clientes: ["ECI · Electrical Components International", "UACJ", "MIAAD", "Boyante", "Freelance"],
    destacados: [
      { cat: "diseno",  src: "img/thumbs/eci6.webp" },
      { cat: "video",   src: "https://i.ytimg.com/vi/Qs_ZFwY1nxg/maxresdefault.jpg" },
      { cat: "digital", src: "img/thumbs/indsite.webp" }
    ]
  },

  trabajos: {
    diseno: {
      numero: "01", titulo: "Graphic design", corto: "Design",
      intro: "Internal campaigns, posters, infographics, branding and social media pieces built around clear communication goals.",
      herramientas: ["Photoshop", "Illustrator"],
      items: [
        { tipo: "imagen", src: "img/diseno/eci6.webp",   titulo: "Your career at Electro", cliente: "ECI", formato: "Poster", descripcion: "Internal campaign poster about the employee career path." },
        { tipo: "imagen", src: "img/diseno/miaad1.webp", titulo: "Eureka AICA", cliente: "MIAAD · UACJ", formato: "Social media post", descripcion: "Announcement of the European Commission's approval of the Erasmus+ Eureka AICA project." },
        { tipo: "imagen", src: "img/diseno/eci1.webp",   titulo: "Somos Familia", cliente: "ECI", formato: "Recognition campaign", descripcion: "Vertical banner for an employee recognition campaign." },
        { tipo: "imagen", src: "img/diseno/Camisa.webp", titulo: "Corremos juntos", cliente: "ECI", formato: "T-shirt design", descripcion: "Front and back T-shirt design for a corporate sports event." },
        { tipo: "imagen", src: "img/diseno/barber.webp", titulo: "Fade City Barber Shop", cliente: "Fade City", formato: "Logo", descripcion: "Graffiti-style lettering identity over the city skyline." },
        { tipo: "imagen", src: "img/diseno/eci3.webp",   titulo: "World Autism Awareness Day", cliente: "ECI", formato: "Poster", descripcion: "Awareness campaign for internal communications." },
        { tipo: "imagen", src: "img/diseno/eci4.webp",   titulo: "What is ASD?", cliente: "ECI", formato: "Infographic", descripcion: "Companion infographic for the World Autism Awareness Day campaign." },
        { tipo: "imagen", src: "img/diseno/miaad2.jpg",  titulo: "2nd National Graduate Summit", cliente: "MIAAD · UACJ", formato: "Social media post", descripcion: "Promotion for a student summit on Artificial Intelligence and Data Analytics." },
        { tipo: "imagen", src: "img/diseno/eci5.webp",   titulo: "Plant 3 hiring", cliente: "ECI", formato: "Flyer", descripcion: "Recruitment flyer with openings, requirements and benefits." },
        { tipo: "imagen", src: "img/diseno/eci2.webp",   titulo: "Connecting Asia & Mexico", cliente: "ECI", formato: "Newsletter", descripcion: "Internal newsletter about a collaboration visit between plants." },
        { tipo: "imagen", src: "img/diseno/eci7.jpg",    titulo: "World Diabetes Day", cliente: "ECI", formato: "Infographic", descripcion: "Health piece for the plant's medical division." },
        { tipo: "imagen", src: "img/diseno/eci9.jpg",    titulo: "ECI 50th Anniversary", cliente: "ECI", formato: "Recognition letter", descripcion: "Seniority recognition template for the 50th anniversary." }
      ]
    },

    video: {
      numero: "02", titulo: "Video editing", corto: "Video",
      intro: "Corporate video, event coverage, spots and vertical social content: visual scripting, editing, motion graphics and color.",
      herramientas: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      items: [
        { tipo: "youtube", src: "Qs_ZFwY1nxg", titulo: "Data Center", cliente: "ECI", formato: "Corporate video", descripcion: "Institutional video about the plant's capabilities." },
        { tipo: "youtube", src: "hi4sQe1Siik", titulo: "ECI 5K Run", cliente: "ECI", formato: "Event video", descripcion: "Coverage and editing of the employee sports event." },
        { tipo: "youtube", src: "NJKLn5tpc5g", titulo: "MIAAD Spot", cliente: "MIAAD · UACJ", formato: "Vertical spot", vertical: true, descripcion: "Vertical testimonial for the Master's in AI and Data Analytics." },
        { tipo: "youtube", src: "PmzrSf-JDtI", titulo: "Top Perro Frenchies", cliente: "Freelance", formato: "Social media capsule", vertical: true, descripcion: "Vertical content for social media." }
      ]
    },

    digital: {
      numero: "03", titulo: "Digital design", corto: "Digital",
      intro: "Interactive apps, video games and 3D experiences: interface design, programming, art and audio.",
      herramientas: ["Unity", "Blender", "VS Code"],
      items: [
        { tipo: "proyecto", titulo: "Press Start to Learn", cliente: "UACJ · AI Congress 2025", formato: "Educational app",
          descripcion: "Interactive app/game commissioned by UACJ for the neural networks workshop at its 2025 Artificial Intelligence congress. It explains neural network concepts in a dynamic, easy way.",
          imagenes: ["img/digital/PSTL1.png", "img/digital/PSTL2.png"] },
        { tipo: "proyecto", titulo: "Indsite: Ecos de Paquimé", cliente: "Personal project", formato: "3D experience",
          descripcion: "A history and art outreach project: a short experience made of tours that teaches about the indigenous culture of Chihuahua, Mexico.",
          imagenes: ["img/digital/indsite.png"],
          enlace: { texto: "Try it on itch.io", url: "https://leyenddx.itch.io/indsite-ecos-de-paquim" } },
        { tipo: "proyecto", titulo: "Tribulation: Last Breath", cliente: "Personal project", formato: "FPS video game",
          descripcion: "A first-person shooter where you must hold out as long as possible. It combines programming, design and audio recording.",
          imagenes: ["img/digital/Tribulacion.png"],
          enlace: { texto: "Play on itch.io", url: "https://leyenddx.itch.io/tribulacion-last-breath" } },
        { tipo: "proyecto", titulo: "Digital illustration", cliente: "Personal", formato: "Illustration",
          descripcion: "Hand-drawn digital illustration inspired by Mexican lucha libre and lotería.",
          imagenes: ["img/digital/ilustrr.webp"] }
      ]
    }
  },

  perfil: {
    foto: "img/foto.jpg",
    rol: "Graphic designer · Video editor · Digital designer",
    texto: "Interactive Media Digital Design graduate with years of experience at agencies, companies and institutions. I combine design, video and technology so every piece communicates clearly.",
    experiencia: [
      { empresa: "ECI", puesto: "Communications Specialist", texto: "National internal communications and marketing: campaigns, infographics, corporate video and social media." },
      { empresa: "Boyante", puesto: "Graphic Designer", texto: "Visual social media content for small and medium-sized businesses." },
      { empresa: "UACJ · MIAAD", puesto: "Work-study · Design and editing", texto: "Audiovisual material, flyers and spots for the Master's in AI and Data Analytics." },
      { empresa: "Freelance", puesto: "Editor and Developer", texto: "Design, video editing and web development projects." }
    ],
    habilidades: [
      "Graphic & editorial design", "Video editing & post-production", "Motion graphics", "Social media content",
      "Internal communications & marketing", "Branding", "3D modeling", "Game & app development", "WordPress web development", "AI as a design tool"
    ],
    idiomas: [
      { nombre: "Spanish", nivel: "Native", valor: 100 },
      { nombre: "English", nivel: "Upper-intermediate", valor: 75 }
    ],
    herramientas: CONFIG.es.perfil.herramientas,
    educacion: {
      escudo: "img/uacj.webp",
      titulo: "B.A. in Interactive Media Digital Design",
      institucion: "Universidad Autónoma de Ciudad Juárez · IADA",
      complementaria: "Continuing education: 3D modeling, motion graphics, web development, video editing, video games, prompting and AI."
    }
  },

  contacto: CONFIG.es.contacto
};
