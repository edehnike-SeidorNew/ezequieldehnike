import { Button, Column, Heading, Meta, Row, Schema } from "@once-ui-system/core";

import { baseURL, social } from "@/resources";
import { cv } from "@/resources/cv";
import { getContent } from "@/resources/i18n";
import { CvDocument } from "@/components/CvDocument";

export async function generateMetadata() {
  const { locale, person } = await getContent();
  return Meta.generate({
    title: `${cv[locale].title} – ${person.name}`,
    description: cv[locale].description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(cv[locale].title)}`,
    path: "/cv",
  });
}

export default async function Cv() {
  const { locale, person, about } = await getContent();
  const data = cv[locale];
  const linkedin = social.find((item) => item.name === "LinkedIn")?.link ?? "";

  return (
    <Column maxWidth="m" paddingTop="24" gap="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/cv"
        title={data.title}
        description={data.description}
        image={`/api/og/generate?title=${encodeURIComponent(data.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth horizontal="between" vertical="center" wrap gap="16" className="no-print">
        <Heading variant="heading-strong-xl">{data.title}</Heading>
        <Button
          href={data.downloadFile}
          prefixIcon="document"
          variant="secondary"
          size="m"
          download
        >
          {data.download}
        </Button>
      </Row>
      <CvDocument
        data={data}
        name={person.name}
        role={person.role}
        email={person.email}
        linkedin={linkedin}
        location={person.location}
      />
    </Column>
  );
}
