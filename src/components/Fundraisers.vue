<script>
import { store } from "../store/store.js";
export default {
    name: "Fundraisers",
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="fixed left-0 h-screen w-screen">
        <div
            class="-z-10 absolute h-full w-full"
            @click="store.fundraiserActive = false"
        ></div>
        <div class="h-full bg-accent container">
            <div
                class="h-full bg-bg-color transition-transform duration-1000 ease-default overflow-y-scroll"
                :class="{ 'translate-y-0': store.fundraiserActive }"
                id="inner"
            >
                <div class="p-6 2xl:p-24 h-[200vh]">
                    <div>back</div>
                    <h2>Things we did...</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-family: "Thunder HC";
    font-size: clamp(2rem, 2.5vw, 4rem);
}
#inner {
    transform: translateY(50%);
}
</style>
