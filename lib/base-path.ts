/**
 * GitHub Pages gibi subpath altında servis edilen statik export'larda
 * `next/image` + `unoptimized: true` kombinasyonu basePath'i otomatik
 * öne eklemediği için her image src'sine manuel olarak prepend etmeliyiz.
 *
 * Workflow'da `NEXT_PUBLIC_BASE_PATH` ayarlanır. Local dev'de boş kalır;
 * Vercel / custom domain'de de boş bırakılır.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** `/brand/logo.gif` → `/defora/brand/logo.gif` (env'e göre) */
export const asset = (path: string): string => `${BASE_PATH}${path}`;
