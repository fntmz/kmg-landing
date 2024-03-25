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
    <main class="h-full flex flex-col gap-y-8">
        <div class="w-full grid grid-cols-2">
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
        <div>
            <div class="text-6xl font-semibold" id="past-fundraisers">
                Past fundraisers
            </div>
            <div></div>
        </div>
    </main>
</template>

<style scoped>
h1,
#past-fundraisers {
    font-family: "Thunder HC";
    font-size: clamp(8rem, 10vw, 16rem);
}
</style>
