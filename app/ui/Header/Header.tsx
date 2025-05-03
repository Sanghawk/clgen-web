import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 h-[63px] border-b-[1px] border-base-200 dark:border-base-900 bg-base-50 dark:bg-base-950 z-50">
      <Link href="/">Greptile CC</Link>
    </header>
  );
}
