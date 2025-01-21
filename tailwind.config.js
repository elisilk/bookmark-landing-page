/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      "off-white": "#F7F7F7",
      blue: "#5267DF" /* Soft Blue: hsl(231, 69%, 60%) */,
      red: "#FA5959" /* Soft Red: hsl(0, 94%, 66%) */,
      "dark-gray": "#242A45",
      /* Very Dark Blue: hsl(229, 31%, 21%) */
      "light-blue": "#495DCF" /* hsl(231, 58%, 55%) / rgb(73, 93, 207) */,
    },
    fontFamily: {
      sans: ["Rubik", "system-ui", "sans-serif"],
    },
    fontSize: {
      "3xs": [
        "10px",
        {
          lineHeight: "1",
          letterSpacing: "0.25px",
          fontWeight: "500",
        },
      ],
      "2xs": [
        "12px",
        {
          lineHeight: "40px",
          letterSpacing: "4.62px",
          fontWeight: "500",
        },
      ],
      xs: [
        "13px",
        {
          lineHeight: "17px",
          letterSpacing: "1.5px",
          fontWeight: "400",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "28px",
          letterSpacing: "0.25px",
          fontWeight: "500",
        },
      ],
      base: [
        "15px",
        {
          lineHeight: "25px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      md: [
        "16px",
        {
          lineHeight: "17px",
          letterSpacing: "0.53px",
          fontWeight: "400",
        },
      ],
      lg: [
        "18px",
        {
          lineHeight: "28px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      xl: [
        "20px",
        {
          lineHeight: "17px",
          letterSpacing: "2.31px",
          fontWeight: "400",
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.08px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "32px",
        {
          lineHeight: "52px",
          letterSpacing: "-0.1px",
          fontWeight: "500",
        },
      ],
      "7xl": [
        "30px",
        {
          lineHeight: "40px",
          letterSpacing: "-0.09px",
          fontWeight: "500",
        },
      ],
      "8xl": [
        "38px",
        {
          lineHeight: "44px",
          letterSpacing: "-0.09px",
          fontWeight: "500",
        },
      ],
      "9xl": [
        "48px",
        {
          lineHeight: "52px",
          letterSpacing: "-0.15px",
          fontWeight: "500",
        },
      ],
    },
    boxShadow: {
      DEFAULT: "0 8px 8px -4px rgba(73, 93, 207, 0.2)",
      md: "0 10px 20px -5px rgba(73, 93, 207, 0.2)",
      img: "0 30px 40px 0px rgba(47, 59, 129, 0.2)",
    },
    extend: {
      gridTemplateColumns: {
        "2-60-40": "3fr 2fr",
        "2-40-60": "2fr 3fr",
        "1-280px": "280px",
        "3-280px": "repeat(3, minmax(0, 280px))",
      },
      gridTemplateRows: {
        "3-cascade": "40px 40px 1fr 40px 40px",
      },
    },
  },
  plugins: [],
};
