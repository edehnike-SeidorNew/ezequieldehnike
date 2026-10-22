import { Column, Heading, Line, Row, Tag, Text } from "@once-ui-system/core";

import type { CvData } from "@/resources/cv";

type CvDocumentProps = {
  data: CvData;
  name: string;
  role: string;
  email: string;
  linkedin: string;
  location: string;
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Column fillWidth gap="8" marginBottom="12">
    <Heading as="h2" variant="heading-strong-l">
      {children}
    </Heading>
    <Line />
  </Column>
);

export const CvDocument = ({ data, name, role, email, linkedin, location }: CvDocumentProps) => (
  <Column
    id="cv-document"
    fillWidth
    maxWidth="m"
    gap="32"
    padding="xl"
    radius="l"
    border="neutral-alpha-weak"
    background="surface"
    s={{ padding: "l" }}
  >
    <Column gap="8">
      <Heading as="h1" variant="display-strong-s">
        {name}
      </Heading>
      <Text variant="heading-default-m" onBackground="brand-weak">
        {role}
      </Text>
      <Row gap="16" wrap onBackground="neutral-weak" textVariant="body-default-s">
        <Text>{location}</Text>
        <Text>{email}</Text>
        <Text>{linkedin.replace("https://www.", "")}</Text>
      </Row>
    </Column>

    <Column fillWidth>
      <SectionTitle>{data.headings.profile}</SectionTitle>
      <Text variant="body-default-m" onBackground="neutral-medium">
        {data.profile}
      </Text>
    </Column>

    <Column fillWidth>
      <SectionTitle>{data.headings.experience}</SectionTitle>
      <Column fillWidth gap="24">
        {data.experience.map((item) => (
          <Column key={`${item.company}-${item.period}`} fillWidth gap="4">
            <Row fillWidth horizontal="between" wrap gap="8">
              <Text variant="heading-strong-m">{item.company}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {item.period}
              </Text>
            </Row>
            <Text variant="body-default-s" onBackground="brand-weak">
              {item.role}
              {item.location ? ` · ${item.location}` : ""}
            </Text>
            {item.bullets.length > 0 && (
              <Column as="ul" gap="8" paddingTop="8">
                {item.bullets.map((bullet) => (
                  <Text as="li" key={bullet} variant="body-default-s">
                    {bullet}
                  </Text>
                ))}
              </Column>
            )}
          </Column>
        ))}
      </Column>
    </Column>

    <Column fillWidth>
      <SectionTitle>{data.headings.education}</SectionTitle>
      <Column fillWidth gap="16">
        {data.education.map((item) => (
          <Column key={`${item.name}-${item.detail}`} fillWidth gap="2">
            <Row fillWidth horizontal="between" wrap gap="8">
              <Text variant="heading-strong-s">{item.name}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {item.period}
              </Text>
            </Row>
            <Text variant="body-default-s" onBackground="neutral-medium">
              {item.detail}
            </Text>
          </Column>
        ))}
      </Column>
    </Column>

    <Column fillWidth>
      <SectionTitle>{data.headings.skills}</SectionTitle>
      <Column fillWidth gap="16">
        {data.skills.map((group) => (
          <Column key={group.group} gap="8">
            <Text variant="label-strong-s" onBackground="neutral-weak">
              {group.group}
            </Text>
            <Row wrap gap="8">
              {group.items.map((item) => (
                <Tag key={item} size="m">
                  {item}
                </Tag>
              ))}
            </Row>
          </Column>
        ))}
      </Column>
    </Column>

    <Row fillWidth gap="32" s={{ direction: "column" }}>
      <Column flex={1}>
        <SectionTitle>{data.headings.languages}</SectionTitle>
        <Column as="ul" gap="8">
          {data.languages.map((item) => (
            <Text as="li" key={item} variant="body-default-s">
              {item}
            </Text>
          ))}
        </Column>
      </Column>
      <Column flex={1}>
        <SectionTitle>{data.headings.other}</SectionTitle>
        <Column as="ul" gap="8">
          {data.other.map((item) => (
            <Text as="li" key={item} variant="body-default-s">
              {item}
            </Text>
          ))}
        </Column>
      </Column>
    </Row>
  </Column>
);
