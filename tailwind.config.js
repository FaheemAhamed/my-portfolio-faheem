/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        gradient: 'gradient 3s ease infinite',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shine: 'shine 1.5s ease-in-out infinite',
        'shine-background': 'shine-background 2s ease infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        shine: {
          '0%, 100%': {
            'text-shadow': '0 0 15px rgba(138, 148, 111, 0.6), 0 0 30px rgba(138, 148, 111, 0.4), 0 0 40px rgba(138, 148, 111, 0.3)',
          },
          '50%': {
            'text-shadow': '0 0 20px rgba(138, 148, 111, 0.8), 0 0 40px rgba(138, 148, 111, 0.6), 0 0 50px rgba(138, 148, 111, 0.4)',
          }
        },
        'shine-background': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          }
        }
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
};
