<script>
import ChevronDownIcon from "../../assets/icons/ChevronDown.vue";
import ChevronUpIcon from "../../assets/icons/ChevronUp.vue";
import { store } from "../../store/store.js";
export default {
    name: "Loader",
    components: {
        ChevronUpIcon,
        ChevronDownIcon,
    },
};
</script>

<template>
    <div
        class="left-0 top-0 h-full w-full fixed pb-6 2xl:pb-24 grid grid-cols-2 pointer-events-none"
    >
        <div class="grid place-items-center">
            <div class="relative">
                <div class="w-[.125rem] h-16 rounded-full">
                    <div
                        class="w-full h-full bg-custom-gray"
                        id="swipe-inner"
                    />
                </div>
                <div class="absolute text-3xl rotate-[225deg]" id="finger">
                    👉
                </div>
            </div>
        </div>
        <div class="grid place-items-center">
            <div class="relative">
                <div class="mx-4 flex flex-col gap-y-6">
                    <button class="relative p-3 rounded-full overflow-hidden">
                        <div
                            class="-z-10 absolute top-0 left-0 w-full h-full bg-color opacity-20"
                        ></div>
                        <ChevronUpIcon
                            class="w-3 aspect-square fill-bg-color"
                        />
                    </button>
                    <button class="relative p-3 rounded-full overflow-hidden">
                        <div
                            class="-z-10 absolute top-0 left-0 w-full h-full bg-color opacity-20"
                        ></div>
                        <ChevronDownIcon
                            class="w-3 aspect-square fill-bg-color"
                        />
                    </button>
                </div>
                <div
                    class="absolute left-16 top-24 text-3xl rotate-[225deg]"
                    id="finger"
                >
                    👉
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#wrapper {
    font-family: "Thunder HC";
    font-size: clamp(2rem, 2.5vw, 4rem);
}
#swipe-inner {
    animation: fill-height 2s infinite;
}
#finger {
    animation: back-and-forth 1s infinite;
}
</style>
