---
name: zeta-design
description: Design agent — product animations, prototypes, infographics, presentations, design critiques using huashu-design
---

# Zeta Design Skill

When invoked, this agent reads the huashu-design skill specification and executes design tasks for the AmareReview.nl project.

## Startup

1. Read `shared/skills/huashu-design/SKILL.md` — full design agent behavior
2. Read `shared/skills/huashu-design/references/workflow.md` — workflow guide
3. Check `agents/zeta/memory/` for any in-progress tasks

## Input Sources

- **Orchestrator**: Direct task assignment
- **Beta Agent**: Content to visualize
- **Delta Agent**: Pages to design assets for

## Output Destinations

- `shared/design/` — Final design files
- `amarereview.nl/public/images/` — Production images
- `agents/zeta/memory/` — Task logs and status
