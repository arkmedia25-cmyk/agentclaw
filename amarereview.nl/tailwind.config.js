/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a3564',        // Dutch Deep Navy
        'primary-light': '#2a5298', // Mid Blue
        accent: '#d86018',          // Dutch Burnt Orange
        'accent-light': '#fef3e8',  // Light Orange
        'bg-soft': '#f8f9fb',       // Off-white
        'bg-white': '#ffffff',
        'text': '#1c2533',          // Near-black
        'text-muted': '#6b7280',    // Medium Gray
        'border': '#e2e6ec',        // Light Gray
        'divider': '#d1d5db',       // Gray divider
        success: '#1a7a46',         // Dutch Green
        error: '#c0392b',           // Deep Red
        warning: '#d86018',         // Orange
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-left))',
      },
    },
  },
  plugins: [],
}
