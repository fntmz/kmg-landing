<script>
import "../assets/css/transition.css";

export default {
    name: "Layout",
};
</script>

<template>
    <div class="p-24">
        <RouterView v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </RouterView>
    </div>
</template>

<style scoped>
main.active {
    opacity: 1 !important;
}
</style>
