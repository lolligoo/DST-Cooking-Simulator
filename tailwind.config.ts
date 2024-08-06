import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        "128": "32rem",
        "132": "48rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
