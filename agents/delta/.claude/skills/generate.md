# SKILL: /delta-generate
## Automated MDX Article Generation

---

## PURPOSE

Convert a single content brief from briefs_WEEK-X.json into a complete, SEO-optimized 1,500-word MDX article following the AmareReview.nl template.

---

## WHEN TO USE

- **Scheduled**: Tuesday-Thursday, 2:00 PM (via cron)
- **Manual**: User types `@delta generate [brief-id]`
- **Output**: `shared/content/drafts/[slug]-DRAFT.mdx`

---

## PROCESS

### Step 1: Select Brief

Read `shared/research/briefs_WEEK-X.json` and pick the **first brief** that hasn't been written yet:
```
Loop through briefs (sorted by priority descending):
  IF brief.id NOT IN recently_generated_slugs:
    SELECT this brief
    BREAK
```

If all briefs written → Report "All briefs for this week processed."

### Step 2: Extract Key Data

From selected brief, extract:
```
keyword: "Happy Juice bijwerkingen huid"
angle: "Is Happy Juice veilig voor de huid?"
products: ["happy-juice-pack"]
categories: ["beauty", "safety"]
faq_targets: ["Veroorzaakt...", "Hoe lang...", "Is het veilig..."]
internal_links: ["happy-juice-ervaringen", "skin-to-mind-ervaringen"]
```

### Step 3: Generate Article via Claude API

Call Anthropic SDK to generate MDX:

**Prompt Template**:
```
You are an expert SEO content writer for amarereview.nl, a Dutch 
Amare product review site. Write a 1,500-word MDX article.

KEYWORD: {keyword}
ANGLE: {angle}
PRODUCTS: {products}
CATEGORIES: {categories}

REQUIREMENTS:
1. H1 must include primary keyword WITHIN FIRST 100 WORDS
2. Minimum 1,200 words, target 1,500
3. Keyword density: 0.8-2.0% (no stuffing)
4. 3+ FAQ blocks (each 40-60 words, direct answers)
5. 2+ internal links to existing AmareReview reviews
6. Include <AffiliateCTA label="Bestel @ Amare →" product="happy-juice-pack" />
7. Flesch-Kincaid reading level: Grade 6-9 (Dutch audience)
8. Structure:
   - H1: Title with keyword
   - Intro: 150-200 words, keyword in first 100
   - H2 sections with subheadings
   - FAQ section: 3+ FAQs
   - Pricing/CTA section
   - Conclusion: 100-150 words
9. Include affiliate disclosure visible
10. No medical claims without disclaimers

FAQ TARGETS (use these as FAQ questions):
{faq_targets}

INTERNAL LINK TARGETS (link to these reviews):
{internal_links}

Output: Valid MDX with YAML frontmatter + markdown content
```

**Frontmatter Template**:
```yaml
---
title: "{keyword} | AmareReview NL"
date: "{YYYY-MM-DD}"
category: "{category}"
tags: ["{tag1}", "{tag2}", "{tag3}"]
metaDescription: "{keyword} - Wat je moet weten over {product}. Onderzoek door AmareReview."
slug: "{slug-from-keyword}"
rating: 4.2
author: "AI Content (Mark review)"
affiliateCtaProduct: "{product-id}"
schema: "Article"
excerpt: "{One-sentence summary of article}"
image: "/images/reviews/{slug}-cover.jpg"
---
```

### Step 4: Validate Article Quality

Before saving, check:
- ✅ Valid MDX syntax (YAML frontmatter + markdown)
- ✅ Frontmatter complete: title, date, category, slug, metaDescription, rating, author, affiliateCtaProduct
- ✅ Title: ≤60 characters, includes keyword
- ✅ Meta description: ≤155 characters
- ✅ H1 present in first 100 words
- ✅ Word count: ≥1,200
- ✅ Keyword density: 0.8-2.0%
- ✅ FAQ blocks: 3+
- ✅ Internal links: 2+
- ✅ AffiliateCTA component: present
- ✅ Affiliate disclosure: visible
- ✅ No medical claims without disclaimer
- ✅ Flesch-Kincaid: Grade 6-9
- ✅ All internal links match existing articles

If ANY check fails → Log error, save article anyway, mark for manual review in validation step.

### Step 5: Generate Slug & Save

Create slug from keyword:
```
"Happy Juice bijwerkingen huid" → "happy-juice-bijwerkingen-huid"
"Edge Plus mango focus" → "edge-plus-mango-focus"
```

Save article as: `shared/content/drafts/{slug}-DRAFT.mdx`

### Step 6: Log Generation

Update `shared/memory/content_queue.md`:
```markdown
## Generated Articles (This Week)

- [happy-juice-bijwerkingen-huid] Generated 2026-05-14 2pm
  - Status: DRAFT
  - Keywords: Happy Juice, bijwerkingen, huid
  - Word count: 1,523
  - Validation issues: None
  - Next: Validate & move to approved/
```

