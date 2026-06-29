/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "var(--bg)",
        obsidian: "var(--bg)",
        ink: "var(--fg)",
        ivory: "var(--ivory)",
        gold: "var(--gold)",
        bronze: "var(--bronze)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        line: "var(--line)",
        card: "var(--card)"
      },
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
        serif: ["Noto Sans KR", "sans-serif"]
      },
      boxShadow: {
        soft: "0 22px 70px rgba(12, 8, 10, 0.34)",
        gold: "0 0 0 1px rgba(213, 160, 147, 0.24), 0 18px 60px rgba(12, 8, 10, 0.38)"
      },
      backgroundImage: {
        glow:
          "radial-gradient(circle at top, rgba(213, 160, 147, 0.12) 0%, rgba(213, 160, 147, 0) 44%)"
      }
    }
  },
  plugins: []
};

module.exports = config;
