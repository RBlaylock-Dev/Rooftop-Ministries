import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgb(173, 199, 228)", // Powder blue as main primary
          50: "rgb(240, 246, 252)",
          100: "rgb(224, 237, 249)",
          200: "rgb(208, 228, 246)",
          300: "rgb(192, 219, 243)",
          400: "rgb(182, 209, 235)",
          500: "rgb(173, 199, 228)",
          600: "rgb(155, 179, 205)",
          700: "rgb(138, 159, 182)",
          800: "rgb(121, 139, 159)",
          900: "rgb(104, 119, 136)",
          foreground: "hsl(var(--primary-foreground))",
        },
        // New palette colors
        blush: {
          50: "rgb(252, 248, 246)",
          100: "rgb(249, 241, 237)",
          200: "rgb(246, 234, 228)",
          300: "rgb(243, 227, 219)",
          400: "rgb(240, 220, 210)",
          500: "rgb(237, 213, 201)", // Light peachy pink
          600: "rgb(213, 192, 181)",
          700: "rgb(189, 171, 161)",
          800: "rgb(165, 150, 141)",
          900: "rgb(141, 129, 121)",
        },
        powder: {
          50: "rgb(240, 246, 250)",
          100: "rgb(225, 237, 245)",
          200: "rgb(210, 228, 240)",
          300: "rgb(195, 219, 235)",
          400: "rgb(180, 210, 230)",
          500: "rgb(165, 201, 225)", // Powder blue
          600: "rgb(148, 181, 203)",
          700: "rgb(131, 161, 181)",
          800: "rgb(114, 141, 159)",
          900: "rgb(97, 121, 137)",
        },
        coral: {
          50: "rgb(252, 242, 240)",
          100: "rgb(249, 229, 225)",
          200: "rgb(246, 216, 210)",
          300: "rgb(243, 203, 195)",
          400: "rgb(240, 190, 180)",
          500: "rgb(237, 177, 165)", // Coral/salmon
          600: "rgb(213, 159, 148)",
          700: "rgb(189, 141, 131)",
          800: "rgb(165, 123, 114)",
          900: "rgb(141, 105, 97)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
