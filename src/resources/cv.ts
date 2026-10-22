import type { Locale } from "./locale";

export type CvData = {
  title: string;
  description: string;
  download: string;
  downloadFile: string;
  headings: {
    profile: string;
    experience: string;
    education: string;
    skills: string;
    languages: string;
    other: string;
    contact: string;
  };
  profile: string;
  experience: {
    company: string;
    role: string;
    period: string;
    location?: string;
    bullets: string[];
  }[];
  education: { name: string; detail: string; period: string }[];
  skills: { group: string; items: string[] }[];
  languages: string[];
  other: string[];
};

export const cv: Record<Locale, CvData> = {
  es: {
    title: "Currículum",
    description: "Currículum vitae de Ezequiel Dehnike, Ingeniero de Software",
    download: "Descargar PDF",
    downloadFile: "/cv/CV-Ezequiel-Dehnike-es.pdf",
    headings: {
      profile: "Perfil profesional",
      experience: "Experiencia profesional",
      education: "Formación académica",
      skills: "Tecnologías",
      languages: "Idiomas",
      other: "Otros conocimientos",
      contact: "Contacto",
    },
    profile:
      "Desarrollador web full stack con experiencia en Next.js, Python, PostgreSQL y Docker. Creo sitios modernos, APIs REST, landings responsivas y automatizaciones. Trabajo con React, Tailwind y bases de datos relacionales. Me enfoco en soluciones limpias, funcionales y a medida, y ayudo a mi equipo a digitalizar sus ideas con profesionalismo.",
    experience: [
      {
        company: "SEIDOR Analytics",
        role: "Ingeniero de Software",
        period: "Ago 2023 - Actualidad",
        location: "Buenos Aires, Argentina (híbrido)",
        bullets: [
          "Stack: Node.js, React, Next.js, TypeScript, Python, Tailwind CSS, PostgreSQL, Docker y Zustand.",
          "Mantenimiento, actualización, corrección de bugs y desarrollo de nuevas funcionalidades en Harbinger (plataforma de mensajería y automatización de WhatsApp) y Crestone / Datasync (plataforma de integración y extracción de datos).",
          "Desarrollo de servicios backend escalables y documentados.",
          "Docker: manejo de contenedores y despliegues en distintos entornos.",
          "Auditoría, soporte, desarrollo y mantenimiento de sitios web.",
          "Automatizaciones e integraciones cloud.",
          "Metodología Scrum y planificación de sprints.",
        ],
      },
      {
        company: "Freelance",
        role: "Desarrollador web full stack",
        period: "2026 - Actualidad",
        bullets: [
          "Aplicaciones y sitios web a medida para clientes: Ezmel (legajos, contratos y cartera de clientes), Leon Racing (presupuestos de arreglos de motos), TurnApp (turnos de kinesiología, en desarrollo), González & Pires (estudio jurídico) y Hierro & Forja (taller de herrería).",
          "Next.js, TypeScript, Supabase, Tailwind CSS y Netlify.",
        ],
      },
      {
        company: "Arkimetal",
        role: "Representante de atención al cliente",
        period: "Ago 2022 - Jul 2023",
        location: "Morón, Buenos Aires",
        bullets: [
          "Gestión de relaciones comerciales con estudios de arquitectura y constructoras.",
        ],
      },
      {
        company: "Farmacia Porvenir",
        role: "Encargado",
        period: "May 2013 - Jul 2022",
        location: "Buenos Aires",
        bullets: [
          "Responsable de todas las operaciones del negocio: compras y proveedores, atención al cliente y cobranzas.",
          "Personal a cargo.",
        ],
      },
      {
        company: "COPIJSUD",
        role: "Servicio voluntario",
        period: "Dic 2011 - Dic 2013",
        bullets: [],
      },
    ],
    education: [
      {
        name: "ORT Argentina",
        detail: "Analista de Sistemas",
        period: "Desde 2022 (en curso)",
      },
      {
        name: "Acámica",
        detail: "Desarrollador Web Full Stack Node",
        period: "Oct 2021 - Jul 2022",
      },
      {
        name: "UTN",
        detail: "Curso Fundamentos de Programación",
        period: "Oct 2020 - Dic 2020",
      },
      {
        name: "VMEdu",
        detail: "Scrum Fundamentals Certified",
        period: "Jul 2022",
      },
      {
        name: "Escuela Crucero ARA",
        detail: "Bachiller en Humanidades y Ciencias Sociales",
        period: "2002 - 2007",
      },
    ],
    skills: [
      {
        group: "Frontend",
        items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand"],
      },
      { group: "Backend", items: ["Node.js", "Express", "Python", "Django", ".NET / C#"] },
      { group: "Datos y DevOps", items: ["PostgreSQL", "Supabase", "MongoDB", "Docker", "Git"] },
    ],
    languages: ["Español (nativo)", "Inglés básico (oral y escrito)"],
    other: ["Operador de PC (Windows)", "Office, usuario avanzado", "Metodologías ágiles: Scrum"],
  },
  en: {
    title: "Résumé",
    description: "Résumé of Ezequiel Dehnike, Software Engineer",
    download: "Download PDF",
    downloadFile: "/cv/CV-Ezequiel-Dehnike-en.pdf",
    headings: {
      profile: "Professional profile",
      experience: "Professional experience",
      education: "Education",
      skills: "Technologies",
      languages: "Languages",
      other: "Other skills",
      contact: "Contact",
    },
    profile:
      "Full stack web developer with experience in Next.js, Python, PostgreSQL and Docker. I build modern websites, REST APIs, responsive landing pages and automations. I work with React, Tailwind and relational databases. I focus on clean, functional, tailor-made solutions, and I help my team turn their ideas into digital products with professionalism.",
    experience: [
      {
        company: "SEIDOR Analytics",
        role: "Software Engineer",
        period: "Aug 2023 - Present",
        location: "Buenos Aires, Argentina (hybrid)",
        bullets: [
          "Stack: Node.js, React, Next.js, TypeScript, Python, Tailwind CSS, PostgreSQL, Docker and Zustand.",
          "Maintenance, updates, bug fixing and new feature development on Harbinger (WhatsApp messaging and automation platform) and Crestone / Datasync (data integration and extraction platform).",
          "Development of scalable, documented backend services.",
          "Docker: container management and deployments across several environments.",
          "Auditing, support, development and maintenance of websites.",
          "Automations and cloud integrations.",
          "Scrum methodology and sprint planning.",
        ],
      },
      {
        company: "Freelance",
        role: "Full stack web developer",
        period: "2026 - Present",
        bullets: [
          "Custom web applications and websites for clients: Ezmel (client files, contracts and customer portfolio), Leon Racing (motorcycle repair quotes), TurnApp (physiotherapy appointments, in development), González & Pires (law firm) and Hierro & Forja (blacksmith workshop).",
          "Next.js, TypeScript, Supabase, Tailwind CSS and Netlify.",
        ],
      },
      {
        company: "Arkimetal",
        role: "Customer service representative",
        period: "Aug 2022 - Jul 2023",
        location: "Morón, Buenos Aires",
        bullets: ["Managed business relationships with architecture firms and construction companies."],
      },
      {
        company: "Farmacia Porvenir",
        role: "Store manager",
        period: "May 2013 - Jul 2022",
        location: "Buenos Aires",
        bullets: [
          "In charge of all business operations: purchasing and suppliers, customer service and collections.",
          "Managed staff.",
        ],
      },
      {
        company: "COPIJSUD",
        role: "Volunteer service",
        period: "Dec 2011 - Dec 2013",
        bullets: [],
      },
    ],
    education: [
      {
        name: "ORT Argentina",
        detail: "Systems Analyst",
        period: "Since 2022 (in progress)",
      },
      {
        name: "Acámica",
        detail: "Full Stack Node Web Developer",
        period: "Oct 2021 - Jul 2022",
      },
      {
        name: "UTN",
        detail: "Programming Fundamentals course",
        period: "Oct 2020 - Dec 2020",
      },
      {
        name: "VMEdu",
        detail: "Scrum Fundamentals Certified",
        period: "Jul 2022",
      },
      {
        name: "Escuela Crucero ARA",
        detail: "High school diploma in Humanities and Social Sciences",
        period: "2002 - 2007",
      },
    ],
    skills: [
      {
        group: "Frontend",
        items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand"],
      },
      { group: "Backend", items: ["Node.js", "Express", "Python", "Django", ".NET / C#"] },
      { group: "Data and DevOps", items: ["PostgreSQL", "Supabase", "MongoDB", "Docker", "Git"] },
    ],
    languages: ["Spanish (native)", "Basic English (spoken and written)"],
    other: ["PC operator (Windows)", "Advanced Office user", "Agile methodologies: Scrum"],
  },
};
