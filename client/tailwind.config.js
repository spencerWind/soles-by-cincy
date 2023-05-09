/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                themeGray: "#acb2b5",
                themeRed: "#AA2F3F",
            },
            fontFamily: {
                Rajdhani: ["Rajdhani", "sans-serif"],
            },
            fontSize: {
                title: `2.6rem;`,
                paragraph: `1.2rem;`,
            },
            dropShadow: {
                nav: "filter: drop-shadow(0 4px 3px rgb(255 255 255 / 0.07)) drop-shadow(0 2px 2px rgb(255 255 255 / 0.06));",
            },
        },
    },
    plugins: [],
};
