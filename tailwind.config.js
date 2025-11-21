module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#70BCBE",
        secondary: "#D0F2F3",
        highlight: "#F7F2CE",
        button: "#26BCBB",
        text: "#444444",
      },
      fontFamily: {
        title: ["'Mochiy Pop One'", "sans-serif"],
        body: ["'Akatab'", "sans-serif"],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1432px',
        },
      },
    },
  },
  plugins: [],
};
