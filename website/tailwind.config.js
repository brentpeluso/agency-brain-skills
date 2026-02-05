/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
  ],
  // Safelist ALL common utility classes so the compiled CSS works with GHL
  safelist: [
    // Layout & Position
    { pattern: /^(flex|grid|block|inline|hidden|absolute|relative|fixed|sticky)/ },
    { pattern: /^(top|bottom|left|right|inset)-/ },
    { pattern: /^z-/ },
    // Spacing
    { pattern: /^(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr)-/ },
    { pattern: /^(gap|space)-/ },
    // Sizing
    { pattern: /^(w|h|min-w|min-h|max-w|max-h)-/ },
    // Flexbox & Grid
    { pattern: /^(items|justify|content|self|place)-/ },
    { pattern: /^(flex-|grow|shrink|basis|order)-/ },
    { pattern: /^grid-/ },
    { pattern: /^col-/ },
    { pattern: /^row-/ },
    // Typography
    { pattern: /^(text|font|leading|tracking|whitespace|break|truncate)/ },
    // Backgrounds
    { pattern: /^bg-/ },
    { pattern: /^(from|via|to)-/ },
    // Borders
    { pattern: /^(border|rounded|ring|outline)-/ },
    // Effects
    { pattern: /^(shadow|opacity|blur|brightness|contrast|grayscale|filter)/ },
    { pattern: /^(backdrop|transition|duration|ease|delay|animate)/ },
    { pattern: /^(scale|rotate|translate|skew|transform|origin)-/ },
    // Interactivity
    { pattern: /^(cursor|pointer-events|select|resize|scroll)/ },
    { pattern: /^(overflow|object|aspect)-/ },
    // States
    { pattern: /^hover:/ },
    { pattern: /^focus:/ },
    { pattern: /^active:/ },
    { pattern: /^group-hover:/ },
    { pattern: /^dark:/ },
    // Responsive
    { pattern: /^sm:/ },
    { pattern: /^md:/ },
    { pattern: /^lg:/ },
    { pattern: /^xl:/ },
    { pattern: /^2xl:/ },
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#142B47",
        secondary: "#437453",
        "background-light": "#F8FAFC",
        "background-dark": "#0F172A"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}
