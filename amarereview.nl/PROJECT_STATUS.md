# AmareReview.nl — Project Status & Site Croquis

**Status**: ✅ Production Live | 🟢 All Systems Active | 🌐 Custom Domain Active
**Last Updated**: 2026-05-13
**Live URL**: https://amarereview.nl | https://amarereview-4k0yov7i5-arks-projects-2ac3ac7b.vercel.app

---

## 🗺️ SITE CROQUIS (Güncel Mimari)

```
┌─────────────────────────────────────────────────────────────────────┐
│                     AMAREREVIEW.NL MİMARİSİ                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📄 PAGE LAYER (Next.js 14 App Router + TypeScript)                 │
│                                                                     │
│  ┌──────────────┐                                                    │
│  │   layout.tsx  │ ← Organization JSON-LD + Vercel Analytics + GA4  │
│  │   (global)    │    Metadata: OG, robots, GSC verification        │
│  └──────┬───────┘                                                    │
│         │                                                           │
│  ┌──────┴──────────────────────────────────────────────────────┐   │
│  │                      SAYFALAR (8+1)                          │   │
│  │                                                               │   │
│  │  / (Home)                   4 şema · SEO meta                │   │
│  │  ├── /reviews               2 şema · Arama + Filtre aktif    │   │
│  │  │   └── /[slug]           10 şema · Review+Article+FAQ+Breadcrumb │
│  │  │      ├── happy-juice-bijwerkingen-huid                   │   │
│  │  │      ├── darmbacteriën-gezondheid-mentabiotics           │   │
│  │  │      └── edge-plus-focus-concentratie                    │   │
│  │  ├── /categorieen           4 şema                            │   │
│  │  │   └── /[slug]  (×7)     4 şema · gut-brain/focus/...     │   │
│  │  ├── /vergelijking          4 şema · Karşılaştırma tablosu   │   │
│  │  ├── /over-ons              6 şema · Person+Breadcrumb       │   │
│  │  ├── /contact               2 şema · Form + metadata fix     │   │
│  │  ├── /privacybeleid         2 şema · GDPR/AVG uyumlu         │   │
│  │  ├── /disclaimer            2 şema · Medikal koruma          │   │
│  │  └── /404                   Custom 404 sayfası               │   │
│  │                                                               │   │
│  │  ⚡ Dinamik Rotlar:                                          │   │
│  │  ├── /sitemap.xml           Otomatik 12+ review slug         │   │
│  │  ├── /robots.txt            Allow all, /admin/ disallow      │   │
│  │  └── /llms.txt              AI crawler endpoint (ChatGPT)    │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  🧩 COMPONENT LAYER (10 bileşen)                                    │
│                                                                     │
│  ┌──────────────────────┐  ┌──────────────────────────┐           │
│  │      Layout           │  │          UI              │           │
│  │  ├── Header.tsx       │  │  ├── ReviewCard.tsx      │           │
│  │  └── Footer.tsx       │  │  ├── AffiliateCTA.tsx    │           │
│  └──────────────────────┘  │  ├── LeadMagnetModal.tsx  │           │
│                             │  ├── HomepageGuarantee.tsx│           │
│                             │  ├── JsonLd.tsx          │           │
│                             │  ├── Skeleton.tsx        │           │
│                             │  └── (RatingStars, etc)  │           │
│                             └──────────────────────────┘           │
│                                                                     │
│  📚 LIB LAYER (5 modül)                                             │
│                                                                     │
│  ┌──────────────────────┐  ┌──────────────────────────┐           │
│  │  schema.ts            │  │  leadMagnets.ts          │           │
│  │  ├── Organization     │  │  emailSequence.ts        │           │
│  │  ├── Review           │  │  emailService.ts         │           │
│  │  ├── Article          │  │  (reviews.ts)            │           │
│  │  ├── FAQPage          │  └──────────────────────────┘           │
│  │  ├── Person (E-E-A-T) │                                          │
│  │  ├── BreadcrumbList   │                                          │
│  │  ├── Speakable        │                                          │
│  │  └── SiteLinksSearch  │                                          │
│  └──────────────────────┘                                          │
│                                                                     │
│  🔌 API LAYER (1 endpoint)                                          │
│                                                                     │
│  ┌──────────────────────┐                                          │
│  │  /api/subscribe       │ → Mailchimp/ConvertKit/Klaviyo          │
│  └──────────────────────┘                                          │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     TRAFİK & ÖLÇÜM SİSTEMİ                           │
│                                                                     │
│  Vercel Analytics (aktif) + Google Analytics 4 (hazır, ID bekliyor) │
│  Google Search Console (meta tag hazır, env var ile aktif olacak)   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     AI AGENT SİSTEMİ (6 Agent)                       │
│                                                                     │
│  🤖 ALPHA (Setup)     → Pazartesi/Cuma · Proje yapılandırma        │
│  📝 BETA (Content)    → Salı-Perşembe · Makale üretimi              │
│  🔍 GAMMA (QA)        → Perşembe-Cuma · İçerik doğrulama           │
│  🚀 DELTA (Publish)   → Cuma 16:00 · Git + Vercel + GSC            │
│  📈 EPSILON (SEO)     → Günlük · SEO monitoring                    │
│  🎨 ZETA (Design)     → Talep üzerine · Animasyon/Prototip/Grafik  │
│                         Skill: huashu-design (20 tasarım felsefesi) │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     DNS & DEPLOY                                     │
│                                                                     │
│  Deploy: Vercel (Heroku benzeri) → arks-projects-2ac3ac7b          │
│  Domain: amarereview.nl → Namecheap                                 │
│  DNS: A Record → 216.198.79.195 | CNAME www → cname.vercel-dns.com │
│  Git: GitHub → fork: arkmedia25-cmyk/agentclaw                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📊 SAYFA DURUMU (22 Mart 2026)

| Sayfa | HTTP | JSON-LD | Metadata | Title | Durum |
|-------|------|---------|----------|-------|-------|
| `/` | 200 | 4 | ✅ | AmareReview.nl | ✅ |
| `/reviews` | 200 | 2 | ✅ | Alle Product Reviews | ✅ |
| `/reviews/happy-juice-*` | 200 | 10 | ✅ | Happy Juice Review | ✅ |
| `/reviews/darmbacteriën-*` | 200 | 10 | ⚠️ | MentaBiotics (title bug) | ⚠️ |
| `/reviews/edge-plus-*` | 200 | 10 | ✅ | Edge Plus Review | ✅ |
| `/categorieen` | 200 | 4 | ✅ | Categorieën | ✅ |
| `/categorieen/[slug]` ×7 | 200 | 4 | ✅ | Her kategori doğru | ✅ |
| `/vergelijking` | 200 | 4 | ✅ | Amare vs Alternatieven | ✅ |
| `/over-ons` | 200 | 6 | ✅ | Over AmareReview.nl | ✅ |
| `/contact` | 200 | 2 | ✅ | Contact form | ✅ |
| `/privacybeleid` | 200 | 2 | ✅ | Privacybeleid | ✅ |
| `/disclaimer` | 200 | 2 | ✅ | Disclaimer | ✅ |
| `/sitemap.xml` | 200 | - | - | Otomatik XML | ✅ |
| `/robots.txt` | 200 | - | - | Allow all | ✅ |
| `/llms.txt` | 200 | - | - | AI crawler feed | ✅ |
| `/404` (custom) | 404 | 2 | ✅ | Custom 404 page | ✅ |

---

## 🎨 TASARIM SİSTEMİ

### Consumer Reports / Trust Edition

| Token | Değer | Kullanım |
|-------|-------|----------|
| Primary | `#1e3a8a` (Navy) | Header, buton, vurgu |
| Primary Light | `#3b5998` | Gradient |
| Accent | `#d86018` (Orange) | CTA, link, ikon |
| Background | `#f8f8f8` / `#ffffff` | Sayfa arka planı |
| Text | `#333333` / `#666666` | Metin |
| Font | Inter (400-700) | Tüm tipografi |

