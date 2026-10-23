import { Column, Heading, Text } from "@once-ui-system/core";

import { ArrowStyles } from "@/components/showcase/ArrowStyles";
import { CardStyles } from "@/components/showcase/CardStyles";
import { NavPreviews } from "@/components/showcase/NavPreviews";
import { ShowcaseOptions } from "@/components/showcase/ShowcaseOptions";
import { getContent } from "@/resources/i18n";
import { getPosts } from "@/utils/utils";

// Temporary comparison page: five ways to present the projects. Delete once one is chosen.
export default async function Opciones() {
  const { locale } = await getContent();
  const items = getPosts(["src", "app", "work", "projects", locale])
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
    )
    .map((post) => ({
      slug: post.slug,
      title: post.metadata.title,
      summary: post.metadata.summary,
      tag: post.metadata.tag ?? "",
      tech: post.metadata.tech ?? [],
      image: post.metadata.images[0] ?? "",
    }));

  return (
    <Column maxWidth="l" fillWidth paddingX="l" paddingTop="24" gap="16">
      <Heading as="h1" variant="display-strong-m" className="gradient-text">
        Opciones para mostrar los proyectos
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        Mirá las 8 de arriba hacia abajo y decime cuál te gusta (o qué mezclar). Todas usan tus
        proyectos reales.
      </Text>
      <ShowcaseOptions items={items} openLabel="Ver proyecto" />
      <section style={{ width: "100%", padding: "2.5rem 0 1rem", borderTop: "1px solid rgba(160,200,255,0.14)" }}>
        <Heading as="h2" variant="display-strong-s" className="gradient-text">
          Flechas
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ margin: "0.5rem 0 0" }}>
          12 estilos de flechas: chevron ( &lt; &gt; ), píldoras degradé y flechas de línea sin contenedor. Se usan en los carruseles. Para cambiar el
          estilo en toda la app, editá DEFAULT_ARROW_VARIANT en src/components/ArrowButton.tsx.
        </Text>
        <ArrowStyles />
      </section>
      <section style={{ width: "100%", padding: "2.5rem 0 1rem", borderTop: "1px solid rgba(160,200,255,0.14)" }}>
        <Heading as="h2" variant="display-strong-s" className="gradient-text">
          Estilos de tarjetas e íconos
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ margin: "0.5rem 0 0.5rem" }}>
          4 estilos de vidrio para las tarjetas de Biografía, Qué hago y Proyectos, con distintos
          tipos de íconos. Arriba de cada uno están las tarjetas de servicios y abajo las de datos
          de la biografía.
        </Text>
        <CardStyles />
      </section>
      <section style={{ width: "100%", padding: "2.5rem 0 3rem", borderTop: "1px solid rgba(160,200,255,0.14)" }}>
        <Heading as="h2" variant="display-strong-s" className="gradient-text">
          Opciones de menú
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ margin: "0.5rem 0 1.5rem" }}>
          Tres formas de armar el menú con íconos y estilo de vidrio. Son maquetas: pasá el mouse
          para ver cómo reaccionan.
        </Text>
        <NavPreviews />
      </section>
    </Column>
  );
}
