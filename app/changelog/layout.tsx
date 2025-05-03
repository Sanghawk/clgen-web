export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <main>
      <div className="md:hidden">Not yet implemented - mobile sidenav</div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-0">
        <div className="sticky top-[96px] hidden h-[calc(100vh-96px)] w-[284px] md:flex md:shrink-0 md:flex-col md:justify-between">
          <div>Not yet implemented - search changelog</div>
          <div className="overflow-hidden relative">
            <div className="flex h-[calc(100vh-260px)] flex-col overflow-y-scroll pb-4 pr-2 dark:text-white">
              Not yet implemented - sidenav
            </div>
          </div>
        </div>
        <div className="min-h-[calc(100vh-96px)]">
          <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
            {children}
          </div>
        </div>

        <div className="order-last hidden w-56 shrink-0 lg:block">
          <div className="sticky top-[96px] h-[calc(100vh-96px)]">
            Not yet implemented - source map / scroll to section
          </div>
        </div>
      </div>
    </main>
  );
}
