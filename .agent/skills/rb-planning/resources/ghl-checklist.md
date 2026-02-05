# GHL Build Checklist

Quick reference for building campaigns in Go High Level.

---

## Pre-Build Checklist

Before building anything, confirm:

- [ ] Client sub-account exists: `[RB] - [Client Name]`
- [ ] Custom domain connected (for funnels)
- [ ] Twilio configured (for SMS)
- [ ] SMTP configured (for email)
- [ ] Calendar availability set

---

## Asset Creation Order

**Build in this order** to avoid dependency issues:

### 1. Custom Fields (Settings → Custom Fields)
Create all custom fields FIRST. Common fields:
- `Remodel Project Type` (Dropdown: Kitchen, Bath, Whole Home, Addition)
- `Timeline` (Dropdown: ASAP, 1-3 months, 3-6 months, Just researching)
- `Budget Range` (Dropdown: $25K-$50K, $50K-$100K, $100K+)
- `Lead Source` (Text or Dropdown)

### 2. Tags (Settings → Tags)
Create tags for automation:
- `RB - Lead`
- `RB - Qualified`
- `RB - Booked`
- `RB - No Show`
- `RB - Won`
- `RB - Lost`

### 3. Forms (Sites → Forms)
Create forms that map to custom fields:
- Name: `[RB] - [Client] - [Campaign] Form`
- Enable **Sticky Contact**
- Style per design tokens

### 4. Calendar (Settings → Calendars)
Create booking calendar:
- Name: `[RB] - [Client] - Consultation`
- Set availability, buffer times
- Connect to form for booking

### 5. Funnel Pages (Sites → Funnels)
Build landing pages:
- Name: `[RB] - [Client] - [Campaign]`
- Hero → Trust → Form structure
- Use design tokens for styling

### 6. Automation Workflows (Automation → Workflows)
Build workflows last:
- Name: `[RB] - [Client] - [Trigger Description]`
- Common triggers:
  - Form Submitted
  - Tag Added
  - Appointment Booked
  - Appointment Missed

---

## Naming Convention Summary

| Asset Type | Format |
|------------|--------|
| Sub-Account | `[RB] - [Client Name]` |
| Form | `[RB] - [Client] - [Campaign] Form` |
| Calendar | `[RB] - [Client] - Consultation` |
| Funnel | `[RB] - [Client] - [Campaign]` |
| Workflow | `[RB] - [Client] - [Trigger]` |
| Tag | `RB - [Status]` |

---

## Common Workflow Patterns

### Lead Capture
```
Trigger: Form Submitted
→ Add Tag: RB - Lead
→ SMS to Contact: "Thanks {{first_name}}..."
→ Internal Notification
→ Wait 5 min
→ Email: Value delivery
```

### Appointment Booked
```
Trigger: Appointment Booked
→ Add Tag: RB - Booked
→ Remove Tag: RB - Lead
→ SMS Confirmation
→ Add to Follow-up Campaign
```

### No Show
```
Trigger: Appointment Missed
→ Add Tag: RB - No Show
→ Wait 30 min
→ SMS: "We missed you..."
→ Auto-reschedule link
```

---

## Quality Checks

Before launching:
- [ ] Form tested (submit test lead)
- [ ] All automations tested
- [ ] Calendar synced to owner's calendar
- [ ] Phone number verified
- [ ] Domain SSL active
- [ ] Tracking pixels installed
