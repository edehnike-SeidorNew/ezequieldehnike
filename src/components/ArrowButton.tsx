import type { ButtonHTMLAttributes } from "react";
import {
  PiCaretDoubleLeftBold,
  PiCaretDoubleRightBold,
  PiCaretDownBold,
  PiCaretLeftBold,
  PiCaretRightBold,
  PiCaretUpBold,
} from "react-icons/pi";

import "./arrow-button.css";

export type ArrowDirection = "prev" | "next" | "up" | "down";

export type ArrowVariant =
  | "glass"
  | "plain"
  | "gradient"
  | "neon"
  | "pill"
  | "square"
  | "double"
  | "gradient-pill"
  | "soft-pill"
  | "outline-pill"
  | "stroke"
  | "stroke-brand";

/** Style used across the app. Change it here to restyle every arrow. */
export const DEFAULT_ARROW_VARIANT: ArrowVariant = "glass";

const single = {
  prev: PiCaretLeftBold,
  next: PiCaretRightBold,
  up: PiCaretUpBold,
  down: PiCaretDownBold,
};

const double = {
  prev: PiCaretDoubleLeftBold,
  next: PiCaretDoubleRightBold,
  up: PiCaretUpBold,
  down: PiCaretDownBold,
};

const rotation = { next: 0, prev: 180, down: 90, up: -90 };

/** Wide line arrow with a gradient stroke and rounded ends (no container). */
const StrokeArrow = ({ variant, direction }: { variant: ArrowVariant; direction: ArrowDirection }) => {
  const id = `arrow-grad-${variant}`;
  const stops =
    variant === "stroke-brand"
      ? ["#67e8f9", "#a78bfa"]
      : ["#a8b4ff", "#2f2bff"];
  return (
    <svg
      className="arrow-stroke-svg"
      viewBox="0 0 76 44"
      aria-hidden="true"
      style={{ transform: `rotate(${rotation[direction]}deg)` }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={stops[0]} />
          <stop offset="1" stopColor={stops[1]} />
        </linearGradient>
      </defs>
      <path
        d="M6 22 H68 M48 5 L68 22 L48 39"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

type ArrowButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  direction: ArrowDirection;
  variant?: ArrowVariant;
  label: string;
};

/** Chevron button ( < > ) with several visual styles. */
export const ArrowButton = ({
  direction,
  variant = DEFAULT_ARROW_VARIANT,
  label,
  className,
  ...props
}: ArrowButtonProps) => {
  const isStroke = variant === "stroke" || variant === "stroke-brand";
  const Icon = (variant === "double" ? double : single)[direction];
  return (
    <button
      type="button"
      aria-label={label}
      className={`arrow-btn arrow-${variant}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {isStroke ? <StrokeArrow variant={variant} direction={direction} /> : <Icon aria-hidden="true" />}
    </button>
  );
};
