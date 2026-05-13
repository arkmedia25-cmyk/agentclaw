# SKILL: /delta-validate
## Content Quality Assurance & Validation

---

## PURPOSE

Run 15-point SEO quality checklist on all draft articles in `shared/content/drafts/`. Move passing articles to `approved/`. Flag failing articles for manual review.

---

## WHEN TO USE

- **Scheduled**: Thursday-Friday, 10:00 AM (via cron)
- **Manual**: User types `@delta validate`
- **Input**: `shared/content/drafts/` (all -DRAFT.mdx files)
- **Output**: Move to `shared/content/approved/` OR flag errors

---

## VALIDATION CHECKLIST (15 Points)

Run through this checklist for EVERY article:

### 1. **Frontmatter Completeness**
```
REQUIRED FIELDS:
✅ title (max 60 chars, includes keyword)
✅ date (YYYY-MM-DD format)
✅ category (valid: beauty, focus, sleep, weight, immune, essentials, gut-brain)
✅ tags (array of 3+ tags)
✅ metaDescription (max 155 chars, includes keyword)
✅ slug (lowercase, hyphens, no spaces)
✅ rating (1-5, decimal allowed)
✅ author (should be "AI Content (Mark review)")
✅ affiliateCtaProduct (must match Amare product ID)
✅ schema (should be "Article")
✅ excerpt (1-2 sentences)
✅ image (path to /images/reviews/...)
```
**FAIL IF**: Any required field missing or invalid format.

### 2. **Title Optimization**
```
✅ Length: ≤60 characters
✅ Includes primary keyword from brief
✅ Format: "{keyword} | AmareReview NL" (or natural variant)
```
**FAIL IF**: Title >60 chars OR missing keyword.

### 3. **Meta Description**
```
✅ Length: ≤155 characters
✅ Includes primary keyword
✅ Compelling call-to-action or value prop
```
**FAIL IF**: Description >155 chars OR missing keyword.

### 4. **H1 Presence & Keyword Placement**
```
✅ H1 (## or #) exists
✅ H1 appears in first 100 words
✅ H1 includes primary keyword
```
**FAIL IF**: H1 missing OR keyword not in first 100 words.

### 5. **Word Count**
```
✅ Minimum: 1,200 words
✅ Optimal: 1,500-2,000 words
```
**FAIL IF**: Word count <1,200.

### 6. **Keyword Density**
```
Count occurrences of primary keyword:
Density = (Keyword count / Total words) × 100
✅ Acceptable range: 0.8% - 2.0%
```
**FAIL IF**: Density <0.8% OR >2.0% (keyword stuffing).

### 7. **FAQ Blocks**
```
✅ Minimum 3 FAQ blocks
✅ Each FAQ: 40-60 words (direct answer, no fluff)
✅ FAQ questions address user intent
✅ Answers are clear and authoritative
```
**FAIL IF**: <3 FAQs OR any FAQ <40 or >60 words.

### 8. **Internal Linking**
```
✅ Minimum 2 internal links
✅ Links point to /reviews/ or /kategoriler/ URLs
✅ Links are contextual (not forced)
✅ All linked articles exist in current content
```
**FAIL IF**: <2 internal links OR links to non-existent articles.

### 9. **Affiliate CTA Component**
```
✅ Article includes <AffiliateCTA ... /> component
✅ Component has label + product parameters
✅ Product ID matches brief (e.g., "happy-juice-pack")
✅ Component is placed naturally (not top/bottom awkwardly)
```
**FAIL IF**: AffiliateCTA component missing.

### 10. **Affiliate Disclosure**
```
✅ Affiliate disclosure visible in article
✅ Statement: "We are affiliated with Amare" or similar
✅ Placed prominently (not hidden in footer)
✅ rel="sponsored" on all affiliate links
```
**FAIL IF**: No affiliate disclosure OR rel="sponsored" missing.

### 11. **Medical Claims & Disclaimers**
```
❌ BANNED claims:
  - "cures X disease"
  - "treats Y condition"
  - "100% safe" (no disclaimers)
  
✅ ALLOWED with disclaimer:
  - "may help" / "supports" (research-backed)
  - "some users report" (anecdotal)
  
Disclaimer example:
"This article is for informational purposes. 
Consult a healthcare professional before starting supplements."
```
**FAIL IF**: Medical claims WITHOUT disclaimers.

### 12. **JSON-LD Schemas**
```
✅ Valid Article schema present
✅ Valid Review schema (if rating article)
✅ Valid FAQPage schema (for FAQ section)
✅ No JSON syntax errors
✅ All required fields present:
  - @context, @type, headline, author, datePublished,
    description, image, articleBody
```
**FAIL IF**: Any schema invalid OR missing required fields.

### 13. **Image Alt Text**
```
✅ All images have alt text
✅ Alt text describes image content
✅ Alt text includes keyword (if natural)
Example: <img alt="Happy Juice pink bottle on white background" />
```
**FAIL IF**: Any image missing alt text.

### 14. **Flesch-Kincaid Readability**
```
Target: Grade 6-9 (Dutch audience)
Acceptable: Grade 5-10
❌ FAIL: Grade >10 (too complex) OR <5 (too simple)
```
**FAIL IF**: Reading level out of acceptable range.

