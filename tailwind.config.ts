import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      '2xs': '375px',
      '3xs': '430px',
      'sm': '480px',
      '2sm': '560px',
      '3sm': '640px',
      'md': '768px',
      '2md': '860px',
      '3md': '980px',
      'lg': '1024px',
      '2lg': '1180px',
      '3lg': '1280px',
      'xl': '1440px',
      '2xl': '1600px',
      '3xl': '1800px',
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        purplePrimary: "#42404c",
        purpleSecondary: "#e8e0de",
        creamPrimary: "#b7a38c",
        creamSecondary: "#f3ede8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
