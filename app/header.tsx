"use client";

import { Logo } from "./logo";
import Link from "next/link";
import { Mail } from "lucide-react";
import { usePathname } from "next/navigation";


export function Header() {
  const pathname = usePathname();

  const isChinese = pathname.startsWith("/zh");

  const languagePath = isChinese
    ? pathname.replace(/^\/zh/, "") || "/"
    : `/zh${pathname}`;


  return (
    <header
      className="
        sticky
        top-0
        z-50
        flex
        items-center
        py-4
        -mx-6
        px-6
        bg-[#fcfcfc]/80
        dark:bg-[#1C1C1C]/80
        backdrop-blur
      "
    >
      <Logo />


      <nav className="text-xs grow justify-end items-center flex">


        <Link
          href={languagePath}
          scroll={false}
          className="group p-2"
        >
          <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex">
            {isChinese ? "EN" : "中"}
          </span>
        </Link>


        <Link
          href={isChinese ? "/zh/about" : "/about"}
          className="group p-2"
        >
          <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex">
            {isChinese ? "关于" : "About"}
          </span>
        </Link>


        <a
          href="mailto:admin@ohhoba.com"
          target="_blank"
          className="
            group
            inline-flex
            items-center
            p-2
            rounded-sm
            transition-[background-color]
            whitespace-nowrap
            -mr-2
          "
        >
          <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex items-center gap-1">

            <EmailIcon style={{ marginRight: 4 }} />

            <span>
              {isChinese ? "联系我" : "Contact me"}
            </span>

          </span>
        </a>


      </nav>
    </header>
  );
}


function EmailIcon(props: any) {
  return (
    <Mail
      size={12}
      strokeWidth={2}
      {...props}
    />
  );
}
