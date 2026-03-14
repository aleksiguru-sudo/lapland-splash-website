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
        yellow: "#DFC13F",
        navy: "#104D80",
        skyblue: "#E0F1FF",
        lavender: "#B1B7E6",
        dark: "#121212",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Arimo", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
