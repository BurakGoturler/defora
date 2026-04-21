import type { Metadata } from "next";
import { dictionaries, LANGS, type Lang } from "@/lib/dictionaries";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Pitch } from "@/components/sections/Pitch";
import { CustomerSection } from "@/components/sections/CustomerSection";
import { JobsSection } from "@/components/sections/JobsSection";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ThemeSection } from "@/components/sections/ThemeSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { CTASection } from "@/components/sections/CTASection";
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
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = (LANGS.includes(raw as Lang) ? raw : "tr") as Lang;
  const dict = dictionaries[lang];

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      <main className="flex-1">
        <Hero dict={dict.hero} />
        <Pitch dict={dict.pitch} />
        <CustomerSection dict={dict.customers} />
        <JobsSection dict={dict.jobs} />
        <DashboardSection dict={dict.dashboard} />
        <ProfileSection dict={dict.profile} />
        <ThemeSection dict={dict.theme} />
        <AchievementsSection dict={dict.achievements} />
        <PrivacySection dict={dict.privacy} />
        <CTASection dict={dict.cta} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
