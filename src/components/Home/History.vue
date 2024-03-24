<script>
export default {
    name: "History",
};
</script>

<template>
    <main class="h-full">
        <div class="w-full h-1/2 grid grid-cols-2">
            <div>
                <div class="text-4xl font-semibold">We have raised...</div>
                <h1 class="text-accent italic font-semibold">$2800</h1>
            </div>
            <div class="col-start-2">
                <div class="text-4xl font-semibold">for...</div>
                <h1 class="text-accent italic font-semibold">12 clients</h1>
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
