import { Avatar, Button, Column, Grid, Heading, Icon, Row, Text } from "@once-ui-system/core";

import type { Home } from "@/types";
import { SectionHeading } from "./SectionHeading";

type BiographyProps = {
  bio: Home["bio"];
  avatar: string;
  name: string;
  role: string;
  cvHref: string;
  aboutHref: string;
  aboutLabel: string;
};

export const Biography = ({
  bio,
  avatar,
  name,
  role,
  cvHref,
  aboutHref,
  aboutLabel,
}: BiographyProps) => (
  <Column fillWidth paddingX="l" id="bio">
    <SectionHeading title={bio.title} />
    <Row fillWidth gap="xl" s={{ direction: "column" }}>
      <Column flex={4} gap="16" horizontal="center" align="center" minWidth={12.5}>
        <Avatar src={avatar} size="xl" />
        <Column gap="4" horizontal="center">
          <Heading as="h3" variant="heading-strong-l">
            {name}
          </Heading>
          <Text variant="body-default-s" onBackground="brand-weak">
            {role}
          </Text>
        </Column>
        <Row gap="8" wrap horizontal="center">
          <Button href={cvHref} prefixIcon="download" variant="primary" size="m">
            {bio.downloadCv}
          </Button>
          <Button href={aboutHref} variant="secondary" size="m" arrowIcon>
            {aboutLabel}
          </Button>
        </Row>
      </Column>
      <Column flex={8} gap="24">
        <Column gap="16">
          {bio.paragraphs.map((paragraph, index) => (
            <Text key={index} variant="body-default-l" onBackground="neutral-medium">
              {paragraph}
            </Text>
          ))}
        </Column>
        <Grid columns="2" s={{ columns: 1 }} gap="16">
          {bio.facts.map((fact) => (
            <Row
              key={fact.label}
              gap="12"
              vertical="center"
              padding="12"
              radius="m"
              border="neutral-alpha-weak"
              background="surface"
            >
              <Icon name={fact.icon} onBackground="brand-weak" size="m" />
              <Column gap="2">
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {fact.label}
                </Text>
                <Text variant="body-strong-s">{fact.value}</Text>
              </Column>
            </Row>
          ))}
        </Grid>
      </Column>
    </Row>
  </Column>
);
