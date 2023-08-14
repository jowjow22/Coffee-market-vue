import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

export const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(pinia).mount("#app");
