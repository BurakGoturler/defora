"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Dict } from "@/lib/dictionaries";
import { asset } from "@/lib/base-path";

export function Footer({ dict }: { dict: Dict["footer"] }) {
  // Pathname'den mevcut lang'i çıkar — hem /tr hem /en doğru privacy'ye
  // link'lesin diye.
  const pathname = usePathname() ?? "/tr";
  const segments = pathname.split("/").filter(Boolean);
  const lang = segments[0] === "en" ? "en" : "tr";

  return (
    <footer className="mt-12 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex items-start gap-3">
            <Image
              src={asset("/brand/logo.gif")}
              alt="Defora"
              width={48}
              height={48}
              unoptimized
              className="rounded-xl shadow-sm"
            />
            <div>
              <div className="text-xl font-extrabold text-primary tracking-tight">
                Defora
              </div>
              <div className="text-sm text-text-soft mt-1 max-w-xs">
                {dict.tagline}
              </div>
              <div className="text-xs text-text-hint mt-3">
                {dict.builtWith}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold text-text-soft">
            <Link
              href={`/${lang}/privacy`}
              className="hover:text-primary transition"
            >
              {dict.links.privacy}
            </Link>
            <a
              href="mailto:privacy@defora.app"
              className="hover:text-primary transition"
            >
              {dict.links.contact}
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-xs text-text-hint">
          {dict.copyright}
        </div>
      </div>
    </footer>
  );
}
