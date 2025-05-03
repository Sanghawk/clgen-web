"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function SideNav({ slugs }: { slugs: string[] }) {
  const pathname = usePathname(); // Get current route

  return (
    <nav className="flex h-[calc(100vh-260px)] flex-col overflow-y-scroll pb-4 pr-2 dark:text-base-50">
      <ul>
        <li className="my-1.5 ml-[3px]">
          <Link
            href="/changelog"
            className="relative flex w-full items-center justify-between rounded-md py-1 pl-2 text-left text-sm text-base-950 dark:text-base-50 font-medium"
          >
            Changelogs
          </Link>
        </li>
        <ul className="px-0.5 last-of-type:mb-0 mb-8">
          {slugs.map((slug) => (
            <li className="my-1.5" key={slug}>
              <Link
                className={`relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm
                 
                    ${
                      pathname === `/changelog/${slug}`
                        ? "text-indigo-500 dark:text-indigo-500"
                        : "text-base-500 hover:text-base-950 dark:hover:text-base-200"
                    }
                    `}
                href={`/changelog/${slug}`}
                aria-current={
                  pathname === `/changelog/${slug}` ? "page" : undefined
                }
              >
                {slug}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
