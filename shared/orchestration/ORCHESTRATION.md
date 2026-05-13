# ORCHESTRATION SYSTEM
## AmareReview.nl Dedicated Agent Team Management

**Orchestrator**: You  
**Team**: 5 specialized agents (Alpha, Beta, Gamma, Delta, Epsilon)  
**Project**: AmareReview.nl (Completely Isolated)  

---

## 🎯 YOUR ROLE (Orchestrator)

You manage the 5-agent team via this system:

### **Daily (1-2 minutes)**
- [ ] Check: `shared/orchestration/team_status.json`
- [ ] Verify: All agents have status "idle" or "active"
- [ ] Alert: If any agent is "blocked", escalate immediately

### **Weekly** (Friday evening, 15 minutes)
- [ ] Read: `shared/orchestration/delta_status.json`
- [ ] Verify: Weekly articles published successfully
- [ ] Review: `shared/metrics/published_WEEK-X.json`
- [ ] Check: Traffic data in GA4
- [ ] Update: `ORCHESTRATION.md` with next week's goals

### **Monthly** (Last Friday, 30 minutes)
- [ ] Review all agent memory logs
- [ ] Analyze: `shared/metrics/seo_ranks.json` (keyword rankings)
- [ ] Update: `shared/orchestration/content_calendar_MONTH.md`
- [ ] Plan: Next month's content strategy

---

## 📊 TEAM STATUS DASHBOARD

**File**: `shared/orchestration/team_status.json`

```json
{
  "week": 1,
  "date": "2026-05-12",
  "orchestrator": "You",
  "team_health": "🟢 Healthy",
  
  "agents": {
    "alpha": {
      "name": "Alpha (Architect)",
      "status": "idle",
      "health": "🟢",
      "last_run": "2026-05-12 10:00",
      "next_task": "On-demand (setup phase complete)"
    },
    "beta": {
      "name": "Beta (Content Master)",
      "status": "pending",
      "health": "🟢",
      "last_run": null,
      "next_task": "Tuesday 2pm (await Epsilon briefs)"
    },
    "gamma": {
      "name": "Gamma (Reviewer)",
      "status": "pending",
      "health": "🟢",
      "last_run": null,
      "next_task": "Thursday 10am (validate Beta drafts)"
    },
    "delta": {
      "name": "Delta (Operations)",
      "status": "pending",
      "health": "🟢",
      "last_run": null,
      "next_task": "Friday 4pm (publish approved articles)"
    },
    "epsilon": {
      "name": "Epsilon (SEO/Research)",
      "status": "active",
      "health": "🟢",
      "last_run": "2026-05-12 08:00",
      "next_task": "Daily 8am (generate briefs)"
    }
  },
  
  "weekly_metrics": {
    "briefs_generated": 0,
    "articles_generated": 0,
    "articles_approved": 0,
    "articles_published": 0,
    "errors": 0,
    "blockers": 0
  },
  
  "critical_alerts": []
}
```

---

## 🔄 WEEKLY WORKFLOW

### **MONDAY 8:00 AM**
- **Agent**: Epsilon
- **Task**: Market research → generate 5-10 briefs
- **Input**: Google Trends, competitor data
- **Output**: `shared/research/briefs_WEEK-X.json`
- **You**: Review briefs, approve top 3 for this week

### **TUESDAY 2:00 PM**
- **Agent**: Beta
- **Task**: Generate article #1
- **Input**: 1 brief from briefs_WEEK-X.json
- **Output**: `shared/content/drafts/[slug]-DRAFT.mdx`
- **You**: Monitor `beta_status.json`

### **WEDNESDAY 2:00 PM**
- **Agent**: Beta
- **Task**: Generate article #2
- **Input**: Next brief
- **Output**: Draft in folder
- **You**: Check progress

### **THURSDAY 10:00 AM**
- **Agent**: Gamma
- **Task**: Validate 3 draft articles
- **Input**: All DRAFT.mdx files from Beta
- **Output**: Move PASS → `shared/content/approved/`
- **You**: Review `gamma_status.json` for failures

### **THURSDAY 2:00 PM**
- **Agent**: Beta
- **Task**: Generate article #3
- **Input**: Remaining brief
- **Output**: Draft in folder
- **You**: Monitor

### **FRIDAY 4:00 PM**
- **Agent**: Delta
- **Task**: Publish approved articles
- **Input**: All APPROVED.mdx files from Gamma
- **Output**: Git → Vercel → GSC → metrics logged
- **You**: Review `delta_status.json` + weekly report

### **FRIDAY 5:00 PM**
- **You**: Review `team_status.json`
- **You**: Log feedback to `shared/memory/feedback.md`
- **You**: Plan next week

---

## 🚨 ESCALATION PROTOCOL

**If any agent is BLOCKED:**

```
1. Check agent's status JSON for error message
2. Review agent's memory log for context
3. If fixable: Guide agent via feedback.md
4. If not fixable: Pause that agent's cron, investigate manually
5. Document: Log to shared/orchestration/communication_log.md
6. Resume: Once blocked, restart agent
```

---

## 📁 KEY FILES

| File | Purpose | Updated By |
|------|---------|------------|
| `team_status.json` | Overall team health | All agents |
| `alpha_status.json` | Setup/health checks | Alpha |
| `beta_status.json` | Article generation | Beta |
| `gamma_status.json` | Validation results | Gamma |
| `delta_status.json` | Publishing metrics | Delta |
| `epsilon_status.json` | Research output | Epsilon |
| `briefs_WEEK-X.json` | Content briefs | Epsilon |
| `published_WEEK-X.json` | Weekly metrics | Delta |
| `communication_log.md` | Handoff records | All agents |
| `ORCHESTRATION.md` | This file (your control) | You |

---

## 🎯 SUCCESS METRICS

Team is healthy when:
- ✅ All agents report "active" or "idle" (no "blocked")
- ✅ 3-4 articles published per week
- ✅ 0 build failures (Vercel)
- ✅ 100% GSC submission rate
- ✅ Organic traffic increasing (GA4)
- ✅ Keyword rankings improving (GSC)

---

## 📌 CRITICAL RULES

```
❌ Never skip reviewing team_status.json
❌ Never ignore "blocked" status
❌ Never force-push to main (let Delta handle Git)
❌ Never edit .env.local (credentials leak)
❌ Never delete published articles without audit
```

---

## 🔗 AGENT COMMUNICATION MAP

```
YOU (Orchestrator)
  │
  ├─→ Alpha: Manages project setup (on-demand)
  │
  ├─→ Epsilon: Daily 8am research
  │       ↓
  │    Outputs: briefs_WEEK-X.json
  │       ↓
  ├─→ Beta: Tue-Thu 2pm article generation
  │       ↓
  │    Outputs: shared/content/drafts/
  │       ↓
  ├─→ Gamma: Thu-Fri 10am validation
  │       ↓
  │    Outputs: shared/content/approved/
  │       ↓
  ├─→ Delta: Fri 4pm publishing
  │       ↓
  │    Outputs: published_WEEK-X.json + Live site
  │
  └─→ YOU: Monitor, escalate, plan
```

---

**Orchestration System Version**: 1.0  
**Created**: 2026-05-12  
**Status**: Ready to manage 5-agent team
