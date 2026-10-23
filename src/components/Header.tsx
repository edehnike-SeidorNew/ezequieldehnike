"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  PiBookBookmarkDuotone,
  PiEnvelopeSimpleDuotone,
  PiFileTextDuotone,
  PiImageDuotone,
  PiListBold,
  PiRocketLaunchDuotone,
  PiUserCircleDuotone,
  PiXBold,
} from "react-icons/pi";

import { routes, display, person } from "@/resources";
import type { Locale } from "@/resources/locale";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

type HeaderProps = {
  locale: Locale;
  labels: {
    home: string;
    about: string;
    work: string;
    cv: string;
    contact: string;
    blog: string;
    gallery: string;
  };
};

/** Full-width glass top bar: brand, icon + text links, language dropdown and theme switch. */
export const Header = ({ locale, labels }: HeaderProps) => {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/about", label: labels.about, Icon: PiUserCircleDuotone, active: pathname === "/about" },
    { href: "/work", label: labels.work, Icon: PiRocketLaunchDuotone, active: pathname.startsWith("/work") },
    { href: "/cv", label: labels.cv, Icon: PiFileTextDuotone, active: pathname.startsWith("/cv") },
    { href: "/contact", label: labels.contact, Icon: PiEnvelopeSimpleDuotone, active: pathname.startsWith("/contact") },
    { href: "/blog", label: labels.blog, Icon: PiBookBookmarkDuotone, active: pathname.startsWith("/blog") },
    { href: "/gallery", label: labels.gallery, Icon: PiImageDuotone, active: pathname.startsWith("/gallery") },
  ].filter((link) => routes[link.href as keyof typeof routes]);

  const renderLinks = (className: string) =>
    links.map(({ href, label, Icon, active }) => (
      <Link
        key={href}
        href={href}
        className={active ? `${className} is-active` : className}
        onClick={() => setOpen(false)}
      >
        <span className="topbar-ico" aria-hidden="true">
          <Icon />
        </span>
        <span>{label}</span>
      </Link>
    ));

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="topbar-brand" aria-label={labels.home} onClick={() => setOpen(false)}>
          <img className="topbar-avatar" src={person.avatar} alt="" />
          <span className="topbar-name">{person.name}</span>
        </Link>

        <nav className="topbar-links" aria-label="Principal">
          {renderLinks("topbar-link")}
        </nav>

        <div className="topbar-actions">
          <LanguageToggle locale={locale} />
          {display.themeSwitcher && <ThemeToggle />}
          <button
            type="button"
            className="topbar-burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <PiXBold /> : <PiListBold />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="topbar-panel" aria-label="Principal móvil">
          {renderLinks("topbar-panel-link")}
        </nav>
      )}
    </header>
  );
};
