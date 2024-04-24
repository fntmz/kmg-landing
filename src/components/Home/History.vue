<script>
import { store } from "../../store/store.js";
export default {
    name: "History",
    data() {
        return {
            store,
            money: 2700,
            clients: 2,
            fundraisers: [
                {
                    name: "Minion Socks",
                    image: "https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/2022-12-28_17-04-06_1672275881.jpg?width=800&dpr=1",
                    alt: "Minion Socks fundraiser",
                },
                {
                    name: "Buko Pandan",
                    image: "https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/2022-12-22_21-50-39_1671774648.jpg?width=800&dpr=1",
                    alt: "Buko Pandan fundraiser",
                },
                {
                    name: "Halloween",
                    image: "https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/2022-12-22_21-50-08_1671774631.jpg?width=800&dpr=1",
                    alt: "Halloween fundraiser",
                },
            ],
        };
    },
    mounted() {
        var money_interval = setInterval(() => {
            this.money += 1;
            if (this.money >= 2800) {
                clearInterval(money_interval);
            }
        }, 10);
        var clients_interval = setInterval(() => {
            this.clients += 1;
            if (this.money >= 2800) {
                clearInterval(clients_interval);
            }
        }, 100);
    },
};
</script>

<template>
    <main class="h-full flex flex-col gap-y-4 pb-6 2xl:pb-24">
        <div class="w-full md:grid md:grid-cols-2">
            <div>
                <div class="text-4xl font-semibold">We have raised...</div>
                <h2
                    class="leading-tight xl:leading-normal text-accent italic font-semibold"
                >
                    ${{ money }}
                </h2>
            </div>
            <div class="col-start-2">
                <div class="text-4xl font-semibold">for...</div>
                <h2
                    class="leading-tight xl:leading-normal text-accent italic font-semibold"
                >
                    {{ clients }} clients
                </h2>
            </div>
        </div>
        <div class="flex gap-x-4">
            <div
                class="text-4xl md:text-6xl font-semibold"
                id="past-fundraisers"
            >
                Past fundraisers
            </div>
            <button @click="() => (store.fundraiserActive = true)">
                View all
            </button>
        </div>
        <div class="h-full w-[99999px]">
            <ul class="flex gap-x-16 h-full">
                <li
                    class="h-full relative aspect-square grid place-items-center overflow-hidden"
                    v-for="fundraiser in fundraisers"
                >
                    <div class="absolute py-2 px-4 bg-bg-color">
                        <h3 class="text-accent">
                            {{ fundraiser.name }}
                        </h3>
                    </div>
                    <img
                        class="-z-[1] flex-shrink-0 min-h-full min-w-full object-cover hover:scale-105 transition-transform duration-300"
                        :src="fundraiser.image"
                        :alt="fundraiser.alt"
                    />
                </li>
            </ul>
        </div>
    </main>
</template>

<style scoped>
h2,
#past-fundraisers,
h3 {
    font-family: "Thunder HC";
}

h2 {
    font-size: clamp(7.5rem, 10vw, 16rem);
}

h3 {
    font-size: clamp(2rem, 2.5vw, 4rem);
    line-height: 1;
}
</style>
