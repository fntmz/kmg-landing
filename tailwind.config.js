/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                color: "rgb(var(--color))",
                "bg-color": "rgb(var(--bg-color))",
                "custom-gray": "rgb(var(--gray))",
                accent: "rgb(var(--accent))",
                "alt-accent": "rgb(var(--alt-accent))",
            },
            transitionProperty: {
                width: "width",
                height: "height",
                filter: "filter",
            },
            transitionTimingFunction: {
                default: "cubic-bezier(0.8, 0, 0.2, 1)",
            },
            borderWidth: {
                1: "1px",
            },
            container: {
                center: true,
            },
        },
    },
    darkMode: "class",
    plugins: [],
    important: true,
};

