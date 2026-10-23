"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { PiCaretRightBold } from "react-icons/pi";

import { ArrowButton } from "@/components/ArrowButton";
import { TechBadge } from "@/components/TechBadge";

import "./project-carousel.css";

export type CarouselItem = {
  slug: string;
  title: string;
  summary: string;
  tag: string;
  tech: string[];
  image: string;
};

/** Project palette: cyan, blue, violet (same as the biography cards). */
const hues = ["34,211,238", "59,130,246", "139,92,246"];

const VISIBLE = 2;

/** Signed, wrapped distance between card `index` and the active card (range [-n/2, n/2)). */
const offsetOf = (index: number, active: number, total: number) => {
  const half = total / 2;
  return ((((index - active + half) % total) + total) % total) - half;
};

type ProjectCarouselProps = {
  items: CarouselItem[];
  allHref: string;
  allLabel: string;
};

export const ProjectCarousel = ({ items, allHref, allLabel }: ProjectCarouselProps) => {
  const [active, setActive] = useState(Math.min(2, items.length - 1));
  const touchX = useRef<number | null>(null);
  const total = items.length;

  const next = () => setActive((value) => (value + 1) % total);
  const prev = () => setActive((value) => (value - 1 + total) % total);

  return (
    <div
      className="pc"
      onTouchStart={(event) => {
        touchX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchX.current === null) return;
        const delta = event.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(delta) > 40) (delta < 0 ? next : prev)();
      }}
    >
      <div className="pc-stage">
        {items.map((item, index) => {
          const off = offsetOf(index, active, total);
          const abs = Math.abs(off);
          const visible = abs <= VISIBLE;
          const clamped = Math.max(-VISIBLE - 1, Math.min(VISIBLE + 1, off));
          const style = {
            "--h": hues[index % hues.length],
            transform: `translateX(${clamped * 72}%) translateZ(${-Math.min(abs, VISIBLE + 1) * 90}px) rotateY(${-clamped * 42}deg)`,
            zIndex: 10 - Math.round(abs),
            opacity: !visible ? 0 : abs > 1 ? 0.55 : 1,
            pointerEvents: visible ? ("auto" as const) : ("none" as const),
          } as React.CSSProperties;
          const isCenter = Math.round(off) === 0;
          const body = (
            <>
              <span className="pc-num">{String(index + 1).padStart(2, "0")}</span>
              <img src={item.image} alt={item.title} draggable={false} loading="lazy" />
              <div className="pc-body">
                <div className="pc-title">{item.title}</div>
                {isCenter && <p className="pc-summary">{item.summary}</p>}
                {isCenter && (
                  <div className="pc-chips">
                    {item.tag && <span className="tech-badge is-tag">{item.tag}</span>}
                    {item.tech.slice(0, 4).map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                )}
              </div>
            </>
          );

          return isCenter ? (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="pc-card is-center"
              style={style}
              aria-label={item.title}
            >
              {body}
            </Link>
          ) : (
            <div
              key={item.slug}
              className="pc-card"
              style={style}
              onClick={() => setActive(index)}
              aria-hidden={!visible}
            >
              {body}
            </div>
          );
        })}
      </div>

      <div className="pc-nav">
        <ArrowButton direction="prev" label="Anterior" onClick={prev} />
        <span className="pc-count">
          {active + 1} / {total}
        </span>
        <ArrowButton direction="next" label="Siguiente" onClick={next} />
      </div>
      <div className="pc-all-row">
        <Link href={allHref} className="pc-all">
          {allLabel}
          <PiCaretRightBold aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};
