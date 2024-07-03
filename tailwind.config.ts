import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        darkgreen: "#005D3D",
        lightgreen: "#29BF12",
        yellow: "#F9CC00",
        lightblue: "#08BDBD",
        pink: "#F21B3F",
        offwhite: '#fdf4dc',
      }
    },
  },
  plugins: [],
};
export default config;