### Anti AI-Slop Kuralları (Huashu-Design'dan):
- ❌ Mor gradient yok
- ❌ Emoji ikon yok (veri viz hariç)
- ❌ Rounded-corner + left-border accent yok
- ❌ Inter display font olarak yok
- ✅ Serif display + oklch renkler + CSS Grid + text-wrap: pretty

---

## 🤖 AGENT SİSTEMİ

### Aktif Agent'lar (6/6)

| Agent | Rol | Frekans | Durum |
|-------|-----|---------|-------|
| **Alpha** | Proje kurulum, yapılandırma | Pazartesi/Cuma | 🟢 Ready |
| **Beta** | İçerik üretimi (makale) | Salı-Perşembe 14:00 | 🟢 Ready |
| **Gamma** | QA, validasyon | Perşembe-Cuma 10:00 | 🟢 Ready |
| **Delta** | Publish, deploy, GSC | Cuma 16:00 | 🟢 Ready |
| **Epsilon** | SEO monitoring | Günlük 08:00 | 🟢 Ready |
| **Zeta** | Tasarım, animasyon, prototip | Talep üzerine | 🟢 Ready |

### Zeta Agent Özellikleri:
- **Skill**: huashu-design (花叔Design) v2.x
- **Yetenekler**: iOS prototip, motion design (MP4/GIF), sunum deck → PPTX, infografik, tasarım varyantları, 5-boyutlu eleştiri
- **Tasarım Felsefeleri**: 5 ekol × 20 felsefe (Pentagram bilgi mimarisi, Field.io hareket şiiri, Kenya Hara doğu minimalizmi, Sagmeister deneysel öncü, vb.)
- **Brand Asset Protocol**: Logo + ürün görseli + UI screenshot + renk + font → 5 adımda marka varlık çıkarma
- **Çıktı Formatları**: HTML (single-file), MP4 (25/60fps), GIF, PPTX (düzenlenebilir), PDF, PNG, SVG