---

## OUTPUT FORMAT

Generated file: `shared/content/drafts/happy-juice-bijwerkingen-huid-DRAFT.mdx`

```mdx
---
title: "Happy Juice Bijwerkingen Huid | AmareReview NL"
date: "2026-05-14"
category: "beauty"
tags: ["happy-juice", "huid", "bijwerkingen", "veiligheid"]
metaDescription: "Happy Juice bijwerkingen huid - Is het veilig? Onderzoek ingrediënten en eigenaren-reviews door AmareReview."
slug: "happy-juice-bijwerkingen-huid"
rating: 4.3
author: "AI Content (Mark review)"
affiliateCtaProduct: "happy-juice-pack"
schema: "Article"
excerpt: "Ontdek de mogelijke bijwerkingen van Happy Juice op je huid, ingrediënten-analyse, en of het geschikt is voor gevoelige huiden."
image: "/images/reviews/happy-juice-bijwerkingen-huid-cover.jpg"
---

## Is Happy Juice Veilig voor Je Huid? Onderzoek Bijwerkingen & Ingrediënten

Happy Juice is één van Amare's populairste guttalkingen gezondheidsproducten, maar veel mensen vragen zich af: veroorzaakt Happy Juice huidproblemen? In dit artikel onderzoeken we de bijwerkingen, ingrediënten, en ervaringen van eigenaren.

### Wat is Happy Juice Precies?

[150-200 words explanation]

### Ingrediënten Die Impact Op Huid Hebben

[Detailed breakdown of each ingredient]

### Mogelijke Bijwerkingen voor Huid

✓ Benefit 1
✓ Benefit 2
✗ Potential side effect (rare)

### Happy Juice vs. Concurrenten

[Comparison table]

### Veelgestelde Vragen

**Vraag 1: Veroorzaakt Happy Juice huidproblemen?**
Niet voor de meeste gebruikers. Happy Juice bevat natuurlijke ingrediënten en veroorzaakt zelden allergische reacties. Echter, zeer gevoelige huid kan soms roodheid ervaren...

**Vraag 2: Hoe lang tot je resultaten op huid ziet?**
Eigenaren melden meestal zichtbare verbeteringen na 4-6 weken regelmatig gebruik...

**Vraag 3: Is het geschikt voor gevoelige huid?**
Ja, maar start met halve dosis en test allergie eerst...

### Conclusie

Happy Juice is veilig voor het merendeel van gebruikers en bevat geen schadelijke ingrediënten. [Soft recommendation]

Wil je meer weten? [Newsletter CTA]

<AffiliateCTA label="Bestel Happy Juice @ Amare →" product="happy-juice-pack" />
```

---

## ERROR HANDLING

| Error | Action |
|-------|--------|
| Claude API call fails | Retry up to 2x. If still fails, log error, skip to next brief. |
| Generated article <1,200 words | Log warning, save anyway, mark "SHORT" in validation. |
| Keyword not in article | Rewrite H1, add keyword early. |
| Affiliate CTA missing | Add before saving. |
| MDX syntax invalid | Fix and re-save before marking complete. |

---

## QUALITY CHECKLIST

Before saving -DRAFT.mdx:
- ✅ Article ≥1,200 words
- ✅ Keyword in H1 + first 100 words
- ✅ 3+ FAQ blocks with direct answers
- ✅ 2+ internal links
- ✅ <AffiliateCTA> component present
- ✅ Affiliate disclosure visible
- ✅ Valid MDX syntax
- ✅ Frontmatter complete
- ✅ No glaring medical claims
- ✅ File saved to drafts/[slug]-DRAFT.mdx

---

## REFERENCE

**AmareReview.nl Template** (from CLAUDE_AMAREREVIEW.md):
```
## Wat is [Product]?
[150-200 woorden intro]

## Bouwstenen/Ingrediënten
[Detailleerde analyse per component]

### [Ingredient Name]
[100-150 woorden + benefits]

## Voordelen
✓ Benefit 1
✓ Benefit 2

## Bijwerkingen & Veiligheid
[100-150 woorden]

## Vergelijking met Concurrenten
[Table]

## Prijs & Bestellen
[Info + CTA]

## Veelgestelde Vragen
[3+ FAQs, 40-60 words each]

## Conclusie
[Recap + soft recommendation]
```

**Existing Articles** (for internal linking):
- happy-juice-ervaringen
- happy-juice-kopen
- happy-juice-bijwerkingen
- skin-to-mind-ervaringen
- edge-plus-mango
- rootist-ervaringen
- gut-brain-top-5
- amare-vs-rakipler

---

**Skill Version**: 1.0  
**Last Updated**: 2026-05-12  
**Status**: Ready to run
