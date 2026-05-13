# SKILL: /delta-publish
## Publiceren & Deployment naar Vercel

---

## DOEL

Goedgekeurde artikelen van `shared/content/approved/` publiceren naar amarereview.nl:
- Git commit + push
- Vercel deployment
- Google Search Console indexing
- Metriekgegevens registreren

---

## WANNEER GEBRUIKEN

- **Gepland**: Vrijdag, 16:00 uur (via cron)
- **Handmatig**: Gebruiker typt `@delta publish`
- **Input**: `shared/content/approved/` (alle -APPROVED.mdx files)
- **Output**: Live op https://amarereview.nl/reviews/[slug]

---

## PUBLICATIEPROCES

### Stap 1: Artikelen Naar Vercel-Project Kopiëren

```bash
for file in shared/content/approved/*.mdx; do
  slug=$(basename "$file" "-APPROVED.mdx")
  cp "$file" amarereview.nl/content/reviews/$slug.mdx
done
```

Verificatie:
```bash
ls -la amarereview.nl/content/reviews/
# Moet: happy-juice-bijwerkingen-huid.mdx, edge-plus-mango-focus.mdx, etc.
```

### Stap 2: Git Commit

Voor elke gepubliceerde artikel:

```bash
git add amarereview.nl/content/reviews/[slug].mdx

git commit -m "chore: publish auto-generated article — {title}

AI-generated content
Sleutelwoorden: {keyword1}, {keyword2}, {keyword3}
Categorie: {category}
Traffic potentieel: {potential}

Co-Authored-By: Ajan 6 Delta <delta@agentclaw>"
```

**Voorbeeld**:
```
chore: publish auto-generated article — Happy Juice Bijwerkingen Huid

AI-generated content
Sleutelwoorden: Happy Juice bijwerkingen, huid veiligheid, Amare supplement
Categorie: beauty
Traffic potentieel: medium-high

Co-Authored-By: Ajan 6 Delta <delta@agentclaw>
```

### Stap 3: Git Push & Vercel Deployment

```bash
git push origin main
```

Wachten op Vercel deployment:
- ✅ Build process start (controleer: vercel.com/arks-projects-2ac3ac7b/amarereview.nl)
- ✅ Build geslaagd (geen errors)
- ✅ Deploy finished (~2-5 minuten)
- ✅ Site live op https://amarereview.nl

Verificatie:
```bash
curl -I https://amarereview.nl/reviews/[slug]
# Verwacht: HTTP/1.1 200 OK
```

### Stap 4: Google Search Console Indiening

Voor elke nieuwe URL:

```bash
# Stap 4a: GSC API authentication
GSC_PROPERTY_ID=$(grep NEXT_PUBLIC_GSC_PROPERTY_ID .env.local | cut -d'=' -f2)

# Stap 4b: Dien URL in (vereist OAuth token)
curl -X POST "https://www.googleapis.com/webmasters/v3/sites/${GSC_PROPERTY_ID}/urlTestingTools/mobileFriendlyTest" \
  -H "Authorization: Bearer ${GSC_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"url\": \"https://amarereview.nl/reviews/${slug}\"}"

# Stap 4c: Vraag indexering aan
curl -X POST "https://www.google.com/ping?sitemap=https://amarereview.nl/sitemap.xml" \
  -H "Authorization: Bearer ${GSC_TOKEN}"
```

**Handmatig (geen API)**:
1. Login op Google Search Console
2. Voeg URL in: https://amarereview.nl/reviews/[slug]
3. Klik: "Indexering aanvragen"
4. Controleer: "Indexeringsstatus" → "Geaccepteerd"

### Stap 5: Metriekgegevens Registreren

Update `shared/metrics/published_WEEK-X.json`:

```json
{
  "week": 21,
  "year": 2026,
  "date_published": "2026-05-17",
  "published_articles": [
    {
      "slug": "happy-juice-bijwerkingen-huid",
      "title": "Happy Juice Bijwerkingen Huid | AmareReview NL",
      "date_published": "2026-05-17",
      "keywords": ["Happy Juice bijwerkingen", "huid veiligheid", "Amare supplement"],
      "category": "beauty",
      "url": "https://amarereview.nl/reviews/happy-juice-bijwerkingen-huid",
      "word_count": 1523,
      "validation_score": 98,
      "indexing_status": "indexed",
      "submitted_to_gsc": true,
      "deployment_time_seconds": 245,
      "traffic_potential": "medium-high"
    },
    {
      "slug": "edge-plus-mango-focus",
      "title": "Edge Plus Mango Focus Concentratie | AmareReview NL",
      "date_published": "2026-05-17",
      "keywords": ["Edge Plus focus", "mango concentratie", "nootropic"],
      "category": "focus",
      "url": "https://amarereview.nl/reviews/edge-plus-mango-focus",
      "word_count": 1487,
      "validation_score": 96,
      "indexing_status": "indexed",
      "submitted_to_gsc": true,
      "deployment_time_seconds": 238,
      "traffic_potential": "medium"
    }
  ],
  "summary": {
    "total_articles": 2,
    "total_words": 3010,
    "avg_validation_score": 97,
    "deploy_success_rate": 100,
    "gsc_submission_rate": 100,
    "estimated_monthly_traffic": "80-120 organic visits",
    "next_week_outlook": "4 articles planned"
  }
}
```

