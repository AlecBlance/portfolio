import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        dots: "url('/bg.svg')",
      },
      colors: {
        "portfolio-primary": "#0F0F0F",
        "portfolio-secondary": "#FFFFFF",
        "portfolio-accent": "#FE4E6D",
        "portfolio-glass": "#4F4F4F",
        "portfolio-glass-stroke": "#383838",
        "portfolio-gray": "#898989",
        "portfolio-lightgray": "#2F2F2F",
        "portfolio-black": "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
