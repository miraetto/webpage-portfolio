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
        soft: "0 22px 70px rgba(0, 0, 0, 0.3)",
        gold: "0 0 0 1px rgba(199, 166, 91, 0.28), 0 18px 60px rgba(0, 0, 0, 0.36)"
      },
      backgroundImage: {
        glow:
          "radial-gradient(circle at top, rgba(199, 166, 91, 0.12) 0%, rgba(199, 166, 91, 0) 44%)"
      }
    }
  },
  plugins: []
};

module.exports = config;
