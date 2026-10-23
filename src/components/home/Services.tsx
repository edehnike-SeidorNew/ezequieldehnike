import { Column, Grid } from "@once-ui-system/core";

import type { Home } from "@/types";
import { CardStack } from "./CardStack";
import { LiquidCard } from "./LiquidCard";
import { SectionHeading } from "./SectionHeading";

export const Services = ({ services }: { services: Home["services"] }) => {
  const cards = services.items.map((item, index) => (
    <LiquidCard key={item.title} index={index} icon={item.icon} title={item.title}>
      {item.description}
    </LiquidCard>
  ));

  return (
    <Column fillWidth paddingX="l" id="services">
      <SectionHeading title={services.title} subtitle={services.subtitle} />
      <div className="stack-desktop">
        <Grid columns="2" gap="24" style={{ alignItems: "stretch", gridAutoRows: "1fr" }}>
          {cards}
        </Grid>
      </div>
      <div className="stack-mobile">
        <CardStack cards={cards} label={services.title} />
      </div>
    </Column>
  );
};
