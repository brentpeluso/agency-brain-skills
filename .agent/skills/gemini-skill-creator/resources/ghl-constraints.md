# GHL Implementation Guidelines & Tech Stack

## Core Technologies
- **Platform:** Go High Level (HighLevel)
- **Builder:** GHL Drag & Drop Builder (New)
- **Styling:** Custom CSS (at page level or funnel level)
- **Scripting:** Custom JavaScript (Footer tracking code)

## Implementation Rules

### 1. Element Usage
- **Native First:** ALWAYS use native GHL elements (Forms, Surveys, Calendars, Video) before custom code.
- **Global Sections:** Use Global Sections for Headers and Footers to ensure consistency across the funnel.
- **Naming:** Name every section and detailed element in the sidebar (e.g., `Header - Desktop`, `Section - Testimonials`) for easier maintenance.

### 2. Styling (CSS)
- **Avoid !important:** Try to use specific selectors instead of forcing styles, unless overriding GHL defaults is impossible otherwise.
- **Mobile First:** GHL has separate Mobile/Desktop views. Check both constantly.
- **CSS Class Naming:** Prefix custom classes with `rb-` (Remodeler Booked) to avoid conflicts (e.g., `.rb-hero-btn`).

### 3. forbidden Patterns
- **No Heavy External Libs:** Do not load jQuery or heavy frameworks unless absolutely necessary; GHL pages need to load fast.
- **No Broken Layouts:** Do not use negative margins that might break on mobile devices.

### 4. Integration
- **Forms:** Embed GHL forms, do not build custom HTML forms (loses tracking).
- **Calendars:** Use the "Booked Appointment" trigger in Automations, do not rely solely on button clicks.
