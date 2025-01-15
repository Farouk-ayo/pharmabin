import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#157D18",
        primaryDark: "#023022",
        secondary: "#FFB506",
        tertiary: "#157D1861",
        tertiary1: "#FFB50661",
        tertiary2: "#02302240",
        tertiary3: "#023022",
        textPrimary: "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;
