<script>
import Landing from "../components/Home/Landing.vue";
import History from "../components/Home/History.vue";
import Team from "../components/Home/Team.vue";
import Donate from "../components/Home/Donate.vue";
import Contact from "../components/Home/Contact.vue";
import Loader from "../components/Home/Loader.vue";
import ChevronUpIcon from "../assets/icons/ChevronUp.vue";
import ChevronDownIcon from "../assets/icons/ChevronDown.vue";
import Moon from "../assets/icons/Moon.vue";
import useDarkmode from "../composables/useDarkmode.vue";
import useLoadProgress from "../composables/useLoadProgress.vue";

export default {
    name: "Layout",
    components: {
        Landing,
        History,
        Team,
        Donate,
        Contact,
        Loader,
        ChevronUpIcon,
        ChevronDownIcon,
        Moon,
    },
    data() {
        return {
            current_section: 0,
            section_title: [
                "LOADING... " + useLoadProgress.loadingPercent + "%",
                "KILLARNEY MARKETING GROUP",
                "OUR HISTORY",
                "OUR PEOPLE",
                "HELP KILLARNEY",
                "WORK WITH US",
            ],
            sections: [
                "Loader",
                "Landing",
                "History",
                "Team",
                "Donate",
                "Contact",
            ],
        };
    },
    computed: {},
    mounted() {
        console.log(useLoadProgress.loadingPercent + "%");
        setTimeout(() => {
            this.current_section = 1;
        }, 2000);
    },
    methods: {
        useDarkmode,
    },
};
</script>

<template>
    <div
        class="z-10 fixed top-0 right-0 h-screen p-4 flex flex-col gap-y-8 justify-center text-xl"
        id="navigator"
    >
        <div
            class="opacity-0 transition-opacity duration-300 pointer-events-none"
            :class="{ 'opacity-100 pointer-events-auto': 1 < current_section }"
            @click="() => --current_section"
        >
            <button class="p-3 rounded-full bg-custom-gray">
                <ChevronUpIcon class="w-3 aspect-square fill-bg-color" />
            </button>
        </div>
        <div
            class="opacity-0 transition-opacity duration-300 pointer-events-none"
            :class="{ 'opacity-100 pointer-events-auto': 4 > current_section }"
            @click="() => ++current_section"
        >
            <button class="p-3 rounded-full bg-custom-gray">
                <ChevronDownIcon class="w-3 aspect-square fill-bg-color" />
            </button>
        </div>
    </div>

    <div class="xl:grid xl:grid-cols-3 h-screen">
        <div class="flex flex-col justify-between p-6 2xl:p-24">
            <transition name="fade" mode="out-in">
                <h1
                    :key="section_title[current_section]"
                    class="xl:word-spacing-full"
                >
                    {{ section_title[current_section] }}
                </h1>
            </transition>
            <nav class="hidden xl:flex flex-col gap-y-2 text-2xl">
                <ul>
                    <a>Our Instagram</a>
                </ul>
                <ul>
                    <a>Our Youtube</a>
                </ul>
                <ul>
                    <a>Contact us</a>
                </ul>
                <ul>
                    <a>FAQs</a>
                </ul>
                <ul>
                    <button @click="useDarkmode">
                        <Moon class="w-4 fill-color" />
                    </button>
                </ul>
            </nav>
        </div>
        <div class="col-start-2 col-span-2 overflow-hidden" id="main">
            <transition name="fade" mode="out-in">
                <component
                    class="h-full px-6 xl:px-0 xl:pt-6 2xl:pt-24"
                    :is="sections[current_section]"
                />
            </transition>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-family: "Thunder HC";
    font-weight: 600;
    font-size: clamp(6rem, 8vw, 10rem);
    line-height: 1;
}
</style>
