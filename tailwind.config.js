/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E508C1',
        secondary: '#20DBFE',
        accent: '#704d99',
      },
      keyframes: {
        'slow-glow': {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.8 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        'slow-glow': 'slow-glow 3s infinite',
      },
    },
  },
  plugins: [],
};
