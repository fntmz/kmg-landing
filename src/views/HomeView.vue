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
import Fundraisers from "../components/Fundraisers.vue";
import { store } from "../store/store.js";

export default {
    name: "HomeView",
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
        Fundraisers,
    },
    data() {
        return {
            store,
            current_section: 0,
            section_title: [
                "LOADING... ",
                "KILLARNEY MARKETING GROUP",
                "OUR WORK",
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
        setTimeout(() => {
            this.current_section = 1;
            document
                .getElementById("navigator")
                .classList.remove("pointer-events-none");
        }, 2000);
    },
    methods: {
        useDarkmode,
    },
};
</script>

<template>
    <div
        class="z-10 fixed top-0 right-0 h-screen p-4 flex flex-col gap-y-8 justify-center text-xl pointer-events-none"
        id="navigator"
    >
        <div
            class="opacity-0 transition-opacity duration-300 pointer-events-none"
            :class="{ 'opacity-100 pointer-events-auto': 1 < current_section }"
            @click="() => --current_section"
        >
            <button class="relative p-3 rounded-full overflow-hidden">
                <div
                    class="-z-10 absolute top-0 left-0 w-full h-full bg-color opacity-20"
                ></div>
                <ChevronUpIcon class="w-3 aspect-square fill-bg-color" />
            </button>
        </div>
        <div
            class="opacity-0 transition-opacity duration-300 pointer-events-none"
            :class="{ 'opacity-100 pointer-events-auto': 4 > current_section }"
            @click="() => ++current_section"
        >
            <button class="relative p-3 rounded-full overflow-hidden">
                <div
                    class="-z-10 absolute top-0 left-0 w-full h-full bg-color opacity-20"
                ></div>
                <ChevronDownIcon class="w-3 aspect-square fill-bg-color" />
            </button>
        </div>
    </div>

    <div class="xl:grid xl:grid-cols-3 h-screen">
        <div class="xl:h-screen flex flex-col justify-between p-6 2xl:p-24">
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
        <div class="col-start-2 col-span-2" id="main">
            <transition name="fade" mode="out-in">
                <component
                    class="h-full px-6 xl:px-0 pt-6 2xl:pt-24"
                    :is="sections[current_section]"
                />
            </transition>
        </div>
    </div>

    <Fundraisers
        class="z-20 top-0 transition-transform duration-1000 ease-default"
        :class="{ 'translate-y-0': store.fundraiserActive }"
        id="fundraisers"
    />
</template>

<style scoped>
h1 {
    font-family: "Thunder HC";
    font-weight: 600;
    font-size: clamp(6rem, 8vw, 10rem);
    line-height: 1;
}

#fundraisers {
    transform: translateY(100%);
}
</style>
