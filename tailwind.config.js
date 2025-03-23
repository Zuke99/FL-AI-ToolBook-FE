/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "primary-color": "rgba(0, 224, 146)",
      },
      fontFamily: {
        calibri: ['Calibri', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        'regular': 400,
        'medium': 500,
        'semi-bold': 600,
        'bold': 700,
      },
    },
  },
  plugins: [

  ],
}
