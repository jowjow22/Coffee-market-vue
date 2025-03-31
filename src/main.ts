import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import * as Sentry from "@sentry/vue";

export const pinia = createPinia();

const baseRote =
  process.env.NODE_ENV === "production" ? "/Coffee-market-vue/" : "/";
const router = createRouter({
  history: createWebHistory(baseRote),
  routes,
});
const app = createApp(App)

Sentry.init({
  app,
  dsn: import.meta.env.VITE_VUE_APP_ENV_DNS,
});

app.use(router).use(pinia).mount("#app");
