import type { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa6";
import {
  SiCss3,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMercadopago,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSharp,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

/** Brand logo + colour per technology. `null` colour means "follow the text colour". */
const techs: Record<string, { Icon: IconType; color: string | null }> = {
  "Next.js": { Icon: SiNextdotjs, color: null },
  React: { Icon: SiReact, color: "#61DAFB" },
  TypeScript: { Icon: SiTypescript, color: "#3B82F6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Supabase: { Icon: SiSupabase, color: "#3ECF8E" },
  PostgreSQL: { Icon: SiPostgresql, color: "#5B8DEF" },
  Netlify: { Icon: SiNetlify, color: "#2DD4C4" },
  HTML: { Icon: SiHtml5, color: "#F06529" },
  CSS: { Icon: SiCss3, color: "#2D8CE6" },
  "Node.js": { Icon: SiNodedotjs, color: "#68B656" },
  Express: { Icon: SiExpress, color: null },
  MongoDB: { Icon: SiMongodb, color: "#4FAA41" },
  "Mercado Pago": { Icon: SiMercadopago, color: "#00B1EA" },
  "C#": { Icon: SiSharp, color: "#A97BFF" },
  ".NET": { Icon: SiDotnet, color: "#8B6CFF" },
  "SQL Server": { Icon: FaDatabase, color: "#F0524F" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Python: { Icon: SiPython, color: "#FFD43B" },
  Django: { Icon: SiDjango, color: "#44B78B" },
  Git: { Icon: SiGit, color: "#F05033" },
};

type TechBadgeProps = {
  name: string;
  className?: string;
};

/** Small pill with the technology logo followed by its name. */
export const TechBadge = ({ name, className }: TechBadgeProps) => {
  const entry = techs[name];
  return (
    <span className={className ? `tech-badge ${className}` : "tech-badge"}>
      {entry && (
        <entry.Icon
          className="tech-badge-icon"
          aria-hidden="true"
          style={entry.color ? { color: entry.color } : undefined}
        />
      )}
      {name}
    </span>
  );
};
