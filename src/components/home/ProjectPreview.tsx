import { Column } from "@once-ui-system/core";

import { getPosts } from "@/utils/utils";
import { getContent } from "@/resources/i18n";
import { ProjectCarousel } from "./ProjectCarousel";
import { SectionHeading } from "./SectionHeading";

export async function ProjectPreview() {
  const { locale, home, work, t } = await getContent();
  const { projects } = home;

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
    <Column fillWidth paddingX="l" id="projects">
      <SectionHeading title={projects.title} subtitle={projects.subtitle} />
      <ProjectCarousel items={items} allHref={work.path} allLabel={t.viewAllProjects} />
    </Column>
  );
}
