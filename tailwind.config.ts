import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF8",
        "bg-muted": "#F4F3F0",
        "bg-paper": "#FFFFFF",
        fg: "#1A1A1A",
        "fg-muted": "#5C5C58",
        border: "#EAE9E4",
        "border-strong": "#2A2A28",
        "invert-bg": "#2A2A28",
        "invert-fg": "#FAFAF8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontWeight: {
        // Cap UI at 700 for classical freeze
        bold: "700",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "10px",
        xl: "10px",
        "2xl": "10px",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(26 26 26 / 6%)",
        paper: "0 8px 24px rgb(26 26 26 / 6%)",
        stage: "0 12px 40px -12px rgb(42 42 40 / 14%)",
      },
      letterSpacing: {
        display: "-0.04em",
        tightest: "-0.05em",
      },
    },
  },
  plugins: [],
};

export default config;
