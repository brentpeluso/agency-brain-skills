---
name: rb-ghl-page-builder
description: Build high-converting landing pages in GoHighLevel using the visual builder. Enforces Remodeler Booked design standards.
---

# RB GHL Page Builder Skill

Use this skill to build or edit pages in the GoHighLevel (GHL) Website/Funnel Builder.

## 1. The Golden Rule: Native First
**STOP.** Do not immediately reach for Custom HTML/JS.
- **YES:** Use GHL Sections, Rows, Columns, and Elements (Headlines, Buttons, Images).
- **YES:** Use GHL Forms and Calendars for lead capture.
- **NO:** Do not embed custom HTML forms (breaks tracking).
- **NO:** Do not build the whole page in a Custom HTML element (breaks mobile editor).

## 2. Page Hierarchy (The "Box Model")
GHL uses a strict nested hierarchy. You must build in this order:

### Visual Hierarchy (Colors)
1.  **Section (Green)**: The background container. **Cannot** be inside another section.
    -   *Use for:* Screen-width backgrounds, major page divisions.
2.  **Row (Blue)**: The horizontal layout container. Lives INSIDE a Section.
    -   *Use for:* Grouping columns (1-col, 2-col, etc.).
3.  **Column (Pink)**: The vertical stack container. Lives INSIDE a Row.
    -   *Use for:* Stacking elements vertically.
4.  **Element (Orange)**: The actual content node. Lives INSIDE a Column.
    -   *Use for:* Headlines, Buttons, Images, Forms, Custom Code.

### Rules of Nesting
-   **Strict Parent-Child:** Section > Row > Column > Element.
-   **No Skipping:** You cannot put an Element directly into a Section.
-   **Multiplicity:**
    -   A Section can have multiple Rows.
    -   A Row can have multiple Columns.
    -   A Column can have multiple Elements.

## 3. Spacing & Layout (Padding vs Margin)
Control whitespace effectively to create "premium" designs.

### Padding (Internal Space)
-   **What is it?** Space *inside* the border of an element.
-   **Effect:** Pushes content properly away from the edges.
-   **Use Case:** Adding breathing room inside a colored button or section.

### Margin (External Space)
-   **What is it?** Space *outside* the border of an element.
-   **Effect:** Pushes other elements away.
-   **Use Case:** Creating gaps between two stacked buttons or rows.

### Pro Tip for Remodeler Sites
-   **Sections:** Always use `Padding-Top: 80px` and `Padding-Bottom: 80px` for desktop to avoid cramped layouts.
-   **Rows:** Check "Allow Rows to Take Entire Width" for full-bleed functional designs if needed, but usually keep standard width for readability.

## 4. Remodeler Booked Design System
**Strictly** adhere to these tokens. Do not guess colors.

### Colors
- **Primary Navy (Headings/Text):** `#142B47`
- **Growth Green (Buttons/Accents):** `#437453` (Hover: `#365D42`)
- **Background Light:** `#F8FAFC`
- **Background Dark:** `#0F172A`
- **White:** `#FFFFFF`

### Typography
- **Display Font (Headings):** `Poppins` (Weight: 600-800)
- **Body Font:** `Inter` (Weight: 400-600)
- **Line Height:** 1.6 for body text.

### Buttons (Grand Slam CTA)
- **Background:** `#437453` (Green) or `#142B47` (Navy)
- **Text:** `#FFFFFF` (White)
- **Font:** Poppins (Bold, Uppercase, tracking-wide)
- **Padding:** `px-8 py-3.5`
- **Style:** Full width on mobile, auto width on desktop.
- **Hover:** Navy → Green, Green → Navy or White

## 4a. Navbar Standards (CRITICAL)

### The Hardcoded Hex Rule
**ALWAYS use hardcoded Tailwind hex values** in navbar sections instead of utility classes like `bg-primary` or `text-secondary`. This ensures styles display correctly even when the global Tailwind config doesn't load (common issue with `?notrack=true` previews).

**CORRECT:**
```html
<a class="bg-[#142B47] text-white hover:bg-[#437453]" href="#">Book A Free Call</a>
<a class="text-[#142B47] hover:text-[#437453]" href="#">About Us</a>
```

**INCORRECT (may fail to render):**
```html
<a class="bg-primary text-white hover:bg-secondary" href="#">Book A Free Call</a>
```

### Standard Navbar Structure
- **Height:** `h-24` (consistent across all pages)
- **Background:** `bg-white/95 backdrop-blur-md`
- **Border:** `border-b border-slate-200`
- **Position:** `fixed top-0 left-0 w-full z-50`
- **Max Width:** `max-w-7xl mx-auto px-6 lg:px-8`

### Navigation Links
- **Font:** `font-display` (Poppins)
- **Style:** `text-sm font-bold tracking-wide uppercase`
- **Color:** `text-[#142B47]`
- **Hover:** `hover:text-[#437453]` with underline effect via `.nav-link` class

