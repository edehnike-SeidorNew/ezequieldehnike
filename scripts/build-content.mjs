// Bundles the .mdx content (projects and blog posts) into src/generated/content.json.
// On Netlify the pages run as serverless functions that do not ship the source .mdx files,
// so in production the content is read from this JSON instead of from disk.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "src", "app");
const sources = [
  "work/projects/es",
  "work/projects/en",
  "blog/posts",
];

const content = {};
for (const rel of sources) {
  const dir = path.join(appDir, ...rel.split("/"));
  content[rel] = fs.existsSync(dir)
    ? fs
        .readdirSync(dir)
        .filter((file) => file.endsWith(".mdx"))
        .sort()
        .map((file) => ({ file, raw: fs.readFileSync(path.join(dir, file), "utf-8") }))
    : [];
}

fs.mkdirSync(path.join(root, "src", "generated"), { recursive: true });
fs.writeFileSync(path.join(root, "src", "generated", "content.json"), JSON.stringify(content));
const total = Object.values(content).reduce((n, list) => n + list.length, 0);
console.log(`build-content: ${total} files bundled`);
