"use client";

import Link from "next/link";

import { ArrowButton } from "@/components/ArrowButton";
import { useEffect, useRef, useState } from "react";

import "./showcase.css";
import { GlassPanels, Layers, Stack } from "./ShowcaseMore";

export type ShowcaseItem = {
  slug: string;
  title: string;
  summary: string;
  tag: string;
  tech: string[];
  image: string;
};

type Props = { items: ShowcaseItem[]; openLabel: string };

const Chips = ({ item, max = 4 }: { item: ShowcaseItem; max?: number }) => (
  <div className="sc-chips">
    {item.tag && <span className="sc-chip is-tag">{item.tag}</span>}
    {item.tech.slice(0, max).map((tech) => (
      <span key={tech} className="sc-chip">
        {tech}
      </span>
    ))}
  </div>
);

const Face = ({ item }: { item: ShowcaseItem }) => (
  <div className="sc-face">
    <img src={item.image} alt={item.title} loading="lazy" draggable={false} />
    <div className="sc-face-body">
      <div className="sc-face-title">{item.title}</div>
      <Chips item={item} max={3} />
    </div>
  </div>
);

const Nav = ({
  index,
  total,
  onPrev,
  onNext,
}: {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) => (
  <div className="sc-nav">
    <ArrowButton direction="prev" label="Anterior" onClick={onPrev} />
    <span className="sc-count">
      {index + 1} / {total}
    </span>
    <ArrowButton direction="next" label="Siguiente" onClick={onNext} />
  </div>
);

const wrap = (value: number, total: number) => (value + total) % total;

/* 1. Coverflow */
const Coverflow = ({ items }: Props) => {
  const [active, setActive] = useState(2);
  const n = items.length;
  return (
    <>
      <div className="cf-stage">
        {items.map((item, i) => {
          const off = i - active;
          const abs = Math.abs(off);
          if (abs > 3) return null;
          const style = {
            transform: `translateX(${off * 58}%) translateZ(${-abs * 150}px) rotateY(${-off * 38}deg) scale(${off === 0 ? 1.05 : 0.9})`,
            zIndex: 10 - abs,
            opacity: abs > 2 ? 0 : 1 - abs * 0.2,
          };
          return off === 0 ? (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="cf-card sc-card glass is-center"
              style={style}
            >
              <Face item={item} />
            </Link>
          ) : (
            <div
              key={item.slug}
              className="cf-card sc-card glass"
              style={style}
              onClick={() => setActive(i)}
            >
              <Face item={item} />
            </div>
          );
        })}
      </div>
      <Nav
        index={active}
        total={n}
        onPrev={() => setActive((v) => Math.max(0, v - 1))}
        onNext={() => setActive((v) => Math.min(n - 1, v + 1))}
      />
    </>
  );
};

/* 2. Rotating ring */
const Ring = ({ items }: Props) => {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const n = items.length;
  const step = 360 / n;
  const radius = Math.round(115 / Math.tan(Math.PI / n)) + 40;

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setActive((v) => v + 1);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}>
      <div className="ring-scene">
        <div
          className="ring"
          style={{ transform: `translateZ(-${radius}px) rotateY(${-active * step}deg)` }}
        >
          {items.map((item, i) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="ring-card sc-card glass"
              style={{ transform: `rotateY(${i * step}deg) translateZ(${radius}px)` }}
              onClick={(event) => {
                if (wrap(active, n) !== i) {
                  event.preventDefault();
                  setActive(i + Math.round((active - i) / n) * n);
                }
              }}
            >
              <Face item={item} />
            </Link>
          ))}
        </div>
      </div>
      <Nav
        index={wrap(active, n)}
        total={n}
        onPrev={() => setActive((v) => v - 1)}
        onNext={() => setActive((v) => v + 1)}
      />
    </div>
  );
};

