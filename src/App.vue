<template>
  <Header />
  <router-view />
</template>
<script lang="ts" setup>
import Header from "@/components/Header/Header.vue";
import { useCartStore } from "@/store/cartStore";
import { useOrderStore } from "./store/orderStore";
import { onBeforeMount } from "vue";
import { onMounted } from "vue";
import { captureException } from "@sentry/vue";

const cartStore = useCartStore();
const orderStore = useOrderStore();

onMounted(() => {
  captureException("Test message");
  // @ts-ignore
  myUndefinedFunction();
});

onBeforeMount(() => {
  orderStore.loadOrder();
  cartStore.loadCart();
});
</script>
