import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 h-16 bg-base-50 dark:bg-base-950">
      <Link href="/">Greptile CC</Link>
    </header>
  );
}
