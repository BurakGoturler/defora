"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { type Dict, type Lang } from "@/lib/dictionaries";
import { asset } from "@/lib/base-path";

export function Navbar({ dict, lang }: { dict: Dict["nav"]; lang: Lang }) {
  const pathname = usePathname();
  const otherLang = lang === "tr" ? "en" : "tr";
  const switchHref = pathname.replace(`/${lang}`, `/${otherLang}`);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 border-b border-border/60">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <Link href={`/${lang}`} className="flex items-center gap-2 group">
          <Image
            src={asset("/brand/logo.gif")}
            alt="Defora"
            width={36}
            height={36}
            unoptimized
            className="rounded-xl shadow-sm transition-transform group-hover:scale-105"
          />
          <span className="text-lg font-extrabold text-primary tracking-tight">
            Defora
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-text-soft">
          <a href="#pitch" className="hover:text-primary transition">
            {dict.features}
          </a>
          <a href="#screens" className="hover:text-primary transition">
            {dict.showcase}
          </a>
          <a href="#avatars" className="hover:text-primary transition">
            {dict.avatars}
          </a>
          <a href="#theme" className="hover:text-primary transition">
            {dict.themes}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={switchHref}
            className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-md text-text-soft hover:text-primary hover:bg-surface-alt transition"
            aria-label={`Switch to ${otherLang.toUpperCase()}`}
          >
            {otherLang === "en" ? "EN" : "TR"}
          </Link>
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-primary-light transition shadow-sm"
          >
            {dict.download}
          </a>
        </div>
      </nav>
    </header>
  );
}
