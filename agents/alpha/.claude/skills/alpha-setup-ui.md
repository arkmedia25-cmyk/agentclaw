# SKILL: /alpha-setup-ui
## UI/UX Component Setup & Styling

---

## GÖREV

AmareReview.nl için tüm UI components oluştur:
- Header, Footer, Navigation
- ReviewCard, RatingStars
- Homepage layout
- Review page template
- Category grid
- Responsive styling (Tailwind + AmareNL paars/altın tema)

---

## RENK PALETİ (AmareNL.com'dan)

```css
--color-primary: #6B4C8C        /* Diep paars */
--color-primary-light: #9B7FBE  /* Açık paars */
--color-accent: #C8A951         /* Altın */
--color-bg: #FFFFFF             /* Beyaz */
--color-bg-soft: #F9F6FF        /* Çok açık paars */
--color-text: #2C2C2C           /* Koyu gri */
--color-text-muted: #6B6B6B     /* Gri */
--color-success: #4CAF50        /* Yeşil */
--color-error: #E74C3C          /* Kırmızı */
```

---

## KOMPONENTER (Oluşturulacak)

### Layout Components
1. **Header.tsx** — Logo, nav, affiliate CTA button
2. **Footer.tsx** — Links, socials, affiliate disclosure
3. **Navigation.tsx** — Mobile menu, breadcrumbs

### UI Components
4. **ReviewCard.tsx** — Thumbnail card (image, title, rating, pros/cons)
5. **RatingStars.tsx** — 1-5 star display
6. **AffiliateCTA.tsx** — Gold "Bestel @ Amare" button
7. **FAQSection.tsx** — FAQ accordion
8. **CategoryFilter.tsx** — Category pills/filter

### Section Components
9. **HeroSection.tsx** — Homepage hero
10. **FeaturedReviews.tsx** — Featured 3 cards
11. **ComparisonTable.tsx** — Amare vs competitors
12. **ReviewGrid.tsx** — All reviews grid/list

### Layout Wrappers
13. **RootLayout.tsx** — GA4, fonts, meta
14. **ReviewLayout.tsx** — Single review page layout

---

## TAILWIND SETUP

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6B4C8C',
        'primary-light': '#9B7FBE',
        accent: '#C8A951',
        'bg-soft': '#F9F6FF',
        'text-muted': '#6B6B6B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
}
```

---

## OUTPUT

```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── ui/
│   ├── ReviewCard.tsx
│   ├── RatingStars.tsx
│   ├── AffiliateCTA.tsx
│   ├── FAQSection.tsx
│   └── CategoryFilter.tsx
└── sections/
    ├── HeroSection.tsx
    ├── FeaturedReviews.tsx
    ├── ComparisonTable.tsx
    └── ReviewGrid.tsx
```

---

Status: Ready to implement
