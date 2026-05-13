# AgentClaw — Daily Plan & Progress Tracker

**Date**: 2026-05-14 | **Day**: Çarşamba
**Project**: AmareReview.nl

---

## Bugün Tamamlananlar (13 Mayıs)

- [x] DNS yayıldı — `amarereview.nl` aktif
- [x] Google Search Console doğrulandı
- [x] Google Analytics 4 aktif (`G-VW72R977DP`)
- [x] MentaBiotics title bug fix (ë URL-encoding hatası)
- [x] Tasarım sistemi modernleştirildi (huashu-design):
  - [x] globals.css — yeni renk paleti, tipografi, kart sistemi
  - [x] Header — shield logo, backdrop blur, güven indikatörü
  - [x] Footer — güven sinyalleri, refined layout
  - [x] Yeni utility: trust-badge, disclosure-box, compare-table
- [x] Tüm pending dosyalar commit edildi

---

## Yarınki Plan (14 Mayıs — Çarşamba)

### 1. Deploy Durumu Kontrolü
- [ ] Tasarım değişiklikleri canlıda çalışıyor mu?
- [ ] Tüm sayfalar 200 dönüyor mu?
- [ ] Mobil görünüm kontrolü

### 2. Tasarım Devamı
```yaml
Öncelik: Yüksek
Tahmini süre: 1-2 saat
```

- [ ] Ana sayfa trust bölümü ekle (istatistikler, metodoloji özeti)
- [ ] ReviewCard component'ini yenile (yeni card sistemi ile)
- [ ] AffiliateCTA component'ini refine et
- [ ] LeadMagnetModal modernleştir
- [ ] Kategori sayfası kart grid'ini iyileştir
- [ ] Vergelijking sayfası karşılaştırma tablosunu CSS ile güncelle

### 3. Placeholder Görselleri
```yaml
Öncelik: Orta
Tahmini süre: 30 dk
```
- [ ] 7 kategori için hero görsel placeholder'ları düzelt

### 4. Footer Sosyal Linkleri
```yaml
Öncelik: Düşük
Tahmini süre: 10 dk
```
- [ ] `#` linkleri gerçek URL'lerle değiştir

### 5. Agent Cron Testi
```yaml
Öncelik: Düşük
Tahmini süre: 15 dk
```
- [ ] Epsilon SEO raporunu manuel tetikle/test et
- [ ] Agent çıktılarının doğru dizine yazıldığını kontrol et

---

## Agent Rutin Takvimi (Yarın)

| Saat | Agent | Görev |
|------|-------|-------|
| 08:07 | Epsilon | Günlük SEO raporu |
| 14:03 | Beta | Makale üretimi (Salı-Perşembe) |

---

## Uzun Vadeli Yapılacaklar (Backlog)

### Yüksek
- [ ] Vercel Analytics runtime error kontrolü
- [ ] Email platform entegrasyonu (Mailchimp API key)

### Orta
- [ ] Zeta: AmareReview.nl tasarım eleştirisi (5-boyutlu)
- [ ] Zeta: Kategori hero görselleri
- [ ] Zeta: Sosyal medya paylaşım görselleri

### Düşük
- [ ] Mobil responsive tam test
- [ ] Yeni makale brief'leri hazırla (Beta için)

---

## Notlar

- DNS artık stabil çalışıyor: `amarereview.nl` → Vercel
- `ë` gibi özel karakterler URL'de sorun çıkarıyor — yeni slug'larda ASCII-only kullan
- Build cache bazen sorun çıkarıyor — `vercel --prod --force` her zaman taze build alır
- Agent cron job'ları session-only — oturum kapanınca silinir. Prodüksiyon için durable yapı gerek

---

**Son Güncelleme**: 2026-05-13 23:40
