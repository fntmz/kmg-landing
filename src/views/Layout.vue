<script>
import "../assets/css/transition.css";

export default {
    name: "Layout",
};
</script>

<template>
    <div class="h-screen p-24">
        <RouterView />
    </div>
</template>

<style scoped>
main.active {
    opacity: 1 !important;
}
</style>
