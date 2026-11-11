import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: {
  colors: { ivory: "rgb(var(--ivory) / <alpha-value>)", ink: "rgb(var(--ink) / <alpha-value>)", mute: "#7d6a60", line: "#EADFD3", blush: "#F2CFCF", sage: { DEFAULT: "rgb(var(--sage) / <alpha-value>)", dark: "rgb(var(--sage-dark) / <alpha-value>)" }, gold: "rgb(var(--gold) / <alpha-value>)", mist: "#E3ECF1" },
  fontFamily: { script: ["var(--font-script)", "cursive"], serif: ["var(--font-pick, var(--font-serif))", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
  keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } } }, animation: { float: "float 5s ease-in-out infinite" } } }, plugins: [] } satisfies Config;
