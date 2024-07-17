import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import { router } from "./router";
import App from "./App.vue";
import "./style.css"

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(plugin, defaultConfig);
app.mount("#app");
