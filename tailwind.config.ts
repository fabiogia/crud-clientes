import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        "_45": "-45deg",
      },
      colors: {
        "salmon": "#E7C192",
        "transparent": "rgb(0,0,0,0)",
        "half-transparent": "rgb(0,0,0,0.8)",
      },
      transmitionProperty: {
        "width": "width"
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
export default config;
