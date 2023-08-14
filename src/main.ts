import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

export const pinia = createPinia();

const baseRote =
  process.env.NODE_ENV === "production" ? "/Coffee-market-vue/" : "/";
const router = createRouter({
  history: createWebHistory(baseRote),
  routes,
});

createApp(App).use(router).use(pinia).mount("#app");
