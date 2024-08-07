import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        "128": "32rem",
        "132": "48rem",
      },
      height: {
        "17": "68px",
        "65": "260px",
      },
      weight: {
        "17": "68px",
      },
      marginRight: {
        "45": "18px",
      },
      backgroundImage: {
        'slot': "url('/images/inv_slot.png')",
        'l': "url('/images/bg.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
