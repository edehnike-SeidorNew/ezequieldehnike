import { Column, Grid, Heading, Icon, Text } from "@once-ui-system/core";

import type { Home } from "@/types";
import { SectionHeading } from "./SectionHeading";

export const Services = ({ services }: { services: Home["services"] }) => (
  <Column fillWidth paddingX="l" id="services">
    <SectionHeading title={services.title} subtitle={services.subtitle} />
    <Grid columns="2" s={{ columns: 1 }} gap="24">
      {services.items.map((item) => (
        <Column
          key={item.title}
          gap="16"
          padding="l"
          radius="l"
          border="neutral-alpha-weak"
          background="surface"
        >
          <Column
            width="48"
            height="48"
            center
            radius="m"
            background="brand-alpha-weak"
            border="brand-alpha-medium"
          >
            <Icon name={item.icon} onBackground="brand-strong" size="l" />
          </Column>
          <Heading as="h3" variant="heading-strong-m">
            {item.title}
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {item.description}
          </Text>
        </Column>
      ))}
    </Grid>
  </Column>
);
