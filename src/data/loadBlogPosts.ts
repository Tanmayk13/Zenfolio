import { type BlogPost } from "./blogPosts";

/**
 * Parse YAML-like frontmatter from markdown string.
 * Expects --- delimiters with key: value pairs.
 */
function parseFrontmatter(raw: string): { frontmatter: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, content: raw };

  const frontmatter: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim();
    frontmatter[key] = val;
  }
  return { frontmatter, content: match[2] };
}

function parseTags(raw: string): string[] {
  // handles [Tag1, Tag2, Tag3] format
  const inner = raw.replace(/^\[|\]$/g, "");
  return inner.split(",").map((t) => t.trim()).filter(Boolean);
}

/**
 * Load all .md files from src/content/blog/ at build time.
 * To add a new blog post, just drop a .md file in that folder with frontmatter.
 */
const mdFiles = import.meta.glob("/src/content/blog/*.md", { eager: true, query: "?raw", import: "default" }) as Record<string, string>;

export function loadBlogPosts(): BlogPost[] {
  return Object.entries(mdFiles)
    .map(([path, raw]) => {
      const slug = path.split("/").pop()!.replace(/\.md$/, "");
      const { frontmatter, content } = parseFrontmatter(raw);
      return {
        slug,
        title: frontmatter.title || slug,
        excerpt: frontmatter.excerpt || "",
        date: frontmatter.date || "",
        readTime: frontmatter.readTime || "",
        tags: parseTags(frontmatter.tags || ""),
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
