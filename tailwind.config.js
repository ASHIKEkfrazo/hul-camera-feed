/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('./src/assets/Login.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'theme-green': '#023020',
        'theme-peach':"#f5ebe1"
      },
      fontFamily: {
        'sans': ['ui-sans-serif',],
        'serif': ['ui-monospace',],
      },
      keyframes: {
        slideDown: {
          '0%': { maxHeight: '0', },
          '100%': { maxHeight: '500px',}, // Adjust max-height based on content
        },
      },
      animation: {
        slideDown: 'slideDown 5s ease-out',
      },
    },
  },
  plugins: [],
}