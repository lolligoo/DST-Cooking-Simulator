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
        "17": "70px",
        "65": "260px",
      },
      weight: {
        "17": "70px",
        "65": "260px",
      },
      marginRight: {
        "45": "18px",
      },
      backgroundImage: {
        slot: "url('/images/inv_slot.png')",
        l: "url('/images/bg.jpg')",
        health: "url('/images/health.png')",
        hunger: "url('/images/hunger.png')",
        sanity: "url('/images/sanity.png')",
        perishtime: "url('/images/perishtime.png')",
        cooktime: "url('/images/cooktime.png')",
        foodtype: "url('/images/foodtype.png')",
      },
      fontWeight: {
        m: "520",
      },
    },
  },
  plugins: [],
} satisfies Config;
