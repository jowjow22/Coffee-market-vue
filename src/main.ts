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
  dsn: "https://a0648b689418ee1195fb094b1d49cd7e@o4509072911368192.ingest.us.sentry.io/4509072913465344",
});

app.use(router).use(pinia).mount("#app");
