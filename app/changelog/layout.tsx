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
        <div className="min-h-[calc(100vh-96px)] mt-8">
          <div className="prose dark:prose-invert">{children}</div>
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
