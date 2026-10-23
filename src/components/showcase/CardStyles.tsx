import type { IconType } from "react-icons";
import {
  PiBrowserDuotone,
  PiBriefcaseDuotone,
  PiCodeDuotone,
  PiDatabaseDuotone,
  PiMapPinDuotone,
  PiPlugsConnectedDuotone,
  PiUserCircleDuotone,
} from "react-icons/pi";

import "./card-styles.css";

type CardData = { Icon: IconType; title: string; desc: string };

const services: CardData[] = [
  { Icon: PiBrowserDuotone, title: "Desarrollo frontend", desc: "Interfaces responsivas con React, Next.js y TypeScript." },
  { Icon: PiCodeDuotone, title: "Backend y APIs", desc: "APIs REST, autenticación y tiempo real con Node.js." },
  { Icon: PiDatabaseDuotone, title: "Bases de datos", desc: "Modelado, seguridad y consultas en PostgreSQL y Supabase." },
  { Icon: PiPlugsConnectedDuotone, title: "Integraciones", desc: "WhatsApp, Mercado Pago, SAP y despliegues con Docker." },
];

const facts: CardData[] = [
  { Icon: PiUserCircleDuotone, title: "Nombre", desc: "Ezequiel Dehnike" },
  { Icon: PiBriefcaseDuotone, title: "Puesto", desc: "Ingeniero de Software" },
  { Icon: PiMapPinDuotone, title: "Ubicación", desc: "Buenos Aires, Argentina" },
];

/** Hue (r,g,b) per card, used by the colourful styles. */
const hues = ["139,92,246", "59,130,246", "34,211,238", "251,146,60"];

type Variant = "liquid" | "orb" | "neon" | "tint";

const Card = ({ variant, data, index, compact }: { variant: Variant; data: CardData; index: number; compact?: boolean }) => {
  const { Icon, title, desc } = data;
  const hue = hues[index % hues.length];
  const style = { "--h": hue } as React.CSSProperties;
  const cls = `cs-card cs-v-${variant}${compact ? " is-compact" : ""}`;

  if (variant === "liquid") {
    return (
      <div className={cls} style={style}>
        <span className="cs-num">{String(index + 1).padStart(2, "0")}</span>
        <div className="cs-text">
          <strong>{title}</strong>
          <span>{desc}</span>
        </div>
        {!compact && (
          <div className="cs-art" aria-hidden="true">
            <i className="g1" />
            <i className="g2" />
            <span className="tile">
              <Icon />
            </span>
          </div>
        )}
      </div>
    );
  }

  if (variant === "orb") {
    return (
      <div className={cls} style={style}>
        <span className="cs-orb">
          <Icon />
        </span>
        <div className="cs-text">
          <strong>{title}</strong>
          <span>{desc}</span>
        </div>
      </div>
    );
  }

  if (variant === "neon") {
    return (
      <div className={cls}>
        <span className="cs-tile">
          <Icon />
        </span>
        <div className="cs-text">
          <strong>{title}</strong>
          <span>{desc}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cls} style={style}>
      <div className="cs-text">
        <strong>{title}</strong>
        <span>{desc}</span>
      </div>
      <span className="cs-big" aria-hidden="true">
        <Icon />
      </span>
    </div>
  );
};

const options: { variant: Variant; title: string; desc: string }[] = [
  {
    variant: "liquid",
    title: "Liquid Glass numerado",
    desc: "Como tu referencia: vidrio de color con borde luminoso, número en círculo y un ícono en capas translúcidas a la derecha.",
  },
  {
    variant: "orb",
    title: "Orbe luminoso",
    desc: "Vidrio esmerilado con el ícono dentro de una esfera brillante con reflejo, como una gema.",
  },
  {
    variant: "neon",
    title: "Neón minimal",
    desc: "Vidrio oscuro con borde degradado fino (cian a violeta), ícono en baldosa con resplandor y brillo al pasar el mouse.",
  },
  {
    variant: "tint",
    title: "Cristal de colores",
    desc: "Cada tarjeta con su propio color translúcido y un ícono grande semi cortado en la esquina, como las filas de abajo de tu imagen.",
  },
];

export const CardStyles = () => (
  <div className="cs-wrap">
    {options.map(({ variant, title, desc }, i) => (
      <section key={variant} className="cs-option" id={`tarjeta-${i + 1}`}>
        <div className="cs-head">
          <span className="cs-badge">Estilo {i + 1}</span>
          <h3>{title}</h3>
          <span className="cs-desc">{desc}</span>
        </div>
        <div className="cs-grid">
          {services.map((data, index) => (
            <Card key={data.title} variant={variant} data={data} index={index} />
          ))}
        </div>
        <div className="cs-grid cs-grid-3">
          {facts.map((data, index) => (
            <Card key={data.title} variant={variant} data={data} index={index} compact />
          ))}
        </div>
      </section>
    ))}
  </div>
);
