import type { NextConfig } from "next";

// GitHub Pages kullanırken repo adı subpath olarak gerekir (örn.
// `kullaniciadin.github.io/defora-web/`). Workflow çalışırken
// NEXT_PUBLIC_BASE_PATH env var set edilir; local `npm run dev`'de boş
// kalır. İleride custom domain (ör. defora.tr) bağlanınca env var'ı
// workflow'tan kaldırmak yeterli.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Statik export — Vercel / Netlify / GitHub Pages / Cloudflare'ye uyumlu.
  output: "export",
  images: {
    // Statik export'ta Next.js image optimizer devre dışı — unoptimized şart.
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
