import fs from "fs";
import path from "path";
import matter from "gray-matter";
import bundledContent from "@/generated/content.json";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  tech: string[];
  team: Team[];
  link?: string;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  // A missing folder (e.g. an empty blog, which git does not track) just means "no entries".
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function parseMDX(rawContent: string) {
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || "",
    tech: data.tech || [],
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  return parseMDX(fs.readFileSync(filePath, "utf-8"));
}

function getMDXData(dir: string) {
  // In production (Netlify) the source .mdx files are not shipped with the serverless functions,
  // so the content bundled by scripts/build-content.mjs is used instead.
  if (process.env.NODE_ENV === "production") {
    const key = path
      .relative(path.join(process.cwd(), "src", "app"), dir)
      .split(path.sep)
      .join("/");
    const bundled = (bundledContent as Record<string, { file: string; raw: string }[]>)[key];
    if (bundled) {
      return bundled.map(({ file, raw }) => ({
        ...parseMDX(raw),
        slug: path.basename(file, path.extname(file)),
      }));
    }
  }

  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
