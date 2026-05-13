/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f2b4c',
        'primary-light': '#1d4a7a',
        accent: '#c24a1a',
        'accent-light': '#fdf4ed',
        'bg-soft': '#f6f8fa',
        'bg-white': '#ffffff',
        'text': '#111827',
        'text-muted': '#5a6470',
        'border': '#e2e6eb',
        'divider': '#d1d5db',
        success: '#1a6840',
        error: '#b83230',
        warning: '#c24a1a',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-left))',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        'elevated': '0 8px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
