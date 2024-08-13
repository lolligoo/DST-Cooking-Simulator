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
        slot: "url('/images/ui/inv_slot.png')",
        l: "url('/images/ui/bg.jpg')",
        health: "url('/images/ui/health.png')",
        hunger: "url('/images/ui/hunger.png')",
        sanity: "url('/images/ui/sanity.png')",
        perishtime: "url('/images/ui/perishtime.png')",
        cooktime: "url('/images/ui/cooktime.png')",
        foodtype: "url('/images/ui/foodtype.png')",
        button: "url('/images/ui/button_large.png')",
        book: "url('/images/ui/tab_book.png')",
        full: "url('/images/ui/full-bg.jpg')",
        banner: "url('/images/ui/banner.png')",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config;
