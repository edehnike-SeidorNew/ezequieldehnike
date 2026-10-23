import { Icon } from "@once-ui-system/core";

import { social } from "@/resources";
import { getContent } from "@/resources/i18n";

export const Footer = async () => {
  const { person, t } = await getContent();
  const currentYear = new Date().getFullYear();
  const links = social.filter((item) => item.link);

  return (
    <footer className="follow">
      <h2 className="follow-title gradient-text">{t.followMe}</h2>
      <p className="follow-sub">{t.followText}</p>
      <div className="follow-icons">
        {links.map((item) => {
          const external = item.link.startsWith("http");
          return (
            <a
              key={item.name}
              href={item.link}
              className="follow-btn"
              data-label={item.name}
              aria-label={item.name}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon name={item.icon} size="m" />
            </a>
          );
        })}
      </div>
      <p className="follow-copy">
        © {currentYear} / {person.name}
      </p>
    </footer>
  );
};
