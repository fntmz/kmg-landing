<script>
export default {
    name: "Team",
    data() {
        return {
            people: [
                {
                    name: "Michael Bui",
                    image: "https://media.istockphoto.com/id/1051202402/photo/portrait-of-smiling-businessman-holding-tablet-and-making-ok-sign.jpg?s=612x612&w=0&k=20&c=kyiOeGPmI2aPzK9V1WY7ZTABtEQi5nvm12hcz3ccmc0=",
                },
                {
                    name: "Taylor M.",
                    image: "https://media.istockphoto.com/id/1051202402/photo/portrait-of-smiling-businessman-holding-tablet-and-making-ok-sign.jpg?s=612x612&w=0&k=20&c=kyiOeGPmI2aPzK9V1WY7ZTABtEQi5nvm12hcz3ccmc0=",
                },
                {
                    name: "Matthew M.",
                    image: "https://media.istockphoto.com/id/1051202402/photo/portrait-of-smiling-businessman-holding-tablet-and-making-ok-sign.jpg?s=612x612&w=0&k=20&c=kyiOeGPmI2aPzK9V1WY7ZTABtEQi5nvm12hcz3ccmc0=",
                },
            ],
        };
    },
};
</script>

<template>
    <div class="h-1/3 flex gap-x-16"></div>
</template>

<style scoped>
h1,
#people-header {
    font-family: "Thunder HC";
    font-size: clamp(10rem, 10vw, 16rem);
}
</style>
