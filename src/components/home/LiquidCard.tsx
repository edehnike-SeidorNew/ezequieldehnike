import type { ReactNode } from "react";

import { iconLibrary } from "@/resources/icons";

import "./liquid-card.css";

/** Hue (r,g,b) per card, cycled: violet, blue, cyan, orange, pink. */
const multiHues = ["139,92,246", "59,130,246", "34,211,238", "251,146,60", "236,72,153"];

/** Project palette only: cyan, blue, violet. */
const brandHues = ["34,211,238", "59,130,246", "139,92,246"];

type LiquidCardProps = {
  index: number;
  icon: string;
  title: string;
  children: ReactNode;
  size?: "lg" | "sm";
  palette?: "multi" | "brand";
};

/** "Liquid glass" card: numbered badge, text, and a layered translucent icon on the right. */
export const LiquidCard = ({ index, icon, title, children, size = "lg", palette = "multi" }: LiquidCardProps) => {
  const hues = palette === "brand" ? brandHues : multiHues;
  const Icon = iconLibrary[icon];
  const style = { "--h": hues[index % hues.length] } as React.CSSProperties;

  return (
    <div className={size === "sm" ? "lq lq-sm" : "lq"} style={style}>
      <span className="lq-num">{String(index + 1).padStart(2, "0")}</span>
      <div className="lq-text">
        <strong>{title}</strong>
        <span>{children}</span>
      </div>
      {Icon && (
        <div className="lq-art" aria-hidden="true">
          <i className="g1" />
          <i className="g2" />
          <span className="tile">
            <Icon />
          </span>
        </div>
      )}
    </div>
  );
};
