/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headtext: "#161616",
        Button: "#FFC64C",
        hoverButton: "#FFD478",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.75rem',
          md:'1rem',
        },
      },
      fontFamily: {
        primary: ["var(--font-quicksand)"],
        heading: ["var(--font-palanquin)"],
        secondary: ["var(--font-palatino)"],
      },
    },

  },
  plugins: [],
};
