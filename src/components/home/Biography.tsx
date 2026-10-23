import { Column, Grid, Text } from "@once-ui-system/core";

import type { Home } from "@/types";
import { CardStack } from "./CardStack";
import { LiquidCard } from "./LiquidCard";
import { SectionHeading } from "./SectionHeading";

export const Biography = ({ bio }: { bio: Home["bio"] }) => {
  const cards = bio.facts.map((fact, index) => (
    <LiquidCard
      key={fact.label}
      index={index}
      icon={fact.icon}
      title={fact.label}
      size="sm"
      palette="brand"
    >
      {fact.value}
    </LiquidCard>
  ));

  return (
    <Column fillWidth paddingX="l" id="bio">
      <SectionHeading title={bio.title} />
      <Column fillWidth gap="24">
        <Column gap="16" maxWidth="m">
          {bio.paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              variant="body-default-l"
              onBackground="neutral-medium"
              className="bio-text"
            >
              {paragraph}
            </Text>
          ))}
        </Column>
        <div className="stack-desktop">
          <Grid
            columns="3"
            m={{ columns: 2 }}
            gap="16"
            style={{ alignItems: "stretch", gridAutoRows: "1fr" }}
          >
            {cards}
          </Grid>
        </div>
        <div className="stack-mobile">
          <CardStack cards={cards} label={bio.title} />
        </div>
      </Column>
    </Column>
  );
};
