import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "../views/Layout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: Layout,
            children: [
                {
                    path: "/",
                    name: "home",
                    component: HomeView,
                },
            ],
            // {
            //     path: "/about",
            //     name: "about",
            //     component: () => import("../views/AboutView.vue"),
            // },
        },
    ],
});

export default router;

