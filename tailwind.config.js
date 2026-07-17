/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fbb040',
        secondary: '#ed5b2d',
        dark: {
          DEFAULT: '#2e2e2e',
          base: '#2e2e2e',
          black: '#000000',
        },
        light: {
          DEFAULT: '#ffffff',
          base: '#faf9f6',
        }
      },
      fontFamily: {
        protest: ['"Protest Riot"', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        now: ['Outfit', 'sans-serif'], // Using Outfit as a modern substitute for 'Now' if not available
      },
      borderRadius: {
        'custom': '12px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'orange': '0 4px 20px rgba(237, 91, 45, 0.2)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
