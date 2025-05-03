import fs from "fs";
import path from "path";
import SideNav from "@/app/ui/SideNav";
export default async function MdxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create any shared layout or styles here
  const changelogDir = path.join(process.cwd(), "changelogs");
  const files = fs
    .readdirSync(changelogDir)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
  return (
    <main>
      <div className="md:hidden">Not yet implemented - mobile sidenav</div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-0">
        <div className="sticky top-[96px] hidden h-[calc(100vh-96px)] w-[284px] md:flex md:shrink-0 md:flex-col md:justify-between">
          <div className="overflow-hidden relative">
            <SideNav slugs={files} />
          </div>
          <div></div>
        </div>
        <div className="min-h-[calc(100vh-96px)] mt-8">
          <div className="prose dark:prose-invert">{children}</div>
        </div>

        <div className="order-last hidden w-56 shrink-0 lg:block">
          <div className="sticky top-[96px] h-[calc(100vh-96px)]"></div>
        </div>
      </div>
    </main>
  );
}
