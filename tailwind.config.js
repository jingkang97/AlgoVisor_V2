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
  plugins: [],
};
