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
    'bg-blue-50', 'bg-blue-100', 'bg-blue-500', 'bg-blue-600', 'text-blue-700', 'text-blue-600', 'border-blue-200', 'border-blue-500',
    'bg-purple-50', 'bg-purple-100', 'bg-purple-500', 'bg-purple-600', 'text-purple-700', 'text-purple-600', 'border-purple-200', 'border-purple-500',
    'bg-green-50', 'bg-green-100', 'bg-green-500', 'bg-green-600', 'text-green-700', 'text-green-600', 'border-green-200', 'border-green-500',
    'bg-orange-50', 'bg-orange-100', 'bg-orange-500', 'bg-orange-600', 'text-orange-700', 'text-orange-600', 'border-orange-200', 'border-orange-500',
    'bg-indigo-50', 'bg-indigo-100', 'bg-indigo-500', 'bg-indigo-600', 'text-indigo-700', 'text-indigo-600', 'border-indigo-200', 'border-indigo-500',
    'bg-red-50', 'bg-red-100', 'bg-red-500', 'bg-red-600', 'text-red-700', 'text-red-600', 'border-red-200', 'border-red-500',
    'bg-pink-50', 'bg-pink-100', 'bg-pink-500', 'bg-pink-600', 'text-pink-700', 'text-pink-600', 'border-pink-200', 'border-pink-500',
    'bg-yellow-50', 'bg-yellow-100', 'bg-yellow-500', 'bg-yellow-600', 'text-yellow-700', 'text-yellow-600', 'border-yellow-200', 'border-yellow-500',
    'bg-teal-50', 'bg-teal-100', 'bg-teal-500', 'bg-teal-600', 'text-teal-700', 'text-teal-600', 'border-teal-200', 'border-teal-500',
    'bg-gray-50', 'bg-gray-100', 'bg-gray-500', 'bg-gray-600', 'text-gray-700', 'text-gray-600', 'border-gray-200', 'border-gray-500',
    'from-blue-500', 'to-blue-600', 'from-purple-500', 'to-purple-600', 'from-green-500', 'to-green-600',
    'from-orange-500', 'to-orange-600', 'from-indigo-500', 'to-indigo-600', 'from-red-500', 'to-red-600',
    'from-pink-500', 'to-pink-600', 'from-yellow-500', 'to-yellow-600', 'from-teal-500', 'to-teal-600',
    'from-gray-500', 'to-gray-600'
  ],
};