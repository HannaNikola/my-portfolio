

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
        DEFAULT: '20px',
        tablet: '32px',
        laptop: '64px',
        desktop: '8opx',
      },

      minWidth: '100%',
      maxWidth: {
        DEFAULT: '100%',
        tablet: '100%',
        laptop: '960px',
        desktop: '1140px',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
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