# SKILL: /delta-research
## Market Intelligence & Content Brief Generation

---

## PURPOSE

Generate 5-10 high-potential content briefs based on Dutch market trends, SEO data, and Amare product gaps. Output feeds the content generation pipeline.

---

## WHEN TO USE

- **Scheduled**: Monday-Friday, 8:00 AM (via cron)
- **Manual**: User types `@delta research` anytime
- **Output**: `shared/research/briefs_WEEK-X.json`

---

## PROCESS

### Step 1: Analyze Market Trends (Google Trends + WebSearch)

```bash
WebSearch(query: "Amare Happy Juice Hollandse zoeken 2026")
WebSearch(query: "Amare gut-brain axis Nederland populair")
WebSearch(query: "natuurlijke supplementen Hollandse markt trends")
```

Look for:
- ✅ Rising search volume (trending up)
- ✅ Low search volume but high engagement (niche opportunity)
- ✅ Questions people are asking ("hoe werkt", "is het veilig", "bijwerkingen")
- ✅ Seasonal spikes (timing optimization)

### Step 2: Competitor Gap Analysis

Review current AmareReview.nl content inventory (from CLAUDE_AMAREREVIEW.md):
```
Existing reviews (10 total):
- gut-brain-top-5
- amare-vs-rakipler
- happy-juice-bijwerkingen
- happy-juice-kopen
- happy-juice-ervaringen
- edge-plus-mango
- rootist-ervaringen
- skin-to-mind-ervaringen
- origin-chocolate
- nitro-xtreme-ervaringen
```

Identify GAPS:
- What Amare products aren't covered yet?
- What angles on existing products aren't explored? (e.g., "Happy Juice + huid", "Edge Plus voor focus", "Rootist lang haar")
- What competitor content ranks #1-3 that we could outrank?

### Step 3: Match Keywords to Products

For each keyword trend found:
```
Keyword: "Happy Juice huid bijwerkingen"
↓
Related Product(s): ["happy-juice-pack"]
Related Category: ["beauty", "safety"]
Internal Link Targets: ["happy-juice-ervaringen", "skin-to-mind-ervaringen"]
FAQ Angles: [
  "Veroorzaakt Happy Juice huidproblemen?",
  "Hoe lang tot je resultaten ziet op huid?",
  "Is het veilig voor gevoelige huid?"
]
```

### Step 4: Estimate Traffic Potential & Difficulty

Use SEO heuristics:
```
Search Volume: [Look up in WebSearch results + trends]
- <100 searches/month = low volume
- 100-500 = medium volume
- 500-2000 = high volume
- 2000+ = very high volume

Keyword Difficulty: [Estimate 0-100 scale]
- <20 = low (easy to rank)
- 20-50 = medium
- 50-80 = high (tough competition)
- 80+ = very high (big competitors)

Intent: [informational | commercial | navigational]
```

### Step 5: Rank by Priority

Scoring formula:
```
Priority Score = (Search Volume × 0.4) + (Low Difficulty × 0.3) + (Content Gap × 0.2) + (Product Match × 0.1)

High Priority (8-10): High volume, low difficulty, clear product match, content gap
Medium Priority (5-7): Medium volume, medium difficulty, good product match
Low Priority (1-4): Niche volume, high difficulty, or weak product match
```

---

## OUTPUT FORMAT

Save as `shared/research/briefs_WEEK-X.json`:

```json
{
  "week": 21,
  "year": 2026,
  "date_generated": "2026-05-13",
  "date_range_analyzed": "2026-05-06 to 2026-05-13",
  "briefs": [
    {
      "id": "brief-001",
      "keyword": "Happy Juice bijwerkingen huid",
      "search_volume": 320,
      "search_volume_trend": "↑ +15% vs last month",
      "difficulty": 18,
      "intent": "informational",
      "angle": "Is Happy Juice veilig voor de huid? Onderzoeken we bijwerkingen, ingrediënten, en of het echt helpt.",
      "related_products": ["happy-juice-pack"],
      "related_categories": ["beauty", "safety"],
      "internal_links": ["happy-juice-ervaringen", "skin-to-mind-ervaringen"],
      "faq_targets": [
        "Veroorzaakt Happy Juice huidproblemen?",
        "Hoe lang tot je ziet resultaten op huid?",
        "Is Happy Juice veilig voor gevoelige huid?"
      ],
      "traffic_potential": "medium-high",
      "competition_analysis": "Low direct competition. Main competitors: generic supplement blogs, not Amare-specific.",
      "priority": 8,
      "estimated_monthly_traffic": "40-60 organic visits",
      "notes": "Emerging search trend, clear product match, easy to write. Strong candidate for article #1 this week.",
      "competitor_urls": [
        "https://example.com/article-1",
        "https://example.com/article-2"
      ]
    },
    {
      "id": "brief-002",
      "keyword": "Edge Plus mango focus concentratie",
      "search_volume": 180,
      "difficulty": 22,
      "intent": "informational",
      "angle": "Helpt Edge Plus Focus je concentratie? Ingredient breakdown + eigenaren-ervaringen.",
      "related_products": ["edge-plus-mango"],
      "related_categories": ["focus", "energy"],
      "internal_links": ["edge-plus-mango", "gut-brain-top-5"],
      "faq_targets": [
        "Hoe snel werkt Edge Plus?",
        "Is het beter dan koffie?",
        "Voor wie is Edge Plus geschikt?"
      ],
      "traffic_potential": "medium",
      "competition_analysis": "Moderate competition from nootropics blogs.",
      "priority": 7,
      "estimated_monthly_traffic": "20-40 organic visits",
      "notes": "Good complementary article to existing edge-plus-mango review."
    }
  ],
  "summary": {
    "total_briefs": 8,
    "high_priority_count": 3,
    "medium_priority_count": 4,
    "low_priority_count": 1,
    "estimated_total_traffic": "280-350 new organic visits/month from these 8 topics",
    "data_sources": ["Google Trends", "WebSearch", "Competitor analysis"],
    "next_step": "Generate articles from top 3 briefs (Tue-Thu), validate (Thu-Fri), publish (Fri)"
  }
}
```

---

## ERROR HANDLING

| Error | Action |
|-------|--------|
| WebSearch fails | Try again with simpler query. Log attempt. |
| No relevant trends found | Output briefcase with "low opportunity" flag, suggest revisiting next week. |
| Product not in Amare catalog | Skip brief, note in summary. |
| File write fails | Check path exists, try manual save. |

---

## QUALITY CHECKLIST

Before saving briefs_WEEK-X.json:
- ✅ 5-10 briefs generated
- ✅ Each brief has: keyword, volume, difficulty, products, FAQ targets, priority
- ✅ Briefs ranked by priority (high = first)
- ✅ All keywords are Amare-product-related (or Amare-adjacent)
- ✅ FAQ targets are 3+ per brief
- ✅ JSON syntax is valid
- ✅ File saved to correct path

---

## REFERENCE

**Amare Product Portfolio** (from CLAUDE_AMAREREVIEW.md):
- Happy Juice Pack
- Edge Plus (Mango variant)
- Rootist
- Skin to Mind
- Origin Chocolate
- Nitro Xtreme

**Amare Product Categories**:
1. Gut-Brain (Mental Health)
2. Focus & Energy
3. Beauty & Hair
4. Sleep & Relaxation
5. Weight Management
6. Immune System
7. Daily Essentials

---

**Skill Version**: 1.0  
**Last Updated**: 2026-05-12  
**Status**: Ready to run