### Active Page Indicator
When on a specific page, style that nav link as "active":
```html
<!-- ACTIVE STATE: Green text with underline -->
<a class="text-sm font-bold text-[#437453] tracking-wide uppercase font-display border-b-2 border-[#437453] pb-1" href="#">
    About Us
</a>
```

### Mobile Menu
Always include a functional mobile menu with hamburger toggle:
```html
<!-- MOBILE MENU BUTTON -->
<div class="md:hidden">
    <button onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" class="text-[#142B47] focus:outline-none p-2">
        <span class="material-symbols-outlined text-4xl">menu</span>
    </button>
</div>

<!-- MOBILE MENU (below main nav div) -->
<div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl">
    <div class="px-6 py-8 space-y-4 flex flex-col">
        <!-- Mobile links here -->
    </div>
</div>
```

**Note:** Use unique IDs for each page's mobile menu (e.g., `mobile-menu-about`, `mobile-menu-faq`) to avoid conflicts.

## 4. Standard Page Structure (Remodeler Niche)

### Section 1: Hero (Above the Fold)
- **Background:** High-quality completed project photo (kitchen/bath) with dark overlay (`#1B2F45`, 80% opacity) OR clean white background with image on right.
- **Headline (H1):** "City's Premier [Service] Contractor" (Montserrat)
- **Subheadline:** Value proposition (Open Sans)
- **CTA:** "Get My Free Quote" or "Book Consultation"

### Section 2: Trust/Social Proof
- **Row:** 3-4 Columns.
- **Elements:** "As Seen On" logos, Google Partner badge, Houzz badge, "5-Star Rated" icon.

### Section 3: The "Mechanism" (Services)
- **Headline (H2):** "Our [Service] Process"
- **Layout:** 3-Column Row.
  1.  **Consultation:** Icon + "We Listen"
  2.  **Design:** Icon + "We Plan"
  3.  **Build:** Icon + "We Execute"

### Section 4: Lead Capture
- **Element:** GHL Form or Calendar embed.
- **Context:** "Ready to start? Tell us about your project."

## 5. Mobile Optimization (Critical)
1.  **Text Size:** Reduce H1 to 24px-32px on mobile (use Mobile Font Size settings).
2.  **Padding:** Use `20px` left/right padding on sections so text doesn't touch edges.
3.  **Visibility (The Toggle):**
    -   If a complex section (like a 4-column timeline) looks terrible on mobile, **DO NOT** struggle with CSS.
    -   **Duplicate** the entire section (Green).
    -   Set one to **"Desktop Only"** (Advanced > Visibility).
    -   Set the other to **"Mobile Only"**.
    -   Simplify the Mobile Only version (e.g., stack elements vertically, remove large images).

## 6. Custom Code & Advanced Styling
While we prefer native tools, some designs require extra polish.

### Where to put Code:
1.  **Custom CSS (Page Level):** `Settings > Custom CSS`. Use for global styles (e.g., changing all button border-radius).
2.  **Custom JS (Page Level):** `Settings > Tracking Code > Footer Code`. Use for tracking scripts or global logic.
3.  **Custom HTML/JS Element:** Use the "Custom HTML/JS" element for specific widgets (e.g., embedding a financing calculator).

### Common CSS Fixes
```css
/* Make mobile buttons full width */
@media (max-width: 480px) {
    .c-btn { width: 100% !important; }
}
```

## 7. Naming Conventions in Sidebar
Rename your elements in the Layer view/sidebar so we can debug later:
-   `Section - Hero`
-   `Row - Key Benefits`
-   `Button - Hero CTA`
-   `Form - Home Page Opt-in`

## 8. Workflow: Manual Custom Code Implementation
Use this workflow when you have a pre-built HTML design that needs to be inserted into GHL while maintaining modularity.

### 1. The "New Section" Loop
For each distinct visual block (Hero, Features, Footer, etc.):

1.  **Add a Section (Green):**
    -   Click the **Green +** button.
    -   Select **"Full Width"**.
    -   **CRITICAL:** Select the Green Section -> Right Sidebar -> Set **Padding-Top** and **Padding-Bottom** to `0px`.
    
2.  **Add a Row (Blue):**
    -   Click **"Add Row"** inside the section.
    -   Select **"1 Column"**.
    -   **CRITICAL:** Check `Allow Rows to Take Entire Width` is set to **ON**.

3.  **Add Custom Code Element (Orange):**
    -   Click **"Add Element"** inside the column.
    -   Search for **"Custom HTML/JS"**.
    -   Click to add.

4.  **Paste & Save:**
    -   Select the "Custom HTML/JS" element.
    -   Click **"Open Code Editor"** in sidebar.
    -   Paste your HTML code.
    -   Click **"Yes, Save"**.

### 2. Global Styles
Always separate your CSS/JS libraries from the section code.
-   Go to **Settings > Custom Code > Header Code**.
-   Add your `<link>` tags for fonts, Tailwind CDN, and global `<style>` blocks here.

