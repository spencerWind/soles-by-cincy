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
        },
    },
    plugins: [],
};
