/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Champagne + Bronze palette
        champagne: {
          50:  '#FFFDF7',
          100: '#FBF4E2',
          200: '#F7E7CE', // primary background
          300: '#F0D9B0',
          400: '#E6C589',
        },
        cream: '#FFFDD0',     // surface / cards
        bronze: {
          DEFAULT: '#A47148', // primary accent
          light:   '#C28E5E',
          dark:    '#7E5631',
        },
        ink: {
          DEFAULT: '#2A2A2A', // body text
          soft:    '#4A4543',
          muted:   '#7A6F66',
        },
        // legacy neev-* aliases mapped onto the new palette so existing
        // components keep working while we migrate.
        'neev-blue':     '#A47148',
        'neev-sky':      '#C28E5E',
        'neev-pink':     '#A47148',
        'neev-rose':     '#E6C589',
        'neev-orange':   '#A47148',
        'neev-coral':    '#C28E5E',
        'neev-mustard':  '#E6C589',
        'neev-gold':     '#A47148',
        'neev-rust':     '#7E5631',
        'neev-burgundy': '#5B3A1F',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body:    ['Montserrat', 'sans-serif'],
        lobster: ['Montserrat', 'sans-serif'],
        dancing: ['Montserrat', 'sans-serif'],
        pacifico:['Montserrat', 'sans-serif'],
        satisfy: ['Montserrat', 'sans-serif'],
        courgette:['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        // Layered 3D depth system
        'soft':    '0 1px 2px rgba(42,42,42,0.04), 0 2px 6px rgba(42,42,42,0.04)',
        'elev-1':  '0 2px 4px rgba(42,42,42,0.05), 0 8px 20px -6px rgba(126,86,49,0.10)',
        'elev-2':  '0 4px 8px rgba(42,42,42,0.06), 0 18px 40px -12px rgba(126,86,49,0.18)',
        'elev-3':  '0 8px 16px rgba(42,42,42,0.08), 0 30px 60px -18px rgba(126,86,49,0.25)',
        'inset-soft': 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(126,86,49,0.08)',
        'bronze-glow': '0 10px 30px -10px rgba(164,113,72,0.45)',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle':      'wiggle 1s ease-in-out infinite',
        'gradient':    'gradient 8s linear infinite',
        'fade-in-up':  'fade-in-up 0.7s ease-out both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%':      { transform: 'rotate(3deg)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
