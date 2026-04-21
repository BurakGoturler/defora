# Defora — Resmi Tanıtım Sitesi

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

**Defora** mobil uygulamasının (Flutter + Firebase) resmi tanıtım sitesi.
Tamamen statik, SEO dostu ve **TR / EN** destekli.

🌐 **Canlı**: [defora.tr](https://defora.tr)

---

## ✨ Özellikler

- 🇹🇷 🇬🇧 **Çift dilli** — TR öncelikli, EN toggle
- 📱 **HTML/CSS ile yeniden yaratılmış telefon mockup'ları** (uygulama güncellendiğinde screenshot yenilemeye gerek yok)
- 🎨 Uygulama ile **birebir aynı renk paleti** (`#1A2B4A` primary, `#2ECC8B` accent)
- 🌓 **İnteraktif light/dark tema demo** (tıkla, dashboard anında değişsin)
- 🎠 60 cartoon + 60 meslek **avatar showcase** (sonsuz scroll marquee)
- 📊 **Scroll-reveal animasyonları** (Framer Motion)
- 🔒 Tam **KVKK / GDPR uyumlu gizlilik politikası** sayfası
- ⚡ **Statik export** — herhangi bir CDN'de saniyede yüklenir

---

## 🛠️ Tech Stack

| Katman | Araç |
|---|---|
| Framework | **Next.js 16** (App Router, `output: "export"`) |
| Dil | **TypeScript 5** |
| Styling | **Tailwind CSS v4** |
| Animasyon | **Framer Motion 12** |
| Ikonlar | **Lucide React** |
| Font | **Plus Jakarta Sans** (Google Fonts) |
| Deploy | Vercel / Netlify / Cloudflare Pages / GitHub Pages |

---

## 🚀 Yerel geliştirme

```bash
# Bağımlılıkları yükle
npm install

# Dev server'ı başlat
npm run dev
# → http://localhost:3000
```

`/tr/` ve `/en/` yolları otomatik olarak statik pre-render edilir. İçerik
düzenleme için tek dosya: [`lib/dictionaries.ts`](./lib/dictionaries.ts).

---

## 📦 Build & deploy

```bash
npm run build
```

Üretilen `out/` klasörü tamamen statik HTML/CSS/JS/SVG içerir.

### Vercel (önerilen)
GitHub'a push'la → [vercel.com](https://vercel.com) üzerinden repo'yu bağla →
Next.js otomatik algılanır, sıfır config ile deploy.

### Cloudflare Pages / Netlify
Aynı süreç, GitHub bağlantısı → auto-deploy.

### Shared hosting (cPanel / FTP)
`out/` klasörünün **içeriğini** hosting'inin `public_html/` klasörüne yükle.

### GitHub Pages
`.github/workflows/deploy.yml` workflow'u repo'da kurulu. `main` branch'ine
push'ladığın an otomatik build + deploy — canlı URL:
`https://<kullanıcı>.github.io/defora/`

---

## 📁 Proje yapısı

```
defora-web/
├── app/
│   ├── [lang]/
│   │   ├── page.tsx               # Ana sayfa (TR + EN pre-rendered)
│   │   └── privacy/page.tsx       # Gizlilik politikası
│   ├── layout.tsx                 # Root layout + font + metadata
│   ├── page.tsx                   # Kök → /tr'ye redirect
│   ├── icon.png                   # Favicon (logo.png'den)
│   ├── apple-icon.png             # iOS home screen ikonu
│   └── globals.css                # Tailwind + tema değişkenleri
├── components/
│   ├── Navbar.tsx                 # Dil değiştirici + CTA
│   ├── Footer.tsx                 # Gizlilik link'i + sosyal
│   ├── sections/                  # Hero, Pitch, CustomerSection, vb.
│   └── mock/                      # PhoneMockup, DashboardScreen, vb.
├── lib/
│   ├── dictionaries.ts            # TR + EN içerik (tek kaynak)
│   └── profession-avatars.ts      # 60 meslek avatarı (Lucide ikonlar)
├── public/
│   ├── brand/                     # logo.gif, logo.png
│   └── avatars/cartoon/           # 60 cartoon SVG
├── next.config.ts                 # Static export + trailingSlash
└── package.json
```

---

## 🎨 İçerik düzenleme

Tüm site metinleri tek bir dosyada: [`lib/dictionaries.ts`](./lib/dictionaries.ts).

```ts
export const dictionaries = {
  tr: {
    hero: { title: "...", subtitle: "..." },
    customers: { title: "...", bullets: [...] },
    // ...
  },
  en: { /* aynı yapı */ }
};
```

Bir alan değiştir → hot reload ile anında gör.

Yeni dil eklemek istersen: `dictionaries` nesnesine yeni anahtar ekle + `LANGS`
dizisine dil kodunu ekle. Geri kalan her şey otomatik route olur.

---

## 📐 Mockup'lar nasıl çalışır?

Telefon mockup'ları **gerçek uygulama ekran görüntüleri değil** — Tailwind +
JSX ile yeniden yaratılmış interaktif replica'lar:

- [`components/mock/PhoneMockup.tsx`](./components/mock/PhoneMockup.tsx) — iPhone çerçevesi
- [`components/mock/DashboardScreen.tsx`](./components/mock/DashboardScreen.tsx) — Ana sayfa mock'u (animasyonlu grafik dahil)
- [`components/mock/CustomerListScreen.tsx`](./components/mock/CustomerListScreen.tsx) — Müşteri listesi (alfabe şeridi)
- [`components/mock/JobsScreen.tsx`](./components/mock/JobsScreen.tsx) — Pipeline
- [`components/mock/ProfileScreen.tsx`](./components/mock/ProfileScreen.tsx) — Profil

Uygulama UI'ı değişince burada da güncelle — screenshot yenilemek gerekmez,
retina'da her zaman keskin görünür, tema/dil anında geçiş yapar.

---

## 🔒 Gizlilik politikası

KVKK + GDPR uyumlu tam metin [`lib/dictionaries.ts`](./lib/dictionaries.ts) →
`privacyPolicy` anahtarı altında. Düzenlemek için oradan değiştir, statik HTML
otomatik üretilir.

---

## 🤝 Katkıda bulunma

İyileştirme önerileri, hata bildirimleri ve pull request'ler her zaman açık.
Büyük bir değişiklik planlıyorsan önce bir issue açıp tartışalım.

---

## 📄 Lisans

[MIT](./LICENSE) © 2026 Burak Aksu / Defora

Marka kimliği (Defora adı, logosu, `logo.gif`, `logo.png`) MIT kapsamında
değildir — ticari kullanım için yazılı izin gerekir.
