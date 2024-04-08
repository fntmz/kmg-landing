<script>
export default {
    name: "History",
    data() {
        return {
            money: 2700,
            clients: 2,
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
    <main class="h-full flex flex-col gap-y-8 pb-6 2xl:pb-24">
        <div class="w-full lg:grid lg:grid-cols-2">
            <div>
                <div class="text-4xl font-semibold">We have raised...</div>
                <h1 class="text-accent italic font-semibold">${{ money }}</h1>
            </div>
            <div class="col-start-2">
                <div class="text-4xl font-semibold">for...</div>
                <h1 class="text-accent italic font-semibold">
                    {{ clients }} clients
                </h1>
            </div>
        </div>
        <div class="overflow-visible">
            <div class="text-6xl font-semibold" id="past-fundraisers">
                Past fundraisers
            </div>
            <ul class="flex gap-x-16">
                <li class="h-[50vh] aspect-square grid place-items-center">
                    <img
                        class="flex-shrink-0 min-h-full min-w-full object-cover"
                        src="https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/2022-12-28_17-04-06_1672275881.jpg?width=800&dpr=1"
                        alt=""
                    />
                </li>
                <li class="h-[50vh] aspect-square grid place-items-center">
                    <img
                        class="flex-shrink-0 min-h-full min-w-full object-cover"
                        src="https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/2022-12-22_21-50-39_1671774648.jpg?width=800&dpr=1"
                        alt=""
                    />
                </li>
                <li class="h-[50vh] aspect-square grid place-items-center">
                    <img
                        class="flex-shrink-0 min-h-full min-w-full object-cover"
                        src="https://54f09aded217d7de40fe.cdn6.editmysite.com/uploads/b/54f09aded217d7de40feedfb1d0ad5cf44a751060ee3269a271a75963a3a8fd7/2022-12-22_21-50-08_1671774631.jpg?width=800&dpr=1"
                        alt=""
                    />
                </li>
            </ul>
        </div>
    </main>
</template>

<style scoped>
h1,
#past-fundraisers {
    font-family: "Thunder HC";
    font-size: clamp(10rem, 10vw, 16rem);
}
</style>
