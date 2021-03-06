const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "spotify-green-base": "#1ed760",
        "spotify-dark": "#121212",
        "spotify-darkest": "#191414",
        "spotify-light": "#282828",
        "spotify-lightest": "#B3B3B3",
        "spotify-black": "#181818",
        "spotify-medium-gray": "#282828",
      },
    },

    // look min width of body in globals.css
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
      // // => @media (min-width: 576px) { ... }
      sm: "576px",
      // // => @media (min-width: 768px) { ... }
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontFamily: {
      proximaNova: ["Proxima Nova", "sans serif"],
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
