import { createWebHistory, createRouter } from "vue-router";

import { HomePage } from "@pages/home";
import { EditContactPage } from "@pages/contacts";

const routes = [
    { path: "/", component: HomePage },
    { path: "/contacts/:id", component: EditContactPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
