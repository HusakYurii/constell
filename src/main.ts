import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

import Loading from 'vue3-loading-overlay';

import { router } from "./router";
import App from "./App.vue";

import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'vue3-toastify/dist/index.css';
import "./style.css"

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(plugin, defaultConfig);
//@ts-ignore
app.use(Loading, {});
app.use(Vue3Toastify, {
    autoClose: 3000,
} as ToastContainerOptions);
app.mount("#app");
