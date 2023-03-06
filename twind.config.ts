/**
 * WARNING: DO NOT USE ANY TWIND FUNCTIONS in here otherwise the
 * vscode-twind-intellisense plugin may stop working. To overcome
 * this issue, use animations and keyframes intead of twind's animation
 * function.
 */
import type { Options } from "$fresh/plugins/twind.ts";

const options: Omit<Options, "selfURL"> = {
  plugins: {
    backdrop: {
      "&::backdrop": {
        background: "rgba(0, 0, 0, 0.5)",
      },
    },
    "scroll-snap-center": {
      "scroll-snap-align": "center",
    },
    "scroll-x-mandatory": {
      "scroll-snap-type": "x mandatory",
    },
    "scroll-smooth": {
      "scroll-behavior": "smooth",
      "-webkit-overflow-scrolling": "touch",
    },
    "scrollbar-none": {
      "scrollbar-width": "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    "clip-path-25": {
      "clip-path":
        "polygon(20px 0, 100% 0px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
    },
    "clip-path-10": {
      "clip-path":
        "polygon(10px 0, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
    },
    "clip-path-5": {
      "clip-path":
        "polygon(5px 0, 100% 0px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)",
    },
    "clip-path-polygon": {
      "clip-path": "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "#2FD180",
        "primary-green-light": "#2EAE80",
        "primary-green-dark": "#177151",
        "primary-dark": "#221E1F",
        "primary-light": "#f4f4f4",
        "custom-brown": "#f8f5f1",
        "custom-gray": "#f4f4f4",
        "primary-red": "#D10923",
        "primary-red-light": "#DA262B",
        "primary-red-dark": "#A1061A",
      },
      animation: {
        "slide-left": "slide-left-frame 0.4s ease normal",
        "slide-right": "slide-right-frame 0.4s ease normal",
        "slide-bottom": "slide-bottom-frame 0.4s ease normal",
      },
      keyframes: {
        "slide-left-frame": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right-frame": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-bottom-frame": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "newsletter-bg":
          "url('https://lojatamashii.vteximg.com.br/arquivos/newsletter-bg.png')",
        "eva-01":
          "url('https://lojatamashii.vteximg.com.br/arquivos/newsletter-img.png')",
      },
    },
    fontFamily: {
      sans: ["Titillium Web", "sans-serif"],
      gang: ["gang_of_three"],
      serif: ["inherit", "serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  preflight: {
    "@import":
      `url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap')`,
    "@font-face": [
      {
        fontFamily: "gang_of_three",
        src:
          'url("https://cdn.quatrodigital.com/tamashii/go3v2-webfont.woff2.css") format("woff2"),url("//cdn.quatrodigital.com/tamashii/go3v2-webfont.woff.css") format("woff")',
        fontWeight: 400,
      },
    ],
  },
};

export default options;
