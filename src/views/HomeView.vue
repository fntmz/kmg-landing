<script>
import Landing from "../components/Home/Landing.vue";
import History from "../components/Home/History.vue";
import Team from "../components/Home/Team.vue";
import Donate from "../components/Home/Donate.vue";
import Contact from "../components/Home/Contact.vue";
import ChevronUpIcon from "../assets/icons/ChevronUp.vue";
import ChevronDownIcon from "../assets/icons/ChevronDown.vue";

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
    },
    data() {
        return {
            current_section: 0,
            section_title: [
                "KILLARNEY MARKETING GROUP",
                "OUR HISTORY",
                "OUR PEOPLE",
                "HELP KILLARNEY",
                "GET IN TOUCH",
            ],
            sections: ["Landing", "History", "Team", "Donate", "Contact"],
        };
    },
};
</script>

<template>
    <div
        class="fixed top-0 left-0 w-screen h-screen p-4 flex flex-col justify-between items-center text-xl"
    >
        <div
            class="opacity-0"
            :class="{ 'opacity-100': 0 < current_section }"
            @click="() => --current_section"
        >
            up
        </div>
        <div
            class="opacity-0"
            :class="{ 'opacity-100': 4 > current_section }"
            @click="() => ++current_section"
        >
            down
        </div>
    </div>
    <main>
        <div class="grid grid-cols-2">
            <transition name="fade" mode="out-in">
                <h1
                    :key="section_title[current_section]"
                    class="text-9xl font-bold word-spacing-full"
                >
                    {{ section_title[current_section] }}
                </h1>
            </transition>
            <div class="col-start-2">
                <transition name="fade">
                    <component :is="sections[current_section]" />
                </transition>
            </div>
        </div>
    </main>
</template>

<style scoped></style>

