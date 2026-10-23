import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ezequiel",
  lastName: "Dehnike",
  name: `Ezequiel Dehnike`,
  role: "Software Engineer",
  avatar: "/images/avatar-3d.webp",
  email: "ezequieldehnike@gmail.com",
  location: "Buenos Aires, Argentina",
  languages: ["Spanish", "Basic English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s newsletter</>,
  description: <>News about web development and technology</>,
};

const social: Social = [
  // Links are automatically displayed. Entries with an empty link are hidden until you fill them in.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ezequieldehnike/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/edehnike-SeidorNew",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "", // TODO: add your Instagram profile URL
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "", // TODO: add your Facebook profile URL
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/5491168090361",
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
  label: "Home",
  title: `${person.name} – ${person.role}`,
  description: `Portfolio of ${person.name}, full stack ${person.role}. Web applications with React, Next.js, Node.js and Supabase.`,
  headline: <>I build web products from end to end</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Ezmel</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest project
        </Text>
      </Row>
    ),
    href: "/work/ezmel-legajos-de-cliente",
  },
  subline: (
    <>
      I'm Ezequiel, a software engineer at <strong>SEIDOR Analytics</strong>. I build
      <br /> full stack applications with React, Next.js, Node.js and Supabase.
    </>
  ),
  bio: {
    title: "Biography",
    paragraphs: [
      <>
        I'm a web developer. I discovered programming at 30 and found a whole new world that
        fascinates me. I come from the kitchen, which left me with a love for creating and
        combining things.
      </>,
      <>
        Today I'm a software engineer at SEIDOR Analytics, building and maintaining data
        integration and messaging platforms. I also freelance for clients and I'm studying Systems
        Analysis at ORT.
      </>,
    ],
    facts: [
      { icon: "person", label: "Name", value: "Ezequiel Dehnike" },
      { icon: "briefcase", label: "Role", value: "Software Engineer" },
      { icon: "pin", label: "Location", value: "Buenos Aires, Argentina" },
      { icon: "translate", label: "Languages", value: "Spanish, basic English" },
      { icon: "mail", label: "Email", value: "ezequieldehnike@gmail.com" },
    ],
  },
  services: {
    title: "What I do",
    subtitle: "I build complete web applications, from the database to the interface.",
    items: [
      {
        icon: "browser",
        title: "Frontend development",
        description:
          "Responsive, accessible interfaces with React, Next.js, TypeScript and Tailwind CSS.",
      },
      {
        icon: "code",
        title: "Backend and APIs",
        description:
          "REST APIs, authentication and real time with Node.js and Express, plus services in Python and .NET.",
      },
      {
        icon: "database",
        title: "Databases",
        description:
          "Relational modeling, security policies, migrations and queries in PostgreSQL, Supabase and MongoDB.",
      },
      {
        icon: "plugs",
        title: "Integrations and automation",
        description:
          "Connections with WhatsApp, Mercado Pago and SAP, Docker containers and Netlify deployments.",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "A selection of my freelance, university and personal work.",
  },
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
    title: "Introduction",
    description: (
      <>
        I'm a web developer. I discovered programming at 30 and found a whole new world that
        fascinates me. I come from the kitchen, which left me with a love for creating and
        combining things. Today I work as a software engineer at SEIDOR Analytics, building and
        maintaining data integration and messaging platforms. I also freelance for clients and, in
        my own projects, build complete web applications, from the database to the interface.
        <br />
        <br />
        I'm detail-oriented and demanding about what I build. My two favorite sayings are
        "enjoy learning" and "whoever believes can achieve anything".
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work experience",
    experiences: [
      {
        company: "SEIDOR Analytics",
        timeframe: "Aug 2023 - Present",
        role: "Junior Software Engineer",
        achievements: [
          <>
            <strong>Harbinger</strong>: WhatsApp messaging and automation platform. Development and
            maintenance of the application with Node.js, Express and Socket.IO on the backend, and
            React with Material UI on the frontend. Integration with the official WhatsApp API
            (Meta) and Twilio, scheduled and bulk messaging, Frontegg authentication, PostgreSQL
            and Docker deployments across several environments (dev, QAS and production).
          </>,
          <>
            <strong>Crestone / Datasync</strong>: data integration and extraction platform
            (ETL/CDC) with SAP and non-SAP sources and destinations such as Snowflake, Databricks,
            Redshift, BigQuery and S3. I work with a frontend in Next.js, TypeScript, Redux
            Toolkit and Tailwind, a backend in Django and Django REST Framework with WebSockets,
            and a Spring Boot microservice with SAP JCo, Kafka and Avro. Database on Supabase
            (PostgreSQL).
          </>,
          <>
            Production support and incident resolution: log, job and connection diagnostics, SQL
            queries for usage statistics, version upgrades with Docker and AWS installers, and
            technical documentation (runbooks, support guides and release notes).
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "2026 - Present",
        role: "Full stack web developer",
        achievements: [
          <>
            Custom web applications and websites for clients: <strong>Ezmel</strong> (client
            files, contracts and customer portfolio), <strong>Leon Racing</strong> (motorcycle
            repair quotes), <strong>TurnApp</strong> (physiotherapy appointments, in development), <strong>González & Pires</strong> (law firm website) and{" "}
            <strong>Hierro & Forja</strong> (blacksmith workshop landing page), built with
            Next.js, TypeScript, Supabase, Tailwind CSS and Netlify.
          </>,
        ],
        images: [],
      },
      {
        company: "Arkimetal",
        timeframe: "Aug 2022 - Jul 2023",
        role: "Customer service representative",
        achievements: [
          <>
            Customer service and advice at a company specialized in architectural railings and
            staircases (Morón, Buenos Aires), while studying programming at the same time.
          </>,
        ],
        images: [],
      },
      {
        company: "Farmacia Porvenir",
        timeframe: "May 2013 - Jul 2022",
        role: "Store manager",
        achievements: [
          <>
            In charge of all business operations for more than nine years: purchasing and
            suppliers, customer service, collections and staff management.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "ORT Argentina",
        description: (
          <>
            Systems Analyst (since 2022, in progress). Coursework projects: an academic management system in
            ASP.NET Core MVC with C#, with employee, teacher and student roles; a gym REST API
            (GymBro) with Node.js, Express, MongoDB and JWT; the Prode, a football prediction app
            with Next.js, React and Tailwind CSS; and an online store in vanilla JavaScript with a
            localStorage cart.
          </>
        ),
      },
      {
        name: "Acámica",
        description: <>Full Stack Node Web Developer (Oct 2021 - Jul 2022).</>,
      },
      {
        name: "UTN",
        description: <>Programming Fundamentals course (Oct - Dec 2020).</>,
      },
      {
        name: "VMEdu",
        description: <>Scrum Fundamentals Certified (2022).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            Responsive, accessible interfaces with React and Next.js (App Router), typed with
            TypeScript and styled with Tailwind CSS.
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
        title: "Backend and APIs",
        description: (
          <>
            REST APIs, authentication and real time. Node.js and Express in my own projects and in
            Harbinger, Django in Crestone and ASP.NET Core MVC with C# at university.
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
        title: "Databases",
        description: (
          <>
            Relational modeling, RLS policies, migrations and SQL queries. Supabase as the backend
            of my applications and MongoDB in Node.js projects.
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
        title: "Integrations, DevOps and tools",
        description: (
          <>
            Containers, deployment and integrations with external services: WhatsApp, Mercado
            Pago, SAP and Kafka.
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
  title: "Writing about development and technology...",
  description: `What ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Web applications and development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
