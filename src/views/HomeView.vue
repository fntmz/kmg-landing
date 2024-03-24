<script>
import Landing from "../components/Home/Landing.vue";
import History from "../components/Home/History.vue";
import Team from "../components/Home/Team.vue";
import Donate from "../components/Home/Donate.vue";
import Contact from "../components/Home/Contact.vue";
import ChevronUpIcon from "../assets/icons/ChevronUp.vue";
import ChevronDownIcon from "../assets/icons/ChevronDown.vue";
import Moon from "../assets/icons/Moon.vue";
import ToggleDarkmode from "../composables/Darkmode.vue";

export default {
    name: "Layout",
    components: {
        Landing,
        History,
        Team,
        Donate,
        Contact,
        ChevronUpIcon,
        ChevronDownIcon,
        Moon,
    },
    data() {
        return {
            current_section: 0,
            section_title: [
                "KILLARNEY MARKETING GROUP",
                "OUR HISTORY",
                "OUR PEOPLE",
                "HELP KILLARNEY",
                "WORK WITH US",
            ],
            sections: ["Landing", "History", "Team", "Donate", "Contact"],
        };
    },
    methods: {
        ToggleDarkmode,
    },
};
</script>

<template>
    <div
        class="z-10 fixed top-0 right-0 h-screen p-4 flex flex-col gap-y-8 justify-center text-xl"
    >
        <div
            class="opacity-0 transition-opacity duration-300 pointer-events-none"
            :class="{ 'opacity-100 pointer-events-auto': 0 < current_section }"
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
    <main class="xl:grid xl:grid-cols-3 h-full">
        <div class="flex flex-col justify-between">
            <transition name="fade" mode="out-in">
                <h1
                    :key="section_title[current_section]"
                    class="text-9xl xl:word-spacing-full"
                >
                    {{ section_title[current_section] }}
                </h1>
            </transition>
            <nav class="hidden xl:flex flex-col gap-y-2 text-2xl">
                <ul>
                    Our Instagram
                </ul>
                <ul>
                    Our Youtube
                </ul>
                <ul>
                    Contact us
                </ul>
                <ul>
                    FAQs
                </ul>
                <ul>
                    <button @click="ToggleDarkmode">
                        <Moon class="w-4 fill-color" />
                    </button>
                </ul>
            </nav>
        </div>
        <div class="col-start-2 col-span-2 overflow-y-hidden">
            <transition name="fade">
                <component :is="sections[current_section]" />
            </transition>
        </div>
    </main>
</template>

<style scoped>
h1 {
    font-family: "Thunder HC";
    font-weight: 600;
}
</style>
