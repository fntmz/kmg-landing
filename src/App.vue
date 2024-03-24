<script>
import { RouterView } from "vue-router";

export default {
    name: "App",
    components: {
        RouterView,
    },

    // APPLY DARKMODE
    setup() {
        if (
            localStorage.darkmode === "dark" ||
            (!("darkmode" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },
};
</script>

<template>
    <div id="app">
        <RouterView />
    </div>
</template>

<style>
/* FONTS */
@font-face {
    font-family: "Thunder HC";
    src: url("./assets/fonts/Thunder/woff2/Thunder-ExtraLightHCItalic.woff2")
            format("woff2"),
        url("./assets/fonts/Thunder/ttf/Thunder-ExtraLightHCItalic.ttf")
            format("truetype");
    font-weight: 200;
    font-style: italic;
}
@font-face {
    font-family: "Thunder HC";
    src: url("./assets/fonts/Thunder/woff2/Thunder-SemiBoldHC.woff2")
            format("woff2"),
        url("./assets/fonts/Thunder/ttf/Thunder-SemiBoldHC.ttf")
            format("truetype");
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: "Thunder HC";
    src: url("./assets/fonts/Thunder/woff2/Thunder-SemiBoldHCItalic.woff2")
            format("woff2"),
        url("./assets/fonts/Thunder/ttf/Thunder-SemiBoldHCItalic.ttf")
            format("truetype");
    font-weight: 600;
    font-style: italic;
}
@font-face {
    font-family: "Thunder LC";
    src: url("./assets/fonts/Thunder/woff2/Thunder-LightLC.woff2")
            format("woff2"),
        url("./assets/fonts/Thunder/ttf/Thunder-LightLC.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: "Thunder LC";
    src: url("./assets/fonts/Thunder/woff2/Thunder-SemiBoldLC.woff2")
            format("woff2"),
        url("./assets/fonts/Thunder/ttf/Thunder-SemiBoldLC.ttf")
            format("truetype");
    font-weight: 600;
    font-style: normal;
}
</style>

