module.exports = {
  content: ["./src/*.html", "./src/**/*.js", "./src/**/*.njk"],
  theme: {
    extend: {
      backgroundImage: {
        flowchart: "url('../img/flow-allievi-ar.png')",
        fipsaswebpd: "url('../img/fipsas-website-pd.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
