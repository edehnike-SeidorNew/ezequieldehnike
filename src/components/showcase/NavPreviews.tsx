"use client";

import {
  PiEnvelopeSimpleDuotone,
  PiFileTextDuotone,
  PiHouseDuotone,
  PiRocketLaunchDuotone,
  PiUserCircleDuotone,
} from "react-icons/pi";

import "./showcase-more.css";

const links = [
  { href: "/", label: "Inicio", Icon: PiHouseDuotone },
  { href: "/about", label: "Sobre mí", Icon: PiUserCircleDuotone },
  { href: "/work", label: "Proyectos", Icon: PiRocketLaunchDuotone },
  { href: "/cv", label: "CV", Icon: PiFileTextDuotone },
  { href: "/contact", label: "Contacto", Icon: PiEnvelopeSimpleDuotone },
];

const name = "Ezequiel Dehnike";
const avatar = "/images/avatar.jpeg";

const Pills = () => (
  <div className="tl-foot">
    <span className="tl-pill is-on">ES</span>
    <span className="tl-pill">EN</span>
    <span className="tl-pill">☾</span>
  </div>
);

/* A: sidebar with a glowing vertical timeline (like the reference) */
const Timeline = () => (
  <div className="nv-frame">
    <div className="nv-content">
      <span>CONTENIDO</span>
    </div>
    <aside className="tl">
      <div className="tl-brand">
        <img src={avatar} alt="" />
        <span>{name}</span>
      </div>
      <nav className="tl-list">
        {links.map(({ href, label, Icon }, i) => (
          <a key={href} href={href} className={i === 2 ? "tl-item is-active" : "tl-item"}>
            <span className="tl-ico">
              <Icon />
            </span>
            <span className="tl-label">{label}</span>
          </a>
        ))}
      </nav>
      <Pills />
    </aside>
  </div>
);

/* B: compact icon rail with tooltips */
const Rail = () => (
  <div className="nv-frame">
    <div className="nv-content">
      <span>CONTENIDO</span>
    </div>
    <aside className="rail">
      <img className="rail-avatar" src={avatar} alt={name} />
      {links.map(({ href, label, Icon }, i) => (
        <a
          key={href}
          href={href}
          data-label={label}
          aria-label={label}
          className={i === 2 ? "rail-item is-active" : "rail-item"}
        >
          <Icon />
        </a>
      ))}
      <span className="tl-pill is-on" style={{ textAlign: "center" }}>
        ES
      </span>
    </aside>
  </div>
);

/* C: floating glass top bar with icons */
const Bar = () => (
  <div className="nv-frame">
    <div className="nv-content">
      <span>CONTENIDO</span>
    </div>
    <header className="bar">
      <div className="bar-brand">
        <img src={avatar} alt="" />
        <span>{name}</span>
      </div>
      <nav className="bar-links">
        {links.slice(1).map(({ href, label, Icon }, i) => (
          <a key={href} href={href} className={i === 1 ? "bar-link is-active" : "bar-link"}>
            <i>
              <Icon />
            </i>
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <div style={{ display: "flex", gap: 6 }}>
        <span className="tl-pill is-on" style={{ padding: "6px 12px" }}>
          ES
        </span>
        <span className="tl-pill" style={{ padding: "6px 12px" }}>
          EN
        </span>
      </div>
    </header>
  </div>
);

export const NavPreviews = () => (
  <div className="nv-grid">
    <div>
      <p className="nv-caption">A · Barra lateral con línea de tiempo</p>
      <Timeline />
      <p className="nv-note">
        Como tu imagen: cada sección es una píldora de vidrio con ícono, unidas por una línea con
        brillo. Muestra siempre dónde estás.
      </p>
    </div>
    <div>
      <p className="nv-caption">B · Barra lateral compacta (solo íconos)</p>
      <Rail />
      <p className="nv-note">
        Ocupa muy poco espacio. El nombre aparece al pasar el mouse sobre cada ícono. Muy limpia.
      </p>
    </div>
    <div>
      <p className="nv-caption">C · Barra superior flotante con íconos</p>
      <Bar />
      <p className="nv-note">
        Lo que tienes ahora, pero flotante y de vidrio, con íconos al lado de cada texto.
      </p>
    </div>
  </div>
);
