"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
  const pathname = usePathname();

  const isChinese = pathname.startsWith("/zh");

  const homePath = isChinese ? "/zh" : "/";

  const isHome =
    pathname === "/" || pathname === "/zh";

  const logoClass =
    "hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-2xl -ml-2 transition-[background-color]";

  function refreshHome() {
    window.location.reload();
  }

  return (
    <span className="text-md md:text-lg whitespace-nowrap font-bold">
      {isHome ? (
        <button
          onClick={refreshHome}
          className={logoClass}
        >
          OhHoBa
        </button>
      ) : (
        <Link
          href={homePath}
          className={logoClass}
        >
          OhHoBa
        </Link>
      )}
    </span>
  );
}
