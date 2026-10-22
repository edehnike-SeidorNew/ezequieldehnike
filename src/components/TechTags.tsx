import { Row, Tag } from "@once-ui-system/core";

const techIcons: Record<string, string> = {
  "Next.js": "nextjs",
  React: "react",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "Tailwind CSS": "tailwind",
  Supabase: "supabase",
  PostgreSQL: "postgresql",
  Netlify: "netlify",
  HTML: "html",
  CSS: "css",
  "Node.js": "nodejs",
  Express: "express",
  MongoDB: "mongodb",
  "Mercado Pago": "mercadopago",
  "C#": "csharp",
  ".NET": "dotnet",
};

type TechTagsProps = {
  tag?: string;
  tech?: string[];
  center?: boolean;
};

export const TechTags = ({ tag, tech = [], center }: TechTagsProps) => {
  if (!tag && tech.length === 0) return null;

  return (
    <Row wrap gap="8" horizontal={center ? "center" : undefined}>
      {tag && (
        <Tag size="m" variant="brand">
          {tag}
        </Tag>
      )}
      {tech.map((name) => (
        <Tag key={name} size="m" prefixIcon={techIcons[name]}>
          {name}
        </Tag>
      ))}
    </Row>
  );
};
