# AgentClaw — Agent Görev Planı & Orkestrasyon

**Durum**: 🟢 Sistem Aktif | **Session**: 2026-05-13
**Proje**: AmareReview.nl (Laboratuvar)

---

## 🤖 AGENT RUTİN TAKVİMİ

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          HAFTALIK AJAN DÖNGÜSÜ                           │
├──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬────────┤
│  PAZARTESİ│   SALI   │ ÇARŞAMBA │ PERŞEMBE │   CUMA   │ CUMARTESİ│  PAZAR │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────┼────────┤
│          │          │          │          │          │          │        │
│ 08:00    │ 08:00    │ 08:00    │ 08:00    │ 08:00    │ 08:00    │ 08:00  │
│ EPSILON  │ EPSILON  │ EPSILON  │ EPSILON  │ EPSILON  │ EPSILON  │EPSILON │
│ SEO      │ SEO      │ SEO      │ SEO      │ SEO      │ SEO      │SEO     │
│ Raporu   │ Raporu   │ Raporu   │ Raporu   │ Raporu   │ Raporu   │Raporu  │
│          │          │          │          │          │          │        │
│ 08:30    │          │          │          │ 08:30    │          │        │
│ ALPHA    │          │          │          │ ALPHA    │          │        │
│ Sistem   │          │          │          │ Sistem   │          │        │
│ Kontrol  │          │          │          │ Kontrol  │          │        │
│          │          │          │          │          │          │        │
│          │ 14:00    │ 14:00    │ 14:00    │ 10:00    │          │        │
│          │ BETA     │ BETA     │ BETA     │ GAMMA    │          │        │
│          │ Makale   │ Makale   │ Makale   │ QA       │          │        │
│          │ Üretimi  │ Üretimi  │ Üretimi  │ Kontrol  │          │        │
│          │          │          │          │          │          │        │
│          │          │          │          │ 16:00    │          │        │
│          │          │          │          │ DELTA    │          │        │
│          │          │          │          │ YAYINLA  │          │        │
│          │          │          │          │          │          │        │
│          │          │          │          │ 17:00    │          │        │
│          │          │          │          │ HAFTALIK │          │        │
│          │          │          │          │ RAPOR    │          │        │
├──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴────────┤
│                                                                          │
│  🎨 ZETA: Talep üzerine → "zeta: [görev]" yazınca aktif olur            │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 📋 AGENT GÖREV TANIMLARI

### 🔍 EPSILON — SEO Monitor (Her gün 08:00)

```
Görev: Günlük SEO sağlık raporu
Çıktı: shared/reports/daily/YYYY-MM-DD.md

Kontrol listesi:
☐ Site uptime (200 OK tüm sayfalar)
☐ Vercel Analytics: dünkü ziyaretçi sayısı
☐ Google Search Console: yeni indekslenen URL'ler
☐ Sıralama değişiklikleri (keyword pozisyonları)
☐ Kırık link kontrolü
☐ PageSpeed/Lighthouse skoru
☐ Yeni backlink tespiti
☐ Rakiplerin yeni içeriği
```

### 🛠️ ALPHA — Sistem Bakım (Pazartesi & Cuma 08:30)

```
Görev: Proje sağlık kontrolü
Çıktı: shared/reports/system/YYYY-MM-DD.md

Kontrol listesi:
☐ Build başarılı mı?
☐ Tüm sayfalar 200 dönüyor mu?
☐ JSON-LD şemaları geçerli mi?
☐ .env değişkenleri güncel mi?
☐ Yeni paket güncellemeleri var mı?
☐ GitHub senkronizasyonu
☐ Vercel deployment durumu
```

### 📝 BETA — İçerik Üretimi (Salı-Çarşamba-Perşembe 14:00)

```
Görev: 1 SEO-optimize makale üret
Girdi: shared/research/briefs_WEEK-X.json
Çıktı: shared/content/drafts/[slug]-DRAFT.mdx

Adımlar:
1. Brief listesinden en yüksek priority'i seç
2. 1,500+ kelime MDX makale yaz
3. Frontmatter: title, date, category, rating, slug, metaDescription
4. 3+ FAQ bloğu (40-60 kelime cevaplar)
5. 2+ internal link
6. <AffiliateCTA> component kullan
7. JSON-LD schema ekle (Review + Article + FAQPage)
8. Draft olarak kaydet
```

