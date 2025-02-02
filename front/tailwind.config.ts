import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/views/**/*.{js,jsx,ts,tsx}",
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
    safelist: [
      'text-cyan-600',
      'text-custom-pink',
      'text-gray-900',
      'bg-custom-green',
      'bg-indigo-500', // Agrega todas las clases que podrías necesitar
    ],
  },
  plugins: [],
} satisfies Config;
