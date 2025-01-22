import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-green': '#D5F26D',
        'custom-pink': '#F23D6D',
        'custom-lime-pastel': '#EDFFAB',
      },
    },
  },
  plugins: [],
} satisfies Config;
