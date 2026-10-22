import { Column, Heading, Text } from "@once-ui-system/core";

type NotFoundViewProps = {
  title: string;
  text: string;
};

export const NotFoundView = ({ title, text }: NotFoundViewProps) => (
  <Column as="section" fill center paddingBottom="160">
    <Text marginBottom="s" variant="display-strong-xl">
      404
    </Text>
    <Heading marginBottom="l" variant="display-default-xs">
      {title}
    </Heading>
    <Text onBackground="neutral-weak">{text}</Text>
  </Column>
);
