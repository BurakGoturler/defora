import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { dictionaries, LANGS, type Lang } from "@/lib/dictionaries";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = dictionaries[lang as Lang] ?? dictionaries.tr;
  return {
    title: `${dict.privacyPolicy.title} · Defora`,
    description: dict.privacyPolicy.intro.slice(0, 160),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = (LANGS.includes(raw as Lang) ? raw : "tr") as Lang;
  const dict = dictionaries[lang];
  const p = dict.privacyPolicy;

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-soft hover:text-primary transition mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            {p.backToHome}
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            {p.title}
          </h1>
          <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-text-hint">
            {p.updated}
          </div>

          <p className="mt-8 text-lg text-text-soft leading-relaxed">
            {p.intro}
          </p>

          <div className="mt-12 space-y-10">
            {p.sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-xl md:text-2xl font-extrabold text-primary mb-3 leading-tight">
                  {s.title}
                </h2>
                <p className="text-base text-text leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
