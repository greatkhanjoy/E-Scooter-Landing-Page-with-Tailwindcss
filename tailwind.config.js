/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "25%": "25%",
      auto: "auto",
      365: "365px",
    },
    extend: {
      colors: {
        primary: "#42454A",
        secondary: "#17181A",
        border: "#EAE8F3",
        icon: "#FE8B75",
      },
      fontFamily: {
        ubuntu: ["Ubuntu"],
        calistoga: ["Calistoga"],
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
