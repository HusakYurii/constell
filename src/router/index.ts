import { createWebHistory, createRouter } from "vue-router";

import { HomePage } from "@pages/home";
import { EditContactPage, CreateContactPage } from "@pages/contacts";

const routes = [
    { path: "/", component: HomePage },
    { path: "/contacts/:id", component: EditContactPage },
    { path: "/contacts/create", component: CreateContactPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
