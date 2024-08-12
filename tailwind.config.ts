import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        "100": "25rem",
        "128": "32rem",
        "130": "35rem",
        "132": "38rem",
      },
      height: {
        "17": "70px",
        "65": "260px",
      },
      weight: {
        "17": "70px",
        "65": "260px",
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
        button: "url('/images/button_large.png')",
        book: "url('/images/tab_book.png')",
        full:"url('/images/full-bg.jpg')"
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
} satisfies Config;
