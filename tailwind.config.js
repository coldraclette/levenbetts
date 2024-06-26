/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif'],
    },
    colors: {
      black: '#282828',
      grey: '#b5b5b5',
      white: '#FFFFFF',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xl_2: '1291px',
      '2xl': '1600px',
      '3xl': '1920px',
    },
  },
  plugins: [],
};
