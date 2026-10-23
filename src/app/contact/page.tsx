import Image from "next/image";

import { Button, Column, Heading, Icon, Meta, Row, Schema, Text } from "@once-ui-system/core";

import { baseURL, social } from "@/resources";
import { contact, contactEmail, whatsappDisplay, whatsappNumber } from "@/resources/contact";
import { getContent } from "@/resources/i18n";
import { ContactForm } from "@/components/ContactForm";

export async function generateMetadata() {
  const { locale, person } = await getContent();
  return Meta.generate({
    title: `${contact[locale].title} – ${person.name}`,
    description: contact[locale].description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact[locale].title)}`,
    path: "/contact",
  });
}

export default async function Contact() {
  const { locale, person, about } = await getContent();
  const data = contact[locale];
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(data.whatsapp.prefill)}`;
  const linkedin = social.find((item) => item.name === "LinkedIn")?.link;

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl" horizontal="center" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/contact"
        title={data.title}
        description={data.description}
        image={`/api/og/generate?title=${encodeURIComponent(data.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column gap="12" horizontal="center" align="center" maxWidth="s" paddingX="l">
        <Heading as="h1" variant="display-strong-l">
          {data.heading}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {data.intro}
        </Text>
      </Column>

      <Row fillWidth gap="24" paddingX="l" s={{ direction: "column" }}>
        <Column
          flex={7}
          gap="20"
          className="glass"
          padding="xl"
          radius="l"
          s={{ padding: "l" }}
        >
          <Row gap="12" vertical="center">
            <Icon name="mail" onBackground="brand-weak" size="l" />
            <Heading as="h2" variant="heading-strong-l">
              {data.form.title}
            </Heading>
          </Row>
          <ContactForm form={data.form} email={contactEmail} />
        </Column>

        <Column
          flex={5}
          gap="16"
          className="glass"
          padding="xl"
          radius="l"
          horizontal="center"
          align="center"
          s={{ padding: "l" }}
        >
          <Row gap="12" vertical="center">
            <Icon name="whatsapp" onBackground="brand-weak" size="l" />
            <Heading as="h2" variant="heading-strong-l">
              {data.whatsapp.title}
            </Heading>
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
            {data.whatsapp.text}
          </Text>

          {/* Desktop: QR code to scan with the phone */}
          <Column gap="12" horizontal="center" s={{ hide: true }}>
            <div
              style={{
                position: "relative",
                width: 220,
                height: 220,
                borderRadius: 16,
                overflow: "hidden",
                background: "#fff",
                padding: 6,
              }}
            >
              <Image
                src="/images/whatsapp-qr.svg"
                alt={data.whatsapp.qrAlt}
                width={208}
                height={208}
                unoptimized
              />
            </div>
            <Text variant="label-default-s" onBackground="neutral-weak">
              {data.whatsapp.qrCaption}
            </Text>
          </Column>

          {/* Mobile: the QR makes no sense on the phone itself, so show a button */}
          <Column gap="12" horizontal="center" hide s={{ hide: false }}>
            <Text variant="label-default-s" onBackground="neutral-weak">
              {data.whatsapp.mobileCaption}
            </Text>
          </Column>

          <Button
            href={whatsappLink}
            target="_blank"
            rel="noopener"
            prefixIcon="whatsapp"
            variant="primary"
            className="cta-yellow"
            size="l"
          >
            {data.whatsapp.button}
          </Button>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {whatsappDisplay}
          </Text>
        </Column>
      </Row>

      <Row gap="12" vertical="center" wrap horizontal="center" paddingBottom="24">
        <Text variant="label-default-s" onBackground="neutral-weak">
          {data.direct.title}
        </Text>
        <Button href={`mailto:${contactEmail}`} prefixIcon="email" variant="tertiary" size="s">
          {contactEmail}
        </Button>
        {linkedin && (
          <Button href={linkedin} prefixIcon="linkedin" variant="tertiary" size="s">
            {data.direct.linkedin}
          </Button>
        )}
      </Row>
    </Column>
  );
}
