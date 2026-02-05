---
description: Create a new marketing campaign from ideation to GHL build plan
---

# New Campaign Workflow

Follow these steps to create a complete marketing campaign for a remodeler client.

## Prerequisites
- Client name and niche (Kitchen, Bath, Whole Home, etc.)
- Campaign goal (leads, bookings, reactivation)

## Steps

### 1. Create Client Folder (if new client)
Create folder at `clients/[client-name]/` with a README following the template in `clients/README.md`.

### 2. Run Brainstorming
Use the `rb-brainstorming` skill to define the campaign strategy:
- Define the avatar and pain points
- Build the Value Equation (Dream Outcome, Likelihood, Time, Effort)
- Generate 3 hook angles
- Select the delivery vehicle (ads, email, SMS)

**Output:** Save brief to `campaigns/[client-name]/YYYY-MM-DD-[campaign]-brief.md`

### 3. Run Planning
Use the `rb-planning` skill to create the GHL implementation plan:
- List all required GHL assets (forms, calendars, custom fields)
- Define funnel steps and page layouts
- Map automation workflows

**Output:** Save plan to `campaigns/[client-name]/YYYY-MM-DD-[campaign]-plan.md`

### 4. Build in GHL
Follow the plan step-by-step in Go High Level.

### 5. Archive
When campaign is complete, note status in the client README.
