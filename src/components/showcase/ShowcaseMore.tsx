"use client";

import Link from "next/link";

import { ArrowButton } from "@/components/ArrowButton";
import { useState } from "react";

import "./showcase-more.css";
import type { ShowcaseItem } from "./ShowcaseOptions";

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

/* 6. Perspective stack (cards receding upward) */
export const Stack = ({ items }: Props) => {
  const [active, setActive] = useState(0);
  const n = items.length;
  const current = items[active];
  return (
    <div className="stk">
      <div className="stk-label">
        <span className="stk-kicker">{current.tag || "Proyecto"}</span>
        <span className="stk-name">{current.title}</span>
      </div>
      <div className="stk-stage">
        {items.map((item, i) => {
          const off = i - active;
          if (off > 6) return null;
          const gone = off < 0;
          const style = {
            transform: gone
              ? "translateY(140px) scale(1.05)"
              : `translateY(${-off * 30}px) scale(${1 - off * 0.06})`,
            zIndex: 20 - off,
            opacity: gone ? 0 : 1 - off * 0.07,
            filter: off === 0 ? "none" : `brightness(${1 - off * 0.05})`,
            pointerEvents: gone ? ("none" as const) : ("auto" as const),
          };
          const image = <img src={item.image} alt={item.title} draggable={false} loading="lazy" />;
          return off === 0 ? (
            <Link key={item.slug} href={`/work/${item.slug}`} className="stk-card" style={style}>
              {image}
            </Link>
          ) : (
            <div key={item.slug} className="stk-card" style={style} onClick={() => setActive(i)}>
              {image}
            </div>
          );
        })}
        <div className="stk-dots">
          {items.map((item, i) => (
            <button
              key={item.slug}
              className={i === active ? "stk-dot is-active" : "stk-dot"}
              onClick={() => setActive(i)}
              aria-label={item.title}
            />
          ))}
        </div>
      </div>
      <Nav
        index={active}
        total={n}
        onPrev={() => setActive((v) => Math.max(0, v - 1))}
        onNext={() => setActive((v) => Math.min(n - 1, v + 1))}
      />
    </div>
  );
};

/* 7. Overlapping layers (three tilted cards) */
export const Layers = ({ items }: Props) => {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const n = items.length;
  const slots = [
    { x: -34, y: 0, r: 10, s: 1, z: 3 },
    { x: 14, y: -5, r: -26, s: 0.93, z: 2 },
    { x: 52, y: -9, r: -40, s: 0.86, z: 1 },
  ];
  return (
    <div className="lay">
      <div className="lay-stage">
        {slots.map((slot, k) => {
          const i = active + k;
          if (i >= n) return null;
          const item = items[i];
          const hovered = hover === i;
          const style = {
            transform: `translateX(${slot.x}%) translateY(${slot.y + (hovered ? -4 : 0)}%) rotateY(${slot.r}deg) scale(${slot.s})`,
            zIndex: slot.z + (hovered ? 5 : 0),
          };
          const inner = (
            <>
              <img src={item.image} alt={item.title} draggable={false} loading="lazy" />
              {hovered && <span className="lay-bubble">{item.title}</span>}
            </>
          );
          const handlers = {
            onMouseEnter: () => setHover(i),
            onMouseLeave: () => setHover(null),
          };
          return k === 0 ? (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="lay-card"
              style={style}
              {...handlers}
            >
              {inner}
            </Link>
          ) : (
            <div
              key={item.slug}
              className="lay-card"
              style={style}
              onClick={() => setActive(i)}
              {...handlers}
            >
              {inner}
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
    </div>
  );
};

/* 8. Glass panels with call to action */
export const GlassPanels = ({ items, openLabel }: Props) => {
  const [active, setActive] = useState(2);
  const n = items.length;
  return (
    <div className="gp">
      <div className="gp-stage">
        {items.map((item, i) => {
          const off = i - active;
          const abs = Math.abs(off);
          if (abs > 2) return null;
          const style = {
            transform: `translateX(${off * 72}%) translateZ(${-abs * 90}px) rotateY(${-off * 42}deg)`,
            zIndex: 10 - abs,
            opacity: abs === 2 ? 0.55 : 1,
          };
          return (
            <div
              key={item.slug}
              className={off === 0 ? "gp-card glass is-center" : "gp-card glass"}
              style={style}
              onClick={off === 0 ? undefined : () => setActive(i)}
            >
              <img src={item.image} alt={item.title} draggable={false} loading="lazy" />
              <div className="gp-body">
                <div className="gp-title">{item.title}</div>
                {off === 0 && <p className="gp-sum">{item.summary}</p>}
                {off === 0 && <Chips item={item} max={4} />}
              </div>
            </div>
          );
        })}
      </div>
      <div className="gp-actions">
        <Link href={`/work/${items[active].slug}`} className="det-cta">
          {openLabel} →
        </Link>
        <Link href="/work" className="gp-secondary">
          Ver todos
        </Link>
      </div>
      <Nav
        index={active}
        total={n}
        onPrev={() => setActive((v) => Math.max(0, v - 1))}
        onNext={() => setActive((v) => Math.min(n - 1, v + 1))}
      />
    </div>
  );
};
