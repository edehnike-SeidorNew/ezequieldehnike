"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";

import { ArrowButton } from "@/components/ArrowButton";

import "./card-stack.css";

const VISIBLE_BEHIND = 3;

/**
 * Phone-only carousel: cards stacked in perspective, the active one in front and the rest
 * receding upwards (option 6 of the slider gallery). Wraps around at both ends.
 */
export const CardStack = ({ cards, label }: { cards: ReactNode[]; label: string }) => {
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);
  const total = cards.length;

  const next = () => setActive((value) => (value + 1) % total);
  const prev = () => setActive((value) => (value - 1 + total) % total);

  return (
    <div
      className="cstack"
      aria-label={label}
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
      <div className="cstack-stage" style={{ paddingTop: VISIBLE_BEHIND * 16 }}>
        {cards.map((card, index) => {
          const off = (index - active + total) % total;
          const front = off === 0;
          const gone = off === total - 1 && total > 1;
          const behind = !front && !gone && off <= VISIBLE_BEHIND;
          const style = {
            transform: gone
              ? "translateY(60px) scale(1.04)"
              : `translateY(${-Math.min(off, VISIBLE_BEHIND + 1) * 16}px) scale(${1 - Math.min(off, VISIBLE_BEHIND + 1) * 0.06})`,
            zIndex: 20 - off,
            opacity: gone ? 0 : front ? 1 : behind ? 1 - off * 0.18 : 0,
            filter: front ? "none" : `brightness(${1 - off * 0.12})`,
            pointerEvents: front ? ("auto" as const) : ("none" as const),
          };
          return (
            <div key={index} className="cstack-item" style={style} aria-hidden={!front}>
              {card}
            </div>
          );
        })}
      </div>

      <div className="cstack-nav">
        <ArrowButton direction="prev" label="Anterior" onClick={prev} />
        <div className="cstack-dots">
          {cards.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === active ? "cstack-dot is-active" : "cstack-dot"}
              onClick={() => setActive(index)}
              aria-label={String(index + 1)}
            />
          ))}
        </div>
        <ArrowButton direction="next" label="Siguiente" onClick={next} />
      </div>
    </div>
  );
};