### 15. **MDX Syntax Validity**
```
✅ YAML frontmatter properly closed (---)
✅ No unclosed markdown blocks
✅ No malformed JSX components (<Component .../>)
✅ File parses without errors
```
**FAIL IF**: MDX syntax invalid (file won't render).

---

## VALIDATION PROCESS

### For Each Article in `shared/content/drafts/`:

```
1. Read file: [slug]-DRAFT.mdx
2. Run all 15 checks
3. IF all 15 pass:
   a. Move file to: shared/content/approved/[slug]-APPROVED.mdx
   b. Log success to shared/metrics/published_WEEK-X.json
   c. Add entry to shared/memory/content_queue.md (status: APPROVED)
4. ELSE (ANY check fails):
   a. Keep in drafts/[slug]-DRAFT.mdx
   b. Create error log: shared/content/drafts/[slug]-ERRORS.txt
   c. Log failures to shared/memory/content_queue.md (status: NEEDS REVIEW)
   d. Add to shared/memory/feedback.md for manual review
   e. Report: "Article failed validation. Manual review needed."
```

### Error Log Format

Create `shared/content/drafts/{slug}-ERRORS.txt`:
```
ARTICLE: happy-juice-bijwerkingen-huid
DATE_CHECKED: 2026-05-15 10:15 AM
STATUS: FAILED VALIDATION

FAILED CHECKS:
1. ✅ Frontmatter Completeness — PASS
2. ✅ Title Optimization — PASS
3. ✅ Meta Description — PASS
4. ❌ H1 Presence & Keyword — FAIL
   → H1 not in first 100 words. H1 appears at word 237.
5. ✅ Word Count — PASS (1,523 words)
6. ✅ Keyword Density — PASS (1.2%)
7. ✅ FAQ Blocks — PASS (4 FAQs)
8. ✅ Internal Linking — PASS (3 links)
9. ✅ Affiliate CTA — PASS
10. ✅ Affiliate Disclosure — PASS
11. ✅ Medical Claims — PASS
12. ❌ JSON-LD Schemas — FAIL
    → Missing FAQPage schema. Only Article + Review present.
13. ✅ Image Alt Text — PASS
14. ✅ Flesch-Kincaid — PASS (Grade 7)
15. ✅ MDX Syntax — PASS

RECOMMENDATION:
Move H1 earlier (before 100 words). Add FAQPage schema.
Then run /delta-validate again.
```

---

## OUTPUT FORMAT

### Success Summary

```
VALIDATION COMPLETE — All articles passed

Articles validated: 3
Articles passed: 3
Articles failed: 0

Moved to approved/:
✅ happy-juice-bijwerkingen-huid-APPROVED.mdx
✅ edge-plus-mango-focus-APPROVED.mdx
✅ rootist-lange-haar-APPROVED.mdx

Next step: /delta-publish will deploy these Friday 4pm.
```

### Failure Summary

```
VALIDATION COMPLETE — Some articles need review

Articles validated: 4
Articles passed: 3
Articles failed: 1

Moved to approved/:
✅ happy-juice-bijwerkingen-huid-APPROVED.mdx
✅ edge-plus-mango-focus-APPROVED.mdx

Needs manual review:
❌ nitro-xtreme-bijwerkingen-DRAFT.mdx
   → Failed checks: #4 (H1 placement), #12 (JSON schema)
   → Error log: shared/content/drafts/nitro-xtreme-bijwerkingen-ERRORS.txt

Action: Review errors, fix article, re-run /delta-validate.
```

---

## ERROR HANDLING

| Scenario | Action |
|----------|--------|
| Article file doesn't exist | Log warning, skip file, continue. |
| MDX syntax invalid | Move to approved/ anyway, flag "NEEDS MANUAL PARSE CHECK". |
| Keyword density too high | Flag in error log, suggest rewriting sections. |
| No internal links | Flag, suggest 2 relevant articles to link. |
| AffiliateCTA format wrong | Flag, show correct format. |
| Readability too high | Suggest simplifying sentences, breaking paragraphs. |

---

## AUTO-FIX OPPORTUNITIES

These can be auto-corrected without manual review:

```
❌ Missing image alt text → Try to infer from context, add placeholder
❌ Title too long → Truncate to 60 chars
❌ Meta description too long → Truncate to 155 chars
❌ Frontmatter missing optional field → Add default value
✅ Keyword density too high → Flag for manual rewrite (don't auto-fix)
✅ H1 placement wrong → Flag, don't move (user might prefer structure)
```

For others: Always flag and wait for manual review. Don't auto-edit critical content.

---

## QUALITY CHECKLIST (Before Reporting)

Before finishing validation run:
- ✅ All articles in drafts/ checked
- ✅ Passing articles moved to approved/
- ✅ Error logs created for failing articles
- ✅ Summary report generated
- ✅ shared/memory/content_queue.md updated
- ✅ Metrics logged to shared/metrics/

---

**Skill Version**: 1.0  
**Last Updated**: 2026-05-12  
**Status**: Ready to run
