import { cookies } from "next/headers";

import * as es from "./content.es";
import * as en from "./content.en";

import { defaultLocale, LOCALE_COOKIE, type Locale } from "./locale";

export { defaultLocale, LOCALE_COOKIE, locales, type Locale } from "./locale";

const ui = {
  es: {
    readCaseStudy: "Ver detalle del proyecto",
    viewProject: "Ver proyecto",
    projects: "Proyectos",
    relatedProjects: "Otros proyectos",
    openToWork: "Abierto a nuevas oportunidades",
    latestPosts: "Últimas publicaciones",
    madeWith: "Hecho con",
    notFoundTitle: "Página no encontrada",
    notFoundText: "La página que buscás no existe.",
    dateLocale: "es-AR",
    language: "Idioma",
    cv: "CV",
  },
  en: {
    readCaseStudy: "View project details",
    viewProject: "View project",
    projects: "Projects",
    relatedProjects: "Other projects",
    openToWork: "Open to new opportunities",
    latestPosts: "Latest posts",
    madeWith: "Built with",
    notFoundTitle: "Page not found",
    notFoundText: "The page you are looking for does not exist.",
    dateLocale: "en-US",
    language: "Language",
    cv: "Résumé",
  },
} as const;

export type UiStrings = (typeof ui)[Locale];

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  return value === "en" || value === "es" ? value : defaultLocale;
}

export async function getContent() {
  const locale = await getLocale();
  const content = locale === "en" ? en : es;
  return { locale, t: ui[locale] as UiStrings, ...content };
}
