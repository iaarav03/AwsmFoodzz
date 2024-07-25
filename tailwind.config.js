/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'tangerine': ['Tangerine', 'cursive'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Dancing Script Utilities
        '.dancing-script-400': {
          fontFamily: '"Dancing Script", cursive',
          fontOpticalSizing: 'auto',
          fontWeight: '400',
          fontStyle: 'normal',
        },
        '.dancing-script-500': {
          fontFamily: '"Dancing Script", cursive',
          fontOpticalSizing: 'auto',
          fontWeight: '500',
          fontStyle: 'normal',
        },
        '.dancing-script-600': {
          fontFamily: '"Dancing Script", cursive',
          fontOpticalSizing: 'auto',
          fontWeight: '600',
          fontStyle: 'normal',
        },
        '.dancing-script-700': {
          fontFamily: '"Dancing Script", cursive',
          fontOpticalSizing: 'auto',
          fontWeight: '700',
          fontStyle: 'normal',
        },
        // Tangerine Utilities
        '.tangerine-regular': {
          fontFamily: '"Tangerine", cursive',
          fontWeight: '400',
          fontStyle: 'normal',
        },
        '.tangerine-bold': {
          fontFamily: '"Tangerine", cursive',
          fontWeight: '700',
          fontStyle: 'normal',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}