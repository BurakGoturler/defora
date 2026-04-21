/**
 * Site içeriği — TR + EN sözlükleri. Statik export için build-time çözülür;
 * runtime locale değişimi sadece URL yönlendirmesi ile yapılır (/ vs /en).
 *
 * Yapı bölüm bazlı: her section kendi slice'ını alır.
 */

export const dictionaries = {
  tr: {
    meta: {
      title: "Defora | İşini takip et, işin büyüsün.",
      description:
        "Freelancer ve küçük işletmeler için müşteri & iş takip uygulaması. Pipeline, kazanç grafiği, hedefler ve başarılar tek bir sade arayüzde.",
    },
    nav: {
      features: "Özellikler",
      showcase: "Ekranlar",
      avatars: "Avatarlar",
      themes: "Tema",
      download: "İndir",
    },
    hero: {
      tag: "Freelancer'lar ve esnaflar için",
      title: "İşini takip et, işin büyüsün.",
      subtitle:
        "Müşterilerini kaydet, işlerini pipeline'da izle, kazancını grafikle gör. Defora tüm iş akışını bir ekranda toplar. Sade, hızlı, sana özel.",
      ctaPrimary: "Google Play'de (yakında)",
      ctaSecondary: "Özellikleri gör",
      comingSoon: "Yakında Google Play'de",
    },
    pitch: {
      title: "Tüm iş akışın cebinde.",
      lede: "Müşterilerini tek tek ekle, işini aşama aşama işaretle, ödemeleri takip et. Her ay ne kazandığını grafikte gör.",
      features: [
        {
          title: "Müşteri yönetimi",
          body: "Alfabetik indeks, etiketler, WhatsApp + telefon + e-posta tek tıkla.",
        },
        {
          title: "İş pipeline",
          body: "Görüşüldü → Onaylandı → Yapılıyor → Teslim → Ödendi.",
        },
        {
          title: "Kazanç grafiği",
          body: "Haftalık, aylık, 6 aylık veya 1 yıllık — istediğin dönem.",
        },
        {
          title: "Hedef & başarı",
          body: "Haftalık ve aylık hedef koy; 9 başarı rozetiyle motive ol.",
        },
      ],
    },
    customers: {
      title: "Müşterilerini akıllıca yönet.",
      body: "Etiketler (VIP, Toptan, Abonelik, Düzenli, Tek Seferlik), alfabetik indeks, hızlı swipe düzenle/sil ve her müşteriye bir dokunuşla WhatsApp / telefon / e-posta — dağılma.",
      bullets: [
        "Yandaki A-Z şeridiyle kişisine anında git",
        "Sağa kaydır → düzenle, sola kaydır → sil",
        "Her müşterinin bağlı işleri, kazanç ve son etkileşimi detay ekranında",
      ],
    },
    jobs: {
      title: "İşini pipeline'da takip et.",
      body: "Her işi bir müşteriye bağla, başlangıç + tahmini teslim tarihi gir, hangi hizmetleri kapsadığını profilinden çoklu seç. Görüşüldü'den Ödendi'ye kadar 5 aşama tek dokunuşla değişsin.",
      bullets: [
        "5 aşamalı durum akışı — Görüşüldü → Ödendi",
        "Profilindeki hizmetlerden çoklu seçim (örn. Logo + Web)",
        "Swipe ile hızlı düzenle ya da sil",
      ],
    },
    dashboard: {
      title: "Her şey ana sayfada, bir bakışta.",
      body: "Bu ay kazancın, bekleyen ödemelerin, aktif işlerin, yaklaşan teslimlerin | hepsi ilk ekranda. Kazanç grafiğini Haftalık / 1A / 3A / 6A / 1Y arasında değiştir, bu ayı geçen ay ile karşılaştır.",
      bullets: [
        "5 dönem filtresiyle kazanç grafiği",
        "Bu ay vs geçen ay yüzde rozeti",
        "Yaklaşan teslim tarihleri otomatik öne çıkar",
      ],
    },
    profile: {
      title: "Profiline kişilik kat.",
      body: "60 meslek ikonu veya 60 cartoon karakteri — kadın, erkek, farklı saç, farklı ten tonu, neşeli yüzler. İstersen gözlüklü, istersen sakallı. Sektörünü ve sunduğun hizmetleri profiline kaydet; iş eklerken oradan seç.",
      tabs: {
        profession: "Mesleki",
        cartoon: "Kişisel",
      },
    },
    theme: {
      title: "Aydınlık veya karanlık — istediğin gibi.",
      body: "Sistem temasıyla otomatik eşleş ya da elle seç. Her iki temada da aynı özen | renkler okunur, kontrast net.",
      light: "Aydınlık",
      dark: "Karanlık",
    },
    achievements: {
      title: "Her kilometre taşında bir rozet.",
      body: "İlk müşteri, ilk ödeme, ilk 10.000 TL, 100 iş — Defora büyümeni küçük kutlamalarla izler.",
      items: [
        { emoji: "🎉", title: "İlk Müşteri" },
        { emoji: "✨", title: "İlk İş" },
        { emoji: "💸", title: "İlk Kazanç" },
        { emoji: "👥", title: "5 Müşteri" },
        { emoji: "📋", title: "10 İş" },
        { emoji: "💰", title: "₺1.000" },
        { emoji: "🧑‍🤝‍🧑", title: "10 Müşteri" },
        { emoji: "💯", title: "100 İş" },
        { emoji: "🏆", title: "₺10.000" },
      ],
    },
    privacy: {
      title: "Verin sende, sadece sende.",
      body: "Firebase güvenli kimlik doğrulama. Müşteri, iş ve kazanç verilerin yalnızca senin hesabında; CSV ile istediğin zaman dışa aktar.",
      bullets: [
        "Firebase Auth + Cloud Firestore",
        "CSV export — verilerin her zaman senin",
        "Bildirim tercihleri, para birimi ve dil senin elinde",
      ],
    },
    cta: {
      title: "Defora yakında cebinde.",
      body: "Launch öncesi bekleme listesine katıl ya da ana sayfaya dön.",
      primary: "Google Play'de (yakında)",
      secondary: "Sayfanın başına dön",
    },
    footer: {
      tagline: "Her işin bir yeri var.",
      builtWith: "Flutter + Firebase ile yapıldı",
      copyright: "© 2026 Defora. Tüm hakları saklıdır.",
      links: {
        privacy: "Gizlilik Politikası",
        contact: "İletişim",
      },
    },
    privacyPolicy: {
      title: "Gizlilik Politikası",
      updated: "Son güncelleme: 22 Nisan 2026",
      backToHome: "Ana sayfaya dön",
      intro:
        "Defora (\"biz\", \"uygulama\"), kullanıcılarının gizliliğine değer verir. Bu belge; uygulamayı kullandığında hangi verileri topladığımızı, bu verileri nasıl kullandığımızı ve haklarının ne olduğunu şeffaf bir şekilde açıklar. Defora, freelancer ve küçük işletmeler için müşteri ve iş takip uygulamasıdır; verilerini sadece senin iş akışını yönetmen için kullanırız.",
      sections: [
        {
          title: "1. Topladığımız veriler",
          body: "Hesap oluşturduğunda e-posta adresin ve şifrenin güvenli bir hash'i Firebase Authentication'a kaydedilir. Uygulama içinde eklediğin müşteriler (ad, telefon, e-posta, notlar, etiketler, sosyal medya linkleri, partner bilgileri), işler (başlık, müşteri bağlantısı, tutar, açıklama, tarih bilgileri, durum, hizmet listesi), profil bilgilerin (ad, ünvan, sektör, hizmetler, avatar seçimin, şehir/ilçe/adres, hedefler, para birimi, bildirim tercihleri) ve başarı ilerlemen Cloud Firestore veritabanında senin hesabına bağlı olarak saklanır. Uygulamayı her açtığında etkileşim tarihi de güncellenir.",
        },
        {
          title: "2. Verileri nasıl kullanıyoruz?",
          body: "Topladığımız veriler yalnızca uygulama özelliklerini çalıştırmak için kullanılır: müşterilerini listelemek, işlerini pipeline'da göstermek, kazanç grafiği üretmek, hatırlatıcı bildirimleri göndermek ve profilini kişiselleştirmek. Verilerini satmayız, üçüncü taraflarla paylaşmayız, pazarlama amacıyla kullanmayız.",
        },
        {
          title: "3. Veri barındırma ve güvenlik",
          body: "Tüm veriler Google Cloud altyapısı üzerinde çalışan Firebase servislerinde (Firebase Authentication + Cloud Firestore) saklanır. İletişim HTTPS ile şifrelenir. Firestore güvenlik kuralları sayesinde bir kullanıcı yalnızca kendi hesabındaki verilere erişebilir.",
        },
        {
          title: "4. Üçüncü taraf servisler",
          body: "Defora, uygulamayı çalıştırmak için şu servisleri kullanır: Firebase Authentication (Google) – hesap girişi; Cloud Firestore (Google) – veritabanı; Firebase Cloud Messaging (Google) – bildirimler (opsiyonel). Üçüncü taraf reklam, analytics veya crash reporting servisi kullanılmaz. Google'ın kendi gizlilik politikası için: policies.google.com/privacy.",
        },
        {
          title: "5. Bildirimler",
          body: "Bekleyen iş hatırlatıcısı ve haftalık özet bildirimleri opsiyoneldir. Ayarlar sekmesinden her ikisini de istediğin zaman kapatabilirsin. Bildirimler cihazında lokal olarak planlanır; sunucudan push gönderilmez.",
        },
        {
          title: "6. Veri dışa aktarma ve silme",
          body: "Uygulama içinde Ayarlar → Veri Yönetimi → Verileri Dışa Aktar ile müşteri ve iş verilerini tek seferde CSV olarak alabilirsin. Hesap silme isteğinde bulunduğunda (Ayarlar → Hesabı Sil) tüm profil, müşteri, iş verin ve Firebase Authentication kaydın kalıcı olarak silinir; bu işlem geri alınamaz.",
        },
        {
          title: "7. Yasal haklarınız (KVKK / GDPR)",
          body: "KVKK (6698 sayılı Kişisel Verilerin Korunması Kanunu) ve ilgili uluslararası düzenlemeler çerçevesinde; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işleme amacını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme ve işlenen verilerinin aktarıldığı üçüncü kişileri bilme haklarına sahipsin. Bu hakları kullanmak için aşağıdaki iletişim kanallarından bize ulaşabilirsin.",
        },
        {
          title: "8. Çerezler ve bu web sitesi",
          body: "Bu tanıtım sitesi (defora-web) hiçbir çerez kullanmaz, hiçbir analitik servise bağlı değildir. Sitede gezinirken hiçbir kişisel verin toplanmaz.",
        },
        {
          title: "9. Çocuklar",
          body: "Defora 13 yaşın altındaki kullanıcılara yönelik olarak tasarlanmamıştır. 13 yaşın altında olduğunu düşündüğümüz bir hesap tespit edersek ilgili veriyi sileriz.",
        },
        {
          title: "10. Değişiklikler",
          body: "Bu politikada önemli bir değişiklik olduğunda uygulama içinde ve bu sayfada bildirim yaparız. Son güncelleme tarihi her zaman sayfanın üstünde görünür.",
        },
        {
          title: "11. İletişim",
          body: "Gizlilik ile ilgili her türlü soru, talep veya KVKK başvurusu için: privacy@defora.app (yayına alındığında aktif olacaktır).",
        },
      ],
    },
  },
  en: {
    meta: {
      title: "Defora — Track your work, grow your business.",
      description:
        "Customer & job tracker for freelancers and small businesses. Pipeline, earnings chart, goals and achievements in one simple app.",
    },
    nav: {
      features: "Features",
      showcase: "Screens",
      avatars: "Avatars",
      themes: "Theme",
      download: "Download",
    },
    hero: {
      tag: "Built for freelancers & small shops",
      title: "Track your work, grow your business.",
      subtitle:
        "Save customers, track jobs on a pipeline, visualize your earnings. Defora puts your whole workflow on one screen. - Clean, fast, yours.",
      ctaPrimary: "Google Play (coming soon)",
      ctaSecondary: "See features",
      comingSoon: "Coming soon to Google Play",
    },
    pitch: {
      title: "Your whole workflow in your pocket.",
      lede: "Save customers one by one, mark jobs stage by stage, track payments. See what you earned every month on a chart.",
      features: [
        {
          title: "Customer management",
          body: "Alphabet index, tags, WhatsApp + call + email in one tap.",
        },
        {
          title: "Job pipeline",
          body: "Discussed → Approved → In Progress → Delivered → Paid.",
        },
        {
          title: "Earnings chart",
          body: "Weekly, monthly, 6-month or 1-year — whatever you need.",
        },
        {
          title: "Goals & badges",
          body: "Set weekly & monthly goals, unlock 9 achievement badges.",
        },
      ],
    },
    customers: {
      title: "Manage customers smartly.",
      body: "Tags (VIP, Wholesale, Subscription, Regular, One-off), alphabet index, fast swipe-to-edit/delete and one-tap WhatsApp / call / email per customer.",
      bullets: [
        "Jump to any contact via the side A-Z strip",
        "Swipe right → edit, swipe left → delete",
        "Each customer's linked jobs, earnings and last activity in the detail view",
      ],
    },
    jobs: {
      title: "Track every job on a pipeline.",
      body: "Link each job to a customer, set start + estimated end dates, and multi-select the services covered from your profile. Move from Discussed to Paid in one tap.",
      bullets: [
        "5-stage status flow — Discussed → Paid",
        "Multi-select services from your profile (e.g. Logo + Web)",
        "Swipe to quickly edit or delete",
      ],
    },
    dashboard: {
      title: "Everything at a glance on the home screen.",
      body: "This month's earnings, pending payments, active jobs, upcoming deliveries | all on the first screen. Switch the earnings chart between Weekly / 1M / 3M / 6M / 1Y and compare this month vs last.",
      bullets: [
        "5-period earnings chart filter",
        "This-vs-last-month percentage badge",
        "Upcoming delivery dates surfaced automatically",
      ],
    },
    profile: {
      title: "Give your profile personality.",
      body: "60 profession icons or 60 cartoon characters — women, men, diverse hair, diverse skin tones, happy faces. Glasses, beards, your choice. Save your sector and services; pick from them when adding jobs.",
      tabs: {
        profession: "Profession",
        cartoon: "Personal",
      },
    },
    theme: {
      title: "Light or dark — your call.",
      body: "Match your system theme automatically or pick manually. The same care in both modes | readable colors, crisp contrast.",
      light: "Light",
      dark: "Dark",
    },
    achievements: {
      title: "A badge at every milestone.",
      body: "First customer, first payment, first ₺10,000, 100 jobs | Defora celebrates every step of your growth.",
      items: [
        { emoji: "🎉", title: "First Customer" },
        { emoji: "✨", title: "First Job" },
        { emoji: "💸", title: "First Payment" },
        { emoji: "👥", title: "5 Customers" },
        { emoji: "📋", title: "10 Jobs" },
        { emoji: "💰", title: "₺1,000" },
        { emoji: "🧑‍🤝‍🧑", title: "10 Customers" },
        { emoji: "💯", title: "100 Jobs" },
        { emoji: "🏆", title: "₺10,000" },
      ],
    },
    privacy: {
      title: "Your data stays yours.",
      body: "Secure Firebase authentication. Customer, job and earning data tied to your account only; export to CSV whenever you want.",
      bullets: [
        "Firebase Auth + Cloud Firestore",
        "CSV export — your data, your rules",
        "Notification preferences, currency and language in your hands",
      ],
    },
    cta: {
      title: "Defora is coming to your pocket.",
      body: "Join the waitlist before launch or head back to the top.",
      primary: "Google Play (coming soon)",
      secondary: "Back to top",
    },
    footer: {
      tagline: "A place for every job.",
      builtWith: "Built with Flutter + Firebase",
      copyright: "© 2026 Defora. All rights reserved.",
      links: {
        privacy: "Privacy Policy",
        contact: "Contact",
      },
    },
    privacyPolicy: {
      title: "Privacy Policy",
      updated: "Last updated: April 22, 2026",
      backToHome: "Back to home",
      intro:
        "Defora (\"we\", \"the app\") respects your privacy. This document transparently explains what data we collect when you use the app, how we use it, and what your rights are. Defora is a customer and job tracking app for freelancers and small businesses; we use your data solely to help you manage your own workflow.",
      sections: [
        {
          title: "1. Data we collect",
          body: "When you create an account, your email address and a secure hash of your password are stored in Firebase Authentication. Inside the app, customers you add (name, phone, email, notes, tags, social media links, partners), jobs (title, linked customer, amount, description, dates, status, services), your profile (name, title, sector, services, avatar choice, city/district/address, goals, currency, notification preferences) and achievement progress are stored in Cloud Firestore tied to your account. Your last active date is also updated each time you open the app.",
        },
        {
          title: "2. How we use the data",
          body: "The data we collect is used only to power the app's features: listing customers, showing jobs on a pipeline, producing earnings charts, sending reminder notifications and personalizing your profile. We don't sell, share with third parties, or use your data for marketing.",
        },
        {
          title: "3. Hosting and security",
          body: "All data is stored on Firebase services (Firebase Authentication + Cloud Firestore) running on Google Cloud infrastructure. Communication is encrypted via HTTPS. Firestore security rules ensure a user can only access data in their own account.",
        },
        {
          title: "4. Third-party services",
          body: "Defora uses the following services to operate: Firebase Authentication (Google) – account sign-in; Cloud Firestore (Google) – database; Firebase Cloud Messaging (Google) – notifications (optional). No third-party ads, analytics or crash reporting is used. For Google's own privacy policy: policies.google.com/privacy.",
        },
        {
          title: "5. Notifications",
          body: "Stale-job reminders and weekly digest notifications are optional. You can turn both off at any time from Settings. Notifications are scheduled locally on your device — no push is sent from a server.",
        },
        {
          title: "6. Data export and deletion",
          body: "Inside the app at Settings → Data Management → Export Data you can export your customer and job data as CSV. When you request account deletion (Settings → Delete Account), all your profile, customer, job data and your Firebase Authentication record are permanently deleted; this action cannot be undone.",
        },
        {
          title: "7. Your legal rights (GDPR / KVKK)",
          body: "Under GDPR (EU General Data Protection Regulation), KVKK (Turkish Law No. 6698 on the Protection of Personal Data) and equivalent regulations, you have the right to know whether your personal data is being processed, request information about such processing, learn its purpose, request correction of incomplete or inaccurate data, request deletion or destruction, and know the third parties to whom your data has been transferred. To exercise these rights, contact us via the channels below.",
        },
        {
          title: "8. Cookies and this website",
          body: "This marketing site (defora-web) uses no cookies and is not connected to any analytics service. No personal data is collected while you browse.",
        },
        {
          title: "9. Children",
          body: "Defora is not intended for users under 13. If we discover an account belonging to someone we believe to be under 13, we will delete the associated data.",
        },
        {
          title: "10. Changes",
          body: "When there is a significant change to this policy, we will notify you inside the app and on this page. The last-updated date is always visible at the top.",
        },
        {
          title: "11. Contact",
          body: "For any privacy-related question, request or KVKK/GDPR application: privacy@defora.app (will be active once launched).",
        },
      ],
    },
  },
} as const;

export type Lang = keyof typeof dictionaries;
export type Dict = (typeof dictionaries)[Lang];

export const LANGS: Lang[] = ["tr", "en"];
export const DEFAULT_LANG: Lang = "tr";
