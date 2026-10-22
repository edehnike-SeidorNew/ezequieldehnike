"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { Avatar, Column, IconButton, Row, SmartLink, Text, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, social } from "@/resources";
import type { Locale } from "@/resources/locale";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

type HeaderProps = {
  locale: Locale;
  labels: { about: string; work: string; cv: string; blog: string; gallery: string };
};

export const Header = ({ locale, labels }: HeaderProps) => {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/about", label: labels.about, active: pathname === "/about" },
    { href: "/work", label: labels.work, active: pathname.startsWith("/work") },
    { href: "/cv", label: labels.cv, active: pathname.startsWith("/cv") },
    { href: "/blog", label: labels.blog, active: pathname.startsWith("/blog") },
    { href: "/gallery", label: labels.gallery, active: pathname.startsWith("/gallery") },
  ].filter((link) => routes[link.href as keyof typeof routes]);

  return (
    <Column
      as="header"
      fillWidth
      position="sticky"
      top="0"
      zIndex={9}
      background="page"
      borderBottom="neutral-alpha-weak"
      style={{ backdropFilter: "blur(12px)", background: "color-mix(in srgb, var(--page-background) 80%, transparent)" }}
    >
      <Row fillWidth paddingX="l" paddingY="12" vertical="center" horizontal="between" gap="16">
        <Row flex={1} vertical="center">
          <SmartLink href="/" onClick={() => setOpen(false)} unstyled>
            <Row gap="12" vertical="center">
              <Avatar src={person.avatar} size="m" />
              <Text variant="label-strong-m" onBackground="neutral-strong">
                {person.name}
              </Text>
            </Row>
          </SmartLink>
        </Row>

        <Row gap="4" vertical="center" horizontal="center" s={{ hide: true }}>
          {links.map((link) => (
            <ToggleButton key={link.href} href={link.href} label={link.label} selected={link.active} />
          ))}
        </Row>

        <Row flex={1} gap="4" vertical="center" horizontal="end" s={{ hide: true }}>
          <LanguageToggle locale={locale} />
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="m"
                  variant="ghost"
                />
              ),
          )}
          {display.themeSwitcher && <ThemeToggle />}
        </Row>

        <Row hide s={{ hide: false }} gap="4" vertical="center">
          <LanguageToggle locale={locale} />
          <IconButton
            icon={open ? "close" : "menu"}
            variant="ghost"
            size="l"
            aria-label="Menu"
            onClick={() => setOpen((value) => !value)}
          />
        </Row>
      </Row>

      {open && (
        <Column hide s={{ hide: false }} fillWidth paddingX="l" paddingBottom="16" gap="4">
          {links.map((link) => (
            <ToggleButton
              key={link.href}
              href={link.href}
              label={link.label}
              selected={link.active}
              fillWidth
              onClick={() => setOpen(false)}
            />
          ))}
          <Row gap="8" paddingTop="8" vertical="center">
            {social.map(
              (item) =>
                item.link && (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    tooltip={item.name}
                    size="m"
                    variant="ghost"
                  />
                ),
            )}
            {display.themeSwitcher && <ThemeToggle />}
          </Row>
        </Column>
      )}
    </Column>
  );
};
