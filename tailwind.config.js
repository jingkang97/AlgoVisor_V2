import svgToDataUri from "mini-svg-data-uri";
import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "gradient-size": "200% 200%", // Increase the background size for smoother animation
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)",
      },
      transitionDuration: {
        500: "500ms",
      },
      zIndex: {
        3: "3", // Used for layer ordering in the cards
      },
      colors: {
        background: "var(--background)", // Background color using CSS variable
        foreground: "var(--foreground)", // Foreground color using CSS variable
        buttonTextWhite: "#ffffff",
        buttonTextBlack: "#000000",
        buttonColor: "#004080", // Placeholder button color
        buttonHoverColor: "#0a2540", // Button hover state color
        knockoutColor: "#ffffff", // Text knockout color
        "bg-color": "rgb(20, 20, 20)",
        "card-color": "rgb(23, 23, 23)",
      },
      fontFamily: {
        mona: ["MonaSans", "sans-serif"], // MonaSans font definition
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))", // Grid with 20 columns
        50: "repeat(50, minmax(0, 1fr))", // Grid with 50 columns
        100: "repeat(100, minmax(0, 1fr))", // Grid with 100 columns
      },
      animation: {
        spotlight: "spotlight 4s ease 2s 1 forwards", // Spotlight animation
        gradient: "gradient 4s ease-in-out infinite", // Animate the gradient
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)", // Initial state
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, -40%) scale(1)", // Final state
          },
        },
        gradient: {
          "0%": {
            backgroundPosition: "50% 100%",
          },

          "100%": {
            backgroundPosition: "50% -100%",
          },
        },
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
