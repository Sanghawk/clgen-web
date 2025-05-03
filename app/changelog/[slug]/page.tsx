import { promises as fs } from "fs";
import path from "path";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Changelog } = await import(`@/changelogs/${slug}.mdx`);

  return <Changelog />;
}

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), "changelogs"));
  return files.map((f) => ({ slug: f.replace(/\.(md|mdx)$/, "") }));
}

export const dynamicParams = false;
