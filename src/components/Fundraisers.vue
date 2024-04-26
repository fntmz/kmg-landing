<script>
import { store } from "../store/store.js";
export default {
    name: "Fundraisers",
    data() {
        return {
            store,
            fundraisers: [
                {
                    name: "Minion Socks",
                    subtext:
                        "Our very first fundraiser was a success. We sold out on our minion socks and it was the first time people were introduced to the KMG.",
                    image: "https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/minion%20socks_1670797506.jpeg?width=2400&optimize=medium",
                    alt: "Minion Socks fundraiser",
                },
                {
                    name: "Buko Pandan",
                    subtext:
                        "Buko Pandan, a sweet Filipino dessert that is perfect for a hot summer day. Our most successful fundraiser this year, brought to you by a team of 4!",
                    image: "https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/2022-12-22_21-50-39_1671774648.jpg?width=800&dpr=1",
                    alt: "Buko Pandan fundraiser",
                },
                {
                    name: "Halloween Movie Night",
                    subtext: "The Halloween season came with spooky movies!",
                    image: "https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/2022-12-22_21-50-08_1671774631.jpg?width=800&dpr=1",
                    alt: "Halloween Movie Night fundraiser",
                },
                {
                    name: "Dodgeball Tournament",
                    subtext:
                        "8 teams with players from all grades compete for a chance to win a $60 prize!",
                    image: "https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/dodgeball%20tournament_1670798525.jpeg?width=2400&optimize=medium",
                    alt: "Dodgeball Tournament fundraiser",
                },
                {
                    name: "Candy Grams",
                    subtext:
                        "Send a bag of candy to your special friends! Brought to you by a team of 5 and is one of our most successful fundraiser.",
                    image: "https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/IG_12.23.2022_63a543b6a1a534.36533129.jpeg?width=2400&optimize=medium",
                    alt: "Candy Grams fundraiser",
                },
                {
                    name: "Basketball Tournament",
                    subtext:
                        "Senior week champs, what a huge turnout! Event was sponsored by G2 Athletics and School of Handles Basketball.",
                    image: "https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/basketball%20senior%20winner_1671776072.jpeg?width=2400&optimize=medium",
                    alt: "Basketball Tournament fundraiser",
                },
            ],
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
                class="h-full bg-bg-color border-x-2 border-custom-gray transition-transform duration-1000 ease-default overflow-y-scroll"
                :class="{ 'translate-y-0': store.fundraiserActive }"
                id="inner"
            >
                <div class="p-6 2xl:p-24 h-[200vh]">
                    <button @click="() => (store.fundraiserActive = false)">
                        back
                    </button>
                    <h2>Things we did...</h2>
                    <main>
                        <ul>
                            <li
                                class="py-8 grid grid-cols-4 gap-x-8 border-b-2 border-custom-gray"
                                v-for="fundraiser in fundraisers"
                            >
                                <div
                                    class="col-span-1 col-start-1 bg-color aspect-[3/2] grid place-items-center overflow-hidden"
                                >
                                    <img
                                        class="min-h-full min-w-full object-cover"
                                        :src="fundraiser.image"
                                        :alt="fundraiser.alt"
                                        srcset=""
                                    />
                                </div>
                                <div class="col-span-3 col-start-2">
                                    <h3>{{ fundraiser.name }}</h3>
                                    <p>{{ fundraiser.subtext }}</p>
                                </div>
                            </li>
                            <li class="py-8 grid place-items-center">
                                and more...
                            </li>
                        </ul>
                    </main>
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
h3 {
    font-family: "Thunder HC";
    font-size: clamp(2rem, 2vw, 3rem);
}
p {
    font-size: clamp(1rem, 1vw, 2rem);
}
#inner {
    transform: translateY(50%);
}
</style>
