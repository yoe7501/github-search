import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backGround: 'rgba(var(--backGround))',
        card: 'rgba(var(--card))',
        font: 'rgba(var(--font))',
        innerCard: 'rgba(var(--innerCard))',
        search: 'rgba(var(--search))',
        icon: 'rgba(var(--icon))',
      },
    },
  },
  plugins: [],
};
export default config;

