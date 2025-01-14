import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3D8F',
        secondary: '#34A853',
        accent: '#2B2B2B',
        background: '#FAFAFA',
      },
      fontFamily: {
        heading: ['IBM Plex Thai', 'sans-serif'],
        body: ['Anuphan', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 8s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
