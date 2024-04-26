<script>
export default {
    name: "Team",
    data() {
        return {
            people: [
                {
                    name: "Michael Bui",
                    role: "Founder",
                    image: "https://media.istockphoto.com/id/1051202402/photo/portrait-of-smiling-businessman-holding-tablet-and-making-ok-sign.jpg?s=612x612&w=0&k=20&c=kyiOeGPmI2aPzK9V1WY7ZTABtEQi5nvm12hcz3ccmc0=",
                },
                {
                    name: "Taylor M.",
                    role: "Project Manager",
                    image: "https://media.istockphoto.com/id/1051202402/photo/portrait-of-smiling-businessman-holding-tablet-and-making-ok-sign.jpg?s=612x612&w=0&k=20&c=kyiOeGPmI2aPzK9V1WY7ZTABtEQi5nvm12hcz3ccmc0=",
                },
                {
                    name: "Matthew M.",
                    role: "Project Manager",
                    image: "https://media.istockphoto.com/id/1051202402/photo/portrait-of-smiling-businessman-holding-tablet-and-making-ok-sign.jpg?s=612x612&w=0&k=20&c=kyiOeGPmI2aPzK9V1WY7ZTABtEQi5nvm12hcz3ccmc0=",
                },
            ],
        };
    },
};
</script>

<template>
    <div class="flex gap-x-16">
        <ul class="h-1/3 flex gap-x-16">
            <li
                class="h-full relative aspect-square flex items-end overflow-hidden"
                v-for="person in people"
            >
                <div class="absolute pt-4 pb-2 px-4 flex items-end bg-bg-color">
                    <h3 class="text-accent">
                        {{ person.name }}
                    </h3>
                    <p class="pb-1 pl-4">{{ person.role }}</p>
                </div>
                <img
                    class="-z-[1] flex-shrink-0 min-h-full min-w-full object-cover hover:scale-105 transition-transform duration-300"
                    :src="person.image"
                />
            </li>
        </ul>
    </div>
</template>

<style scoped>
h3 {
    font-family: "Thunder HC";
    font-size: clamp(2rem, 2.5vw, 4rem);
    line-height: clamp(2rem, 2.5vw, 4rem);
}
p {
    font-size: clamp(1rem, 1vw, 2rem);
}
</style>
