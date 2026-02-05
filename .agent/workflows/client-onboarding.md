---
description: Onboard a new remodeler client to the agency
---

# Client Onboarding Workflow

Set up a new client in the Remodeler Booked system.

## Steps

### 1. Create Client Folder
```
clients/[client-name]/
├── README.md
├── brand/
└── testimonials/
```

### 2. Gather Client Info
Fill out the client README with:
- Business name and contact info
- Service area
- Specialties (Kitchen, Bath, Whole Home)
- Current marketing status
- Goals and budget

### 3. Collect Brand Assets
Request from client:
- [ ] Logo (PNG, high-res)
- [ ] Brand colors (if different from RB defaults)
- [ ] 5+ before/after project photos
- [ ] 3+ written reviews/testimonials
- [ ] License/insurance badges

Save to `clients/[client-name]/brand/` and `clients/[client-name]/testimonials/`.

### 4. GHL Sub-Account Setup
- Create sub-account following naming: `[RB] - [Client Name]`
- Apply RB snapshot/template
- Add domains and integrations

### 5. Plan First Campaign
Run `/new-campaign` workflow to create first campaign.
