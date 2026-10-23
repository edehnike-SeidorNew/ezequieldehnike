import { Icon, RevealFx, Column, Schema, Meta } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/i18n";
import { Mailchimp } from "@/components";
import { Hero } from "@/components/home/Hero";
import { SnapScroll } from "@/components/home/SnapScroll";
import { Biography } from "@/components/home/Biography";
import { Services } from "@/components/home/Services";
import { ProjectPreview } from "@/components/home/ProjectPreview";

export async function generateMetadata() {
  const { home } = await getContent();
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function Home() {
  const { home, about, person } = await getContent();
  return (
    <Column maxWidth="m" gap="0" horizontal="center" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <SnapScroll
        sections={[
          { id: "section-hero", label: home.label },
          { id: "section-bio", label: home.bio.title },
          { id: "section-services", label: home.services.title },
          { id: "section-projects", label: home.projects.title },
        ]}
      />
      <section id="section-hero" className="snap-section">
        <Hero home={home} name={person.name} />
        <a href="#section-bio" className="scroll-hint" aria-label={home.bio.title}>
          <Icon name="arrowDown" size="m" />
        </a>
      </section>
      <section id="section-bio" className="snap-section">
        <RevealFx translateY="16" fillWidth>
          <Biography bio={home.bio} />
        </RevealFx>
      </section>
      <section id="section-services" className="snap-section">
        <Services services={home.services} />
      </section>
      <section id="section-projects" className="snap-section">
        <ProjectPreview />
      </section>
      <Mailchimp />
    </Column>
  );
}
