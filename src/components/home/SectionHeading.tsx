import { Column, Heading, Line, Text } from "@once-ui-system/core";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <Column fillWidth gap="12" marginBottom="24">
    <Heading as="h2" variant="display-strong-s">
      {title}
    </Heading>
    {subtitle && (
      <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
        {subtitle}
      </Text>
    )}
    <Line maxWidth={8} background="brand-alpha-strong" height="4" />
  </Column>
);
