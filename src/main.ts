import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

import { router } from "./router";
import App from "./App.vue";

import 'vue3-toastify/dist/index.css';
import "./style.css"

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(plugin, defaultConfig);
app.use(Vue3Toastify, {
    autoClose: 3000,
} as ToastContainerOptions);
app.mount("#app");
