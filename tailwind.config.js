/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  variants: {
    extend: {
      backgroundColor: ["hover", "focus"],
    },
  },
  theme: {
    extend: {
      keyframes: {
        move: {
          to: {
            strokeDashoffset: "500",
            stroke: "purple",
          },
        },
      },
      colors: {
        "yellow-dark": "#C47F17",
        yellow: "#DBAC2C",
        "yellow-light": "#F1E9C9",
        "purple-dark": "#4B2995",
        purple: "#8047f8",
        "purple-light": "#EBE5F9",

        "base-title": "#272221",
        "base-subtitle": "#403937",
        "base-text": "#574f4D",
        "base-label": "#8D8686",
        "base-hover": "#D7D5D5",

        "base-button": "#E6E5E5",
        "base-input": "#EDEDED",
        "base-card": "#F3F2F2",
        background: "#FAFAFA",
      },
      fontFamily: {
        baloo: ["Baloo 2"],
      },
      lineHeight: {
        130: "130%",
        160: "160%",
      },
    },
    plugins: [],
    safeList: [
      {
        pattern: /(.)-(yellow|purple|base)-(.)/,
        variants: ["hover", "focus"],
      },
    ],
  },
};
