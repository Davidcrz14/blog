/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#e5e5e5",
        accent: "#000000",
        border: "#cccccc",
        'retro-gray': '#808080',
      },
      fontFamily: {
        'retro': ['Space Mono', 'monospace'],
        'heading': ['VT323', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'terminal-blink': 'blink 1s step-end infinite',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}

