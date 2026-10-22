import { Button, Column, Grid, Heading, Media, Row, SmartLink } from "@once-ui-system/core";

import { TechTags } from "@/components/TechTags";
import { getPosts } from "@/utils/utils";
import { getContent } from "@/resources/i18n";
import { SectionHeading } from "./SectionHeading";

export async function ProjectPreview() {
  const { locale, home, work } = await getContent();
  const { projects } = home;

  const posts = getPosts(["src", "app", "work", "projects", locale])
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, projects.count);

  return (
    <Column fillWidth paddingX="l" id="projects">
      <SectionHeading title={projects.title} subtitle={projects.subtitle} />
      <Grid columns="3" m={{ columns: 2 }} s={{ columns: 1 }} gap="24">
        {posts.map((post) => (
          <SmartLink key={post.slug} href={`/work/${post.slug}`} unstyled>
            <Column
              fillWidth
              gap="16"
              padding="12"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
            >
              {post.metadata.images[0] && (
                <Media
                  src={post.metadata.images[0]}
                  alt={post.metadata.title}
                  aspectRatio="16 / 10"
                  radius="m"
                  sizes="(max-width: 960px) 100vw, 400px"
                />
              )}
              <Column gap="12" paddingX="8" paddingBottom="8">
                <Heading as="h3" variant="heading-strong-m" wrap="balance">
                  {post.metadata.title}
                </Heading>
                <TechTags tag={post.metadata.tag} tech={post.metadata.tech.slice(0, 4)} />
              </Column>
            </Column>
          </SmartLink>
        ))}
      </Grid>
      <Row fillWidth horizontal="center" marginTop="32">
        <Button href={work.path} variant="secondary" size="l" arrowIcon>
          {projects.viewAll}
        </Button>
      </Row>
    </Column>
  );
}