### Stap 6: Wekelijks Rapport

Na publicering, genereer samenvattingsrapport:

```
📊 WEEKRAPPORT — WEEK 21 PUBLICERING

✅ Status: Compleet

📝 Gepubliceerde Artikelen: 2
  • happy-juice-bijwerkingen-huid
  • edge-plus-mango-focus

📈 Metriekgegevens:
  • Totale woorden: 3,010
  • Avg. validatie score: 97%
  • Deploy succes: 100%
  • GSC indiening: 100%

🎯 Geschat Maandverkeer:
  • Organische bezoekers: 80-120/maand
  • CTR uit zoeken: ~3.2%

📅 Volgende Week:
  • Onderzoek: 10 briefs gegenereerd
  • Verwachting: 4 artikelen publiceren
  • Focus: Focus & energie categorie

⚠️ Problemen: Geen

Volgende publicering: Vrijdag 22 mei 16:00
```

---

## FOUTAFHANDELING

| Scenario | Actie |
|----------|-------|
| Git push fails | Controleer credentials in .env.local, retry. Log error. |
| Vercel build fails | Controleer build logs (vercel.com), fix syntax, retry push. |
| GSC API auth fails | Handmatig indienen via GSC dashboard. |
| Article URL 404 | Controleer slug/filename match. Vercel deployment kan 5 min duren. |
| Encoding issue (Nederlands) | Zorg UTF-8 encoding in alle files. |

---

## KWALITEITSCHECKLIST (Voor Publicering)

Voor afronden:
- ✅ Alle approved/ artikelen naar amarereview.nl/content/reviews/ gekopieerd
- ✅ Git commit + push voltooid
- ✅ Vercel deployment 200 OK
- ✅ Google Search Console URLs ingediend
- ✅ Metriekgegevens geregistreerd naar published_WEEK-X.json
- ✅ Wekelijks rapport gegenereerd
- ✅ shared/memory/content_queue.md bijgewerkt (status: PUBLISHED)

---

## INTEGRATIE MET AMAREREVIEW.NL

**Veronderstelde projectstructuur**:
```
amarereview.nl/
├── content/
│   └── reviews/
│       ├── happy-juice-bijwerkingen-huid.mdx
│       ├── edge-plus-mango-focus.mdx
│       └── [... meer artikelen]
├── app/
│   └── reviews/
│       └── [slug]/
│           └── page.tsx  (Renders MDX)
├── next.config.js
├── vercel.json
└── .env.local
    ├── NEXT_PUBLIC_GSC_PROPERTY_ID
    ├── ANTHROPIC_API_KEY
    └── VERCEL_TOKEN
```

**MDX Rendering** (Next.js):
- MDX articles in content/reviews/ automatisch beschikbaar als /reviews/[slug]
- Metadata uit frontmatter gebruikt voor SEO
- Componenten (<AffiliateCTA>, etc.) automatisch geladen

---

## REFERENTIES

**Bestaande AmareReview.nl Artikelen**:
- happy-juice-ervaringen
- happy-juice-kopen
- happy-juice-bijwerkingen
- skin-to-mind-ervaringen
- edge-plus-mango
- rootist-ervaringen
- gut-brain-top-5
- amare-vs-rakipler
- origin-chocolate
- nitro-xtreme-ervaringen

**GSC (Google Search Console)**:
- Property ID: https://search.google.com/search-console/about
- Indexeringsstatus monitoren: GSC → Coverage
- Rich Results: GSC → Enhancements

**Vercel**:
- Dashboard: vercel.com/[project]
- Deployment logs: vercel.com/[project]/deployments
- Real-time monitoring: vercel.com/[project]/monitoring

---

**Skill Versie**: 1.0  
**Laatst bijgewerkt**: 2026-05-12  
**Status**: Klaar om uit te voeren
