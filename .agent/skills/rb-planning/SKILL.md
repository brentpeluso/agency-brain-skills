---
name: rb-planning
description: Use AFTER brainstorming. Breaks down a marketing strategy into step-by-step Go High Level (GHL) implementation tasks.
---

# GHL Implementation Planning

**Goal:** Create a detailed, click-by-click plan to build the campaign in Go High Level.

## Planning Workflow

Copy this checklist:
```
Planning Progress:
- [ ] Step 1: Review constraints (colors, fonts, tech stack)
- [ ] Step 2: List required GHL assets (Forms, Cals, Fields)
- [ ] Step 3: Define Funnel Steps (Pages & Layout)
- [ ] Step 4: Map Automations (Triggers & Actions)
- [ ] Step 5: Write the Implementation Plan Document
```

## The "Remodeler Booked" Standard

**Assume the builder has NO CONTEXT.** You must specify:
- **Colors:** Refer to `resources/design-tokens.json` (e.g., "Use Primary Green #4D8B55 for buttons").
- **Tags:** Define exact tag names (e.g., `RB - Kitchen Promo - Lead`).
- **Naming:** Follow `[RB] - [Client] - [Campaign]` naming convention.

## Output Structure

Write the plan to `docs/plans/YYYY-MM-DD-[campaign]-build.md` using this template:

```markdown
# [Campaign Name] implementation Plan

> **Design Refs:** Use `.agent/skills/gemini-skill-creator/resources/design-tokens.json`
> **Tech Refs:** Use `.agent/skills/gemini-skill-creator/resources/ghl-constraints.md`

## Phase 1: Foundation (Data & Forms)
### Task 1.1: Create Custom Fields
- Field Name: "Remodel Project Type" (Dropdown: Kitchen, Bath, Whole Home)
- Group: "Remodel Project Data"

### Task 1.2: Create Form "Kitchen Promo Form"
- Fields: Name, Email, Phone, Project Type.
- Style: Primary Button (Green), Navy Header.
- **Sticky Contact:** Enabled.

## Phase 2: Funnel Build
### Task 2.1: Landing Page
- **Hero Section:**
  - Headline: [Insert Hook]
  - Subhead: [Insert Value Equation]
  - Element: Form "Kitchen Promo Form"
- **Trust Section:**
  - 3x Testimonials (Grid Layout)
  - License Badges

## Phase 3: Automation
### Task 3.1: Workflow "[RB] - Kitchen Promo - Optin"
- **Trigger:** Form Submitted ("Kitchen Promo Form")
- **Action:** Add Tag `RB - Lead`
- **Action:** SMS to User: "Hey {{contact.first_name}}, thanks for the inquiry..."
- **Action:** Internal Notification to Client.
```

## Execution Handoff
Ask: "Plan created. ready to start building Phase 1?"

## Resources

- [GHL Build Checklist](resources/ghl-checklist.md) — Quick reference for asset creation
- [Design Tokens](../gemini-skill-creator/resources/design-tokens.json) — Colors, fonts, spacing
- [GHL Constraints](../gemini-skill-creator/resources/ghl-constraints.md) — Technical limitations

