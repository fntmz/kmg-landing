<script>
export default {
    name: "History",
};
</script>

<template>
    <main>
        <div class="text-right">
            <div class="text-4xl font-semibold">Total raised</div>
            <h1 class="text-accent text-[16rem] italic font-semibold">$2800</h1>
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
}
</style>
