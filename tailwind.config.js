/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 0px 16px rgba(255, 255, 255, 0.3)',
      },
      colors: {
        'twitter-blue': '#1da1f2',
        'twitter-dark': '#15202b',
      },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      },
      
    },
  },
  plugins: [],
}