/* 3. Fan */
const Fan = ({ items }: Props) => {
  const [active, setActive] = useState(Math.floor(items.length / 2));
  const n = items.length;
  return (
    <>
      <div className="fan-stage">
        {items.map((item, i) => {
          const off = i - active;
          const abs = Math.abs(off);
          if (abs > 3) return null;
          const style = {
            transform:
              off === 0
                ? "translateY(-34px) scale(1.08)"
                : `translateX(${off * 105}px) translateY(${abs * abs * 7}px) rotate(${off * 8}deg)`,
            zIndex: 10 - abs,
            opacity: 1 - abs * 0.12,
          };
          return off === 0 ? (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="fan-card sc-card glass"
              style={style}
            >
              <Face item={item} />
            </Link>
          ) : (
            <div
              key={item.slug}
              className="fan-card sc-card glass"
              style={style}
              onClick={() => setActive(i)}
            >
              <Face item={item} />
            </div>
          );
        })}
      </div>
      <Nav
        index={active}
        total={n}
        onPrev={() => setActive((v) => Math.max(0, v - 1))}
        onNext={() => setActive((v) => Math.min(n - 1, v + 1))}
      />
    </>
  );
};

/* 4. Detail panel + thumbnails */
const Detail = ({ items, openLabel }: Props) => {
  const [active, setActive] = useState(0);
  const item = items[active];
  return (
    <div className="det">
      <div className="det-main glass">
        <img src={item.image} alt={item.title} />
        <div className="det-info">
          <Chips item={item} max={6} />
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <Link href={`/work/${item.slug}`} className="det-cta">
            {openLabel} →
          </Link>
        </div>
      </div>
      <div className="det-thumbs">
        {items.map((it, i) => (
          <button
            key={it.slug}
            className={i === active ? "det-thumb is-active" : "det-thumb"}
            onClick={() => setActive(i)}
            aria-label={it.title}
          >
            <img src={it.image} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
};

/* 5. Horizontal strip */
const Strip = ({ items }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  return (
    <>
      <div className="strip" ref={ref}>
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="strip-card sc-card glass glass-hover"
          >
            <Face item={item} />
          </Link>
        ))}
      </div>
      <div className="sc-nav">
        <ArrowButton direction="prev" label="Anterior" onClick={() => scroll(-1)} />
        <ArrowButton direction="next" label="Siguiente" onClick={() => scroll(1)} />
      </div>
    </>
  );
};

const variants = [
  {
    title: "Coverflow 3D",
    desc: "Tarjeta central grande y las demás inclinadas a los costados. Click en una lateral para traerla al centro.",
    Component: Coverflow,
  },
  {
    title: "Anillo giratorio",
    desc: "Las tarjetas giran en círculo solas (se frena al pasar el mouse). Flechas para girar a mano.",
    Component: Ring,
  },
  {
    title: "Abanico",
    desc: "Tarjetas abiertas como un abanico de cartas, con la elegida levantada al frente.",
    Component: Fan,
  },
  {
    title: "Panel de detalle + miniaturas",
    desc: "Un proyecto grande con su descripción y tecnologías, y una tira de miniaturas para cambiar.",
    Component: Detail,
  },
  {
    title: "Tira horizontal",
    desc: "Tarjetas en fila con scroll lateral que se ajusta de a una. La más simple y rápida de recorrer.",
    Component: Strip,
  },
  {
    title: "Pila en perspectiva",
    desc: "Tarjetas apiladas que se alejan hacia arriba; la de adelante es la activa. Click en la pila o en los puntos para avanzar.",
    Component: Stack,
  },
  {
    title: "Capas superpuestas",
    desc: "Tres tarjetas inclinadas y encimadas. Al pasar el mouse la tarjeta se levanta y muestra el nombre.",
    Component: Layers,
  },
  {
    title: "Paneles de vidrio",
    desc: "Panel central plano con descripción y botones, y paneles de vidrio girados a los costados.",
    Component: GlassPanels,
  },
];

export const ShowcaseOptions = (props: Props) => (
  <div style={{ width: "100%" }}>
    {variants.map(({ title, desc, Component }, index) => (
      <section key={title} className="sc-section" id={`opcion-${index + 1}`}>
        <div className="sc-head">
          <span className="sc-num">Opción {index + 1}</span>
          <h2 className="sc-title">{title}</h2>
          <span className="sc-desc">{desc}</span>
        </div>
        <Component {...props} />
      </section>
    ))}
  </div>
);
