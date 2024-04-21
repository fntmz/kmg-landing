<script>
export default {
    name: "Team",
};
</script>

<template>
    <div class="h-1/3 flex gap-x-16">
        <div class="flex flex-col">
            <h2 class="text-6xl font-semibold" id="people-header">Founder</h2>
            <div class="h-full aspect-[2/3] grid place-items-center">
                <img
                    class="flex-shrink-0 min-h-full min-w-full object-cover"
                    src="https://media.istockphoto.com/id/1051202402/photo/portrait-of-smiling-businessman-holding-tablet-and-making-ok-sign.jpg?s=612x612&w=0&k=20&c=kyiOeGPmI2aPzK9V1WY7ZTABtEQi5nvm12hcz3ccmc0="
                    alt=""
                />
            </div>
        </div>

        <div class="flex flex-col">
            <div class="text-6xl font-semibold" id="people-header">
                Project Managers
            </div>
            <ul class="flex gap-16">
                <li class="aspect-[2/3] grid place-items-center">
                    <img
                        class="flex-shrink-0 min-h-full min-w-full object-cover"
                        src="https://media.istockphoto.com/id/1051202402/photo/portrait-of-smiling-businessman-holding-tablet-and-making-ok-sign.jpg?s=612x612&w=0&k=20&c=kyiOeGPmI2aPzK9V1WY7ZTABtEQi5nvm12hcz3ccmc0="
                        alt=""
                    />
                </li>
                <li class="aspect-[2/3] grid place-items-center">
                    <img
                        class="flex-shrink-0 min-h-full min-w-full object-cover"
                        src="https://media.istockphoto.com/id/1051202402/photo/portrait-of-smiling-businessman-holding-tablet-and-making-ok-sign.jpg?s=612x612&w=0&k=20&c=kyiOeGPmI2aPzK9V1WY7ZTABtEQi5nvm12hcz3ccmc0="
                        alt=""
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
h1,
#people-header {
    font-family: "Thunder HC";
    font-size: clamp(10rem, 10vw, 16rem);
}
</style>
