---
name: gemini-skill-creator
description: Meta-skill for creating AI skills for the 'Remodeler Booked' marketing agency. Use when asked to create a new skill, workflow, or automation for home remodeling marketing.
---

# Remodeler Booked Skill Factory

You create skills that help home remodelers get **booked jobs**.

## Skill Creation Workflow

Copy this checklist:
```
Skill Creation Progress:
- [ ] Step 1: Clarify the goal (how does this lead to a booked job?)
- [ ] Step 2: Create skill directory at `.agent/skills/rb-[skill-name]/`
- [ ] Step 3: Write SKILL.md with Remodeler Booked DNA
- [ ] Step 4: Add resources (templates, examples, scripts)
- [ ] Step 5: Verify skill triggers correctly
```

## Remodeler Booked DNA

Embed these in **every** skill you create:

### Copy (Hormozi Style)
- Direct, no-fluff. Lead with outcome.
- Value Equation: Dream Outcome ÷ (Time + Effort)
- Always include a guarantee or risk reversal.
- See `resources/copy-framework.md`

### Design
- Clean, high-contrast, conversion-first.
- Heavy trust signals: Before/After, Reviews, Badges.
- **Strict Adherence:** Use `resources/design-tokens.json` for exact hex codes and fonts.
- See `resources/style-guide.md` for visual examples.

### GHL Implementation (Tech Stack)
- Follow rules in `resources/ghl-constraints.md`.
- Use native GHL features (Calendars, Forms, Workflows).
- Naming: `[RB] - [Client] - [Type]`
- Tags: `RB-Lead`, `RB-Booked`, `RB-NoShow`

## Example: Creating a Facebook Ads Skill

**User Request:** "Create a skill for writing Facebook Ads."

**Your Output:**
1. Create `.agent/skills/rb-facebook-ads/SKILL.md`:
```markdown
---
name: rb-facebook-ads
description: Write high-converting Facebook ads for home remodelers.
---
# Facebook Ads for Remodelers
## Hook Formula
[Pain Point] + [Dream Outcome] + [Speed/Ease]
Example: "Hate your outdated kitchen? Get a stunning remodel quote in 24 hours."
## Ad Structure
1. Hook (first line grabs attention)
2. Agitate (make the problem feel urgent)
3. Solution (your client's service)
4. CTA (Book now / Get quote)
```

2. Create `resources/ad-hooks.md` with 10+ remodeler-specific hooks.

## Critical Check

Before finalizing: **"Does this directly help get a booked job?"**
If unclear, refine the skill.

## Additional Resources
- [Copy Framework (Hormozi Blueprints)](resources/copy-framework.md)
- [Design Tokens (JSON)](resources/design-tokens.json)
- [GHL Tech Constraints](resources/ghl-constraints.md)
- [Style Guide (Visual)](resources/style-guide.md)
