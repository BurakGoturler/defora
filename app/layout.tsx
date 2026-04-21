import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Defora | İşini takip et, işin büyüsün.",
  description:
    "Freelancer ve küçük işletmeler için müşteri & iş takip uygulaması.",
  openGraph: {
    title: "Defora",
    description:
      "İşini takip et, işin büyüsün. Freelancer ve küçük işletmeler için müşteri & iş takip uygulaması.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text font-[family-name:var(--font-display)]">
        {children}
      </body>
    </html>
  );
}
