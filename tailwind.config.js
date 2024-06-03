/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-primary": "#6B8BF5",
        "theme-black-80": "#5D5D67",
        "theme-black-70": "#71727A",
        "theme-black-50": "#9A9AA0",
        "theme-black-25": "#CCCCD0",
        "theme-black-10": "#EBEBEC",

        "theme-black": "#343541",
        "theme-primary-80": "#89A2F7",
        "theme-primary-50": "#B5C5FA",
        "theme-primary-25": "#DAE2FD",
        "theme-primary-10": "#EBEEFF",
        "theme-primary-5": "#F8F9FF",

        "theme-accent": "#5DECBF",
      },
    },
  },
  plugins: [],
};
