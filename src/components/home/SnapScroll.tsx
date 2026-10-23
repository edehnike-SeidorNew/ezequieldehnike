"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

/**
 * Enables full-screen section snapping on the home page and renders a dot
 * indicator that follows the section currently in view.
 */
export const SnapScroll = ({ sections }: { sections: Section[] }) => {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("snap-home");
    return () => root.classList.remove("snap-home");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.35, 0.6, 0.9], rootMargin: "-92px 0px 0px 0px" },
    );
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="snap-dots" aria-label="Sections">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          title={section.label}
          className={active === section.id ? "snap-dot is-active" : "snap-dot"}
          onClick={(event) => {
            event.preventDefault();
            document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      ))}
    </nav>
  );
};