### 🔍 GAMMA — Kalite Kontrol (Perşembe-Cuma 10:00)

```
Görev: Draft makaleleri QA kontrolü
Girdi: shared/content/drafts/
Çıktı: shared/content/approved/ veya hata raporu

15-Point Checklist:
☐ Frontmatter tam
☐ Title ≤60 karakter + keyword
☐ Meta description ≤155 karakter
☐ H1 ilk 100 kelimede
☐ Kelime sayısı ≥1,200
☐ Keyword density 0.8-2%
☐ 3+ FAQ bloğu
☐ 2+ internal link
☐ AffiliateCTA kullanılmış
☐ Affiliate disclosure var
☐ Tıbbi claim'lere disclaimer eklenmiş
☐ JSON-LD schema valid
☐ Alt text tüm görsellerde
☐ Flesch-Kincaid 6-9
☐ MDX syntax valid
```

### 🚀 DELTA — Yayınlama (Cuma 16:00)

```
Görev: Onaylı makaleleri yayınla
Girdi: shared/content/approved/
Çıktı: amarereview.nl/content/reviews/[slug].mdx + Vercel deploy

Adımlar:
1. Tüm -APPROVED.mdx dosyalarını kopyala
2. Git add + commit (yapılandırılmış mesaj)
3. Git push fork main
4. Vercel deploy'u bekle
5. Google Search Console → indexing request
6. Metrikleri logla
7. Haftalık rapor oluştur
```

### 🎨 ZETA — Tasarım (Talep Üzerine)

```
Tetikleyici: "zeta: [görev açıklaması]"
Skill: huashu-design (20 tasarım felsefesi)

Görev tipleri:
- "zeta: siteyi eleştir" → 5-boyutlu tasarım eleştirisi
- "zeta: [ürün] için animasyon yap" → MP4/GIF animasyon
- "zeta: karşılaştırma infografiği" → Veri görselleştirme
- "zeta: sosyal medya görseli" → Paylaşım görselleri
- "zeta: 3 yön göster" → Tasarım yönü danışmanı
- "zeta: sunum yap" → HTML deck → PPTX
- "zeta: [app] prototipi yap" → iOS/Android prototip
```

---

## 📊 RAPORLAMA SİSTEMİ

```
shared/reports/
├── daily/          ← Epsilon günlük SEO raporları
│   └── YYYY-MM-DD.md
├── system/         ← Alpha sistem kontrolleri
│   └── YYYY-MM-DD.md
├── content/        ← Beta içerik üretim logu
│   └── WEEK-X.md
├── qa/             ← Gamma QA raporları
│   └── WEEK-X.md
├── publish/        ← Delta yayın raporu
│   └── WEEK-X.md
└── weekly/         ← Haftalık özet (Cuma 17:00)
    └── WEEK-X.md
```

---

## 🔄 ORKESTRATÖR RAPOR FORMATI

Her agent görev sonunda şu formatta rapor verir:

```markdown
## [AGENT] Günlük Rapor — [TARİH]

**Durum**: ✅ Başarılı / ⚠️ Kısmi / ❌ Hata

### Yapılanlar
- ...

### Bulgular
- ...

### Aksiyon Gerekenler
- ...

### Sonraki Adım
- ...
```

---

## ⚡ HIZLI KOMUTLAR

| Komut | İşlev |
|-------|-------|
| `epsilon: rapor` | Anlık SEO raporu al |
| `alpha: kontrol` | Sistem sağlık kontrolü |
| `beta: [konu]` | Belirli konuda makale üret |
| `gamma: kontrol` | Draft'ları QA'dan geçir |
| `delta: yayınla` | Onaylıları hemen yayınla |
| `zeta: [görev]` | Tasarım görevi ver |
| `rapor: gunluk` | Tüm agent'lerden günlük rapor al |
| `rapor: haftalik` | Haftalık özet rapor |
