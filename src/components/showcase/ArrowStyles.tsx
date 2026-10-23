import { ArrowButton, type ArrowVariant } from "@/components/ArrowButton";

import "./arrow-styles.css";

const styles: { variant: ArrowVariant; title: string; desc: string }[] = [
  { variant: "stroke", title: "A · Flecha de línea índigo", desc: "Sin círculo. Trazo degradé azul-índigo, ancha, puntas redondeadas." },
  { variant: "stroke-brand", title: "B · Flecha de línea cian-violeta", desc: "Igual, con los colores del sitio." },
  { variant: "glass", title: "1 · Cristal circular", desc: "El que usa la app hoy: círculo de vidrio con chevron." },
  { variant: "plain", title: "2 · Chevron solo", desc: "Sin contenedor. El más limpio y discreto." },
  { variant: "gradient", title: "3 · Degradé relleno", desc: "Círculo cian a violeta, llama más la atención." },
  { variant: "neon", title: "4 · Neón", desc: "Contorno cian con resplandor." },
  { variant: "pill", title: "5 · Píldora ancha", desc: "Más fácil de tocar en celular." },
  { variant: "square", title: "6 · Cuadrado redondeado", desc: "Del estilo de los íconos de las tarjetas." },
  { variant: "double", title: "7 · Doble chevron", desc: "Insinúa avanzar de a más de uno." },
  { variant: "gradient-pill", title: "8 · Píldora degradé", desc: "La forma y los colores del indicador activo de los puntos." },
  { variant: "soft-pill", title: "9 · Píldora degradé suave", desc: "Versión translúcida con chevron claro." },
  { variant: "outline-pill", title: "10 · Píldora con borde degradé", desc: "Interior oscuro y contorno cian a violeta." },
];

/** Documentation: every arrow style, with the code to use it. */
export const ArrowStyles = () => (
  <div className="as-grid">
    {styles.map(({ variant, title, desc }) => (
      <div key={variant} className="as-card">
        <strong>{title}</strong>
        <span className="as-desc">{desc}</span>
        <div className="as-row">
          <ArrowButton direction="prev" variant={variant} label="Anterior" />
          <ArrowButton direction="next" variant={variant} label="Siguiente" />
          <ArrowButton direction="up" variant={variant} label="Arriba" />
          <ArrowButton direction="down" variant={variant} label="Abajo" />
        </div>
        <code>{`<ArrowButton direction="next" variant="${variant}" label="Siguiente" />`}</code>
      </div>
    ))}
  </div>
);
