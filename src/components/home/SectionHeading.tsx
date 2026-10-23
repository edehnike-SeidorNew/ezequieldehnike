import { Column, Heading, Line, Text } from "@once-ui-system/core";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <Column fillWidth gap="12" marginBottom="24" className="section-heading">
    <Heading as="h2" variant="display-strong-s" className="section-title">
      {title}
    </Heading>
    {subtitle && (
      <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" className="section-sub">
        {subtitle}
      </Text>
    )}
    <Line maxWidth={8} background="brand-alpha-strong" height="4" />
  </Column>
);
