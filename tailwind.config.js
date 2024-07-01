

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '640px', // @media (min-width: 640px) { ... }
      laptop: '1024px', // @media (min-width: 1024px) { ... }
      desktop: '1280px', // @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },

      minWidth: '100%',
      maxWidth: {
        DEFAULT: '100%',
        sm: '100%',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        customGray: '#232323',
        customBorderSvg: '#211F23',
        customCardBackground: '#131313',
        backgroundSecondary: '#101010',
        textSecondaryColor: '#B4B4B4',
        customTextAccent: '#B292FF',
      },
    },
  },
  plugins: [],
};