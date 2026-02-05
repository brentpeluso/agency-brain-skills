---
name: rb-ghl-automation
description: Automate GoHighLevel tasks directly from the workspace. Use for contact management, sending messages, and calendar operations.
---

# GoHighLevel Automation Skill

This skill allows you to interact with your GoHighLevel (GHL) account directly. It provides scripts that function similarly to an MCP server, allowing you to read/write data to your CRM.

## 🔑 Prerequisites

1.  **API Key (PIT):** You must have a Private Integration Token.
2.  **Location ID:** The specific Sub-Account ID you are working in.
3.  **Environment Variables:** Ensure these are set in a `.env` file in the skill's specific `scripts` directory or the project root (scripts will look for them).
    *   `GHL_PRIVATE_INTEGRATION_TOKEN`
    *   `GHL_LOCATION_ID`

## 🛠️ Available Capabilities

### 1. Contacts
*   **Find Contact:** Search by email or phone.
*   **Create/Update Contact:** Add new leads or update existing details.
*   **Add Tag:** Apply specific tags like `RB-Lead` or `RB-Booked`.

### 2. Conversations
*   **Get History:** Retrieve past SMS/Email conversations.
*   **Send Message:** Send an SMS or Email to a contact.

### 3. Calendars
*   **Get Slots:** Check available appointment slots.
*   **Book Appointment:** Schedule a new booked job or call.

## 🚀 How to Use

Run the scripts located in `.agent/skills/rb-ghl-automation/scripts/`.

**Example:**
```bash
node .agent/skills/rb-ghl-automation/scripts/get_contact.js "lead@example.com"
```

## ⚠️ Agency Standards

*   **Tags:** Always use `RB-` prefixed tags for automation triggers.
*   **Safety:** Scripts are strictly scoped. Do not modify the scripts to bypass scoping without approval.
