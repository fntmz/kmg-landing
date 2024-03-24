/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                "fill-p": "calc(100vh - 12rem)",
            },
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

