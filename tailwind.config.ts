import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1)" },
        },
        moveBanner: {
          "0%": {
            transform: "translateY(10rem) rotateY(-30deg)",
          },
          "100%": {
            transform: "translateY(0) rotateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        zoom: "zoom 25s",
        moveBanner: "moveBanner 25s",
      },
    },
  },
  plugins: [],
};
export default config;
