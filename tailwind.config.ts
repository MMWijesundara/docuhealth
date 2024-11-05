import type { Config } from "tailwindcss";

const config: Config = {
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
        
        // Custom Colors
        primary: "#0A7594", // The custom color you wanted for the footer
        secondary: "#086d84", // Add another shade for hover or accent
        // Additional custom colors can be added as needed
      },
    },
  },
  plugins: [],
};
export default config;
