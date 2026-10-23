import { Badge, Column, Heading, RevealFx, Row, Text } from "@once-ui-system/core";

import { Portrait } from "@/components/Portrait";
import type { Home } from "@/types";

export const Hero = ({ home, name }: { home: Home; name: string }) => (
  <Row
    fillWidth
    paddingX="l"
    gap="xl"
    vertical="center"
    s={{ direction: "column" }}
  >
    <Column flex={7} gap="24" s={{ horizontal: "center", align: "center" }}>
      {home.featured.display && (
        <RevealFx horizontal="start" s={{ horizontal: "center" }}>
          <Badge
            background="brand-alpha-weak"
            paddingX="12"
            paddingY="4"
            onBackground="neutral-strong"
            textVariant="label-default-s"
            arrow={false}
            href={home.featured.href}
          >
            <Row paddingY="2">{home.featured.title}</Row>
          </Badge>
        </RevealFx>
      )}
      <RevealFx translateY="4" horizontal="start" s={{ horizontal: "center" }}>
        <Heading as="h1" wrap="balance" variant="display-strong-xl" className="gradient-text hero-title">
          {home.headline}
        </Heading>
      </RevealFx>
      <RevealFx translateY="8" delay={0.2} horizontal="start" s={{ horizontal: "center" }}>
        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l" className="hero-sub">
          {home.subline}
        </Text>
      </RevealFx>
    </Column>

    <RevealFx translateY="12" delay={0.3} horizontal="center" style={{ flex: 5 }}>
      <Portrait name={name} size={300} />
    </RevealFx>
  </Row>
);
