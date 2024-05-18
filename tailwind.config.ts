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
        'brown': '#221007',
        'secondary': '#696a6d'
      },
      backgroundImage: {
        'pattern': "url('/newsletter-pattern.png')"
        // 'pattern': "url('/no-bg.jpg')"
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    // themes: ["light"]
    // themes: false,
    darkTheme: false
  }
  
};
export default config;
