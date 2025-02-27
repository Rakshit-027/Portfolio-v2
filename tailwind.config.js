// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        Tajawal: ['Tajawal', 'serif'], // Replace with your font name and fallback
      },
    },
  },
  plugins: [],
};
