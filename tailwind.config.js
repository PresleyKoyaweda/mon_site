/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-50', 'bg-blue-100', 'bg-blue-500', 'text-blue-700', 'border-blue-200',
    'bg-purple-50', 'bg-purple-100', 'bg-purple-500', 'text-purple-700', 'border-purple-200',
    'bg-green-50', 'bg-green-100', 'bg-green-500', 'text-green-700', 'border-green-200',
    'bg-orange-50', 'bg-orange-100', 'bg-orange-500', 'text-orange-700', 'border-orange-200',
    'bg-indigo-50', 'bg-indigo-100', 'bg-indigo-500', 'text-indigo-700', 'border-indigo-200',
    'bg-red-50', 'bg-red-100', 'bg-red-500', 'text-red-700', 'border-red-200',
  ],
};