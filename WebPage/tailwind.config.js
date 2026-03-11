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
        ink: "var(--fg)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        line: "var(--line)",
        card: "var(--card)"
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "SUIT Variable",
          "Noto Sans KR",
          "Apple SD Gothic Neo",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 16px 60px rgba(23, 23, 23, 0.08)"
      },
      backgroundImage: {
        glow:
          "radial-gradient(circle at top, rgba(255, 255, 255, 0.84) 0%, rgba(255, 255, 255, 0) 42%)"
      }
    }
  },
  plugins: []
};

module.exports = config;
