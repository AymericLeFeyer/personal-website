import rehypeAutolinkHeading from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { PluggableList } from "unified";

export const rehypePlugins = [
  rehypeSlug,
  rehypeAutolinkHeading,
] satisfies PluggableList;

export const remarkPlugins = [remarkGfm] satisfies PluggableList;
