import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ezequiel",
  lastName: "Dehnike",
  name: `Ezequiel Dehnike`,
  role: "Ingeniero de Software",
  avatar: "/images/avatar.jpeg",
  email: "ezequieldehnike@gmail.com",
  location: "Buenos Aires, Argentina",
  languages: ["Español", "Inglés básico"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Suscribite al newsletter de {person.firstName}</>,
  description: <>Novedades sobre desarrollo web y tecnología</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ezequieldehnike/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `${person.name} – ${person.role}`,
  description: `Portfolio de ${person.name}, ${person.role} full stack. Aplicaciones web con React, Next.js, Node.js y Supabase.`,
  headline: <>Construyo productos web de punta a punta</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Ezmel</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Último proyecto
        </Text>
      </Row>
    ),
    href: "/work/ezmel-legajos-de-cliente",
  },
  subline: (
    <>
      Soy Ezequiel, ingeniero de software en <strong>SEIDOR Analytics</strong>. Desarrollo
      <br /> aplicaciones full stack con React, Next.js, Node.js y Supabase.
    </>
  ),
  bio: {
    title: "Biografía",
    paragraphs: [
      <>
        Soy desarrollador web y descubrí la programación a los 30 años: conocí otro mundo y me
        fascina. Vengo de la cocina, y de ahí me quedó el gusto por crear y combinar.
      </>,
      <>
        Hoy soy ingeniero de software en SEIDOR Analytics, donde desarrollo y mantengo plataformas
        de integración de datos y mensajería. Además trabajo como freelance para clientes y estudio
        Analista de Sistemas en ORT.
      </>,
    ],
    facts: [
      { icon: "person", label: "Nombre", value: "Ezequiel Dehnike" },
      { icon: "briefcase", label: "Puesto", value: "Ingeniero de Software" },
      { icon: "pin", label: "Ubicación", value: "Buenos Aires, Argentina" },
      { icon: "translate", label: "Idiomas", value: "Español, inglés básico" },
      { icon: "mail", label: "Email", value: "ezequieldehnike@gmail.com" },
    ],
    downloadCv: "Ver mi CV",
  },
  services: {
    title: "Qué hago",
    subtitle: "Desarrollo aplicaciones web completas, desde la base de datos hasta la interfaz.",
    items: [
      {
        icon: "browser",
        title: "Desarrollo frontend",
        description:
          "Interfaces responsivas y accesibles con React, Next.js, TypeScript y Tailwind CSS.",
      },
      {
        icon: "code",
        title: "Backend y APIs",
        description:
          "APIs REST, autenticación y tiempo real con Node.js y Express, y servicios en Python y .NET.",
      },
      {
        icon: "database",
        title: "Bases de datos",
        description:
          "Modelado relacional, políticas de seguridad, migraciones y consultas en PostgreSQL, Supabase y MongoDB.",
      },
      {
        icon: "plugs",
        title: "Integraciones y automatización",
        description:
          "Conexión con WhatsApp, Mercado Pago y SAP, contenedores con Docker y despliegues en Netlify.",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    subtitle: "Una selección de mis trabajos freelance, de la facultad y personales.",
    viewAll: "Ver todos los proyectos",
    count: 3,
  },
};

const about: About = {
  path: "/about",
  label: "Sobre mí",
  title: `Sobre mí – ${person.name}`,
  description: `Conocé a ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: `mailto:${person.email}`,
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Soy desarrollador web y descubrí la programación a los 30 años: conocí otro mundo y me
        fascina. Vengo de la cocina, y de ahí me quedó el gusto por crear y combinar. Hoy trabajo
        como ingeniero de software en SEIDOR Analytics, donde desarrollo y mantengo plataformas de
        integración de datos y mensajería. Además trabajo como freelance para clientes y en mis
        proyectos propios armo aplicaciones web completas, desde la base de datos hasta la
        interfaz.
        <br />
        <br />
        Soy detallista y exigente con lo que construyo. Mis dos frases preferidas son
        «disfrutar aprendiendo» y «al que cree, todo le es posible».
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia laboral",
    experiences: [
      {
        company: "SEIDOR Analytics",
        timeframe: "Ago 2023 - Actualidad",
        role: "Ingeniero de Software Jr.",
        achievements: [
          <>
            <strong>Harbinger</strong>: plataforma de mensajería y automatización de WhatsApp.
            Desarrollo y mantenimiento de la aplicación con Node.js, Express y Socket.IO en el
            backend, y React con Material UI en el frontend. Integración con la API oficial de
            WhatsApp (Meta) y Twilio, envíos programados y masivos, autenticación con Frontegg,
            PostgreSQL y despliegue con Docker en distintos entornos (dev, QAS y producción).
          </>,
          <>
            <strong>Crestone / Datasync</strong>: plataforma de integración y extracción de
            datos (ETL/CDC) con orígenes SAP y no SAP y destinos como Snowflake, Databricks,
            Redshift, BigQuery y S3. Trabajo con un frontend en Next.js, TypeScript, Redux Toolkit
            y Tailwind, un backend en Django y Django REST Framework con WebSockets, y un
            microservicio en Spring Boot con SAP JCo, Kafka y Avro. Base de datos en Supabase
            (PostgreSQL).
          </>,
          <>
            Soporte y resolución de incidentes en producción: diagnóstico de logs, jobs y
            conexiones, consultas SQL de estadísticas, actualizaciones de versión con instaladores
            en Docker y AWS, y documentación técnica (runbooks, guías de soporte y releases).
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "2026 - Actualidad",
        role: "Desarrollador web full stack",
        achievements: [
          <>
            Desarrollo de aplicaciones y sitios web a medida para clientes: <strong>Ezmel</strong>{" "}
            (legajos, contratos y cartera de clientes), <strong>Leon Racing</strong> (presupuestos
            de arreglos de motos), <strong>TurnApp</strong> (turnos de kinesiología, en desarrollo), <strong>González & Pires</strong> (sitio de un estudio jurídico) y{" "}
            <strong>Hierro & Forja</strong> (landing de un taller de herrería), con Next.js,
            TypeScript, Supabase, Tailwind CSS y Netlify.
          </>,
        ],
        images: [],
      },
      {
        company: "Arkimetal",
        timeframe: "Ago 2022 - Jul 2023",
        role: "Representante de atención al cliente",
        achievements: [
          <>
            Atención y asesoramiento a clientes en una empresa de arquitectura en barandas y
            escaleras (Morón, Buenos Aires), en paralelo con mis estudios de programación.
          </>,
        ],
        images: [],
      },
      {
        company: "Farmacia Porvenir",
        timeframe: "May 2013 - Jul 2022",
        role: "Encargado",
        achievements: [
          <>
            Responsable de todas las operaciones del negocio durante más de nueve años: compras y
            proveedores, atención al cliente, cobranzas y personal a cargo.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudios",
    institutions: [
      {
        name: "ORT Argentina",
        description: (
          <>
            Analista de Sistemas (desde 2022, en curso). Proyectos de la carrera: un sistema de gestión
            académica en ASP.NET Core MVC con C#, con roles de empleado, profesor y alumno; una
            API REST de gimnasio (GymBro) con Node.js, Express, MongoDB y JWT; el Prode, una app
            de pronósticos de fútbol con Next.js, React y Tailwind CSS; y una tienda online en
            JavaScript puro con carrito en localStorage.
          </>
        ),
      },
      {
        name: "Acámica",
        description: <>Desarrollador Web Full Stack Node (oct 2021 - jul 2022).</>,
      },
      {
        name: "UTN",
        description: <>Curso Fundamentos de Programación (oct - dic 2020).</>,
      },
      {
        name: "VMEdu",
        description: <>Scrum Fundamentals Certified (2022).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades técnicas",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            Interfaces responsivas y accesibles con React y Next.js (App Router), tipadas con
            TypeScript y estilizadas con Tailwind CSS.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
          { name: "Redux", icon: "redux" },
        ],
        images: [],
      },
      {
        title: "Backend y APIs",
        description: (
          <>
            APIs REST, autenticación y tiempo real. Node.js y Express en proyectos propios y en
            Harbinger, Django en Crestone y ASP.NET Core MVC con C# en la facultad.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express", icon: "express" },
          { name: "Python / Django", icon: "django" },
          { name: ".NET / C#", icon: "dotnet" },
          { name: "Socket.IO", icon: "socketio" },
          { name: "Spring Boot", icon: "springboot" },
        ],
        images: [],
      },
      {
        title: "Bases de datos",
        description: (
          <>
            Modelado relacional, políticas RLS, migraciones y consultas SQL. Supabase como backend
            de mis aplicaciones y MongoDB en proyectos con Node.js.
          </>
        ),
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Supabase", icon: "supabase" },
          { name: "MongoDB", icon: "mongodb" },
        ],
        images: [],
      },
      {
        title: "Integraciones, DevOps y herramientas",
        description: (
          <>
            Contenedores, despliegue e integraciones con servicios externos: WhatsApp, Mercado
            Pago, SAP y Kafka.
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
          { name: "Netlify", icon: "netlify" },
          { name: "AWS", icon: "aws" },
          { name: "WhatsApp API", icon: "whatsapp" },
          { name: "Mercado Pago", icon: "mercadopago" },
          { name: "SAP", icon: "sap" },
          { name: "Kafka", icon: "kafka" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escribiendo sobre desarrollo y tecnología...",
  description: `Lo que ${person.name} anda haciendo últimamente`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos – ${person.name}`,
  description: `Aplicaciones web y proyectos de desarrollo de ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galería",
  title: `Galería – ${person.name}`,
  description: `Una colección de fotos de ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
