/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        neonBlue: '#00d5ff',
        neonPink: '#ff2fd6',
        void: '#08071f',
      },
      boxShadow: {
        neon: '0 0 28px rgba(0, 213, 255, .45), 0 0 56px rgba(255, 47, 214, .28)',
        pink: '0 0 30px rgba(255, 47, 214, .55)',
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 1.9s ease-in-out infinite',
        ticker: 'ticker 28s linear infinite',
        spinSlow: 'spin 15s linear infinite',
        shake: 'shake .35s linear infinite',
        scan: 'scan 2.6s linear infinite',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(0,213,255,.45))' },
          '50%': { filter: 'drop-shadow(0 0 22px rgba(255,47,214,.75))' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-3px) rotate(-.4deg)' },
          '75%': { transform: 'translateX(3px) rotate(.4deg)' },
        },
        scan: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
