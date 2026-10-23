import { Row } from "@once-ui-system/core";

import { TechBadge } from "./TechBadge";

type TechTagsProps = {
  tag?: string;
  tech?: string[];
  center?: boolean;
};

export const TechTags = ({ tag, tech = [], center }: TechTagsProps) => {
  if (!tag && tech.length === 0) return null;

  return (
    <Row wrap gap="8" horizontal={center ? "center" : undefined}>
      {tag && <span className="tech-badge is-tag">{tag}</span>}
      {tech.map((name) => (
        <TechBadge key={name} name={name} />
      ))}
    </Row>
  );
};
