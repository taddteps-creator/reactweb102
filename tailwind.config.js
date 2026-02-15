/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#F26076',
        primaryContent: '#FF9760',
        primarySubcontent: '#FFD150',
        primaryBase: '#458B73',
        primaryAccent: '#1C0770',
        primaryBg: '#261CC1',
      },
    },
  },
  plugins: [],
}