---

## 🔄 İŞ AKIŞI

```
┌──────────┐    ┌──────────┐    ┌──────────┐
│  ALPHA    │───▶│  BETA    │───▶│  GAMMA   │
│  Araştırma │    │  İçerik  │    │  Kontrol │
└──────────┘    └──────────┘    └────┬─────┘
                                     │
                              ┌──────▼─────┐
                              │   DELTA    │
                              │  Yayınlama │
                              └──────┬─────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
              ┌─────▼─────┐  ┌──────▼──────┐  ┌─────▼─────┐
              │  EPSILON  │  │    ZETA     │  │  ANALYTICS│
              │  SEO Takip│  │  Tasarım    │  │  Trafik   │
              └───────────┘  └─────────────┘  └───────────┘
```

---

## 📋 BEKLEYEN İŞLER

### Yüksek Öncelik
- [x] DNS yayılması → `amarereview.nl` aktif ✅
- [x] Google Search Console doğrulama ✅
- [x] Google Analytics 4 ID ekleme ✅
- [ ] MentaBiotics slug title bug fix (`ë` karakteri)

### Orta Öncelik
- [ ] Zeta: AmareReview.nl tasarım eleştirisi
- [ ] Zeta: 7 kategori için hero görseli
- [ ] Zeta: Sosyal medya paylaşım görselleri
- [ ] Placeholder SVG'leri gerçek tasarımlarla değiştir

### Düşük Öncelik
- [ ] Footer sosyal linkleri (# → gerçek URL)
- [ ] Email platform entegrasyonu (Mailchimp API key)
- [ ] Mobil responsive test

---

## 🧪 LABORATUVAR NOTLARI

Bu site, agentclaw sistemi için bir **canlı laboratuvar** olarak kullanılıyor.

**Öğrenilen Dersler:**
1. Nameserver değişikliği yerine A Record + CNAME daha hızlı ve güvenilir
2. Vercel Deployment Protection `all_except_custom_domains` — sadece custom domain'de auth istemez
3. GEO/AEO için llms.txt, FAQPage schema, Article schema kritik
4. `'use client'` sayfalarda metadata için ayrı `layout.tsx` gerekli
5. Design agent için huashu-design pattern'i doğrudan uyarlanabilir

**Sıradaki Proje İçin Şablon:**
- 6 agent mimarisi (Alpha→Beta→Gamma→Delta + Epsilon + Zeta)
- SEO/GEO/AEO altyapısı (schema.ts + llms.txt + metadata)
- Hukuki koruma sayfaları (disclaimer + privacybeleid)
- Vercel deploy + DNS yapılandırması
