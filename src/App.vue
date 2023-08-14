<template>
  <Header />
  <router-view />
</template>
<script lang="ts" setup>
import Header from "@/components/Header/Header.vue";
import { useCartStore } from "@/store/cartStore";
import { useOrderStore } from "./store/orderStore";
import { onBeforeMount } from "vue";

const cartStore = useCartStore();
const orderStore = useOrderStore();

onBeforeMount(() => {
  orderStore.loadOrder();
  cartStore.loadCart();
});
</script>
