<template>
  <router-link
    to="/checkout"
    class="bg-yellow-light px-2 py-2 rounded-lg relative text-yellow-dark hover:scale-105 transition-transform transform-gpu"
  >
    <span
      class="absolute min-w-[20px] min-h-[20px] bg-yellow-dark rounded-full text-white tag flex items-center justify-center -top-2 -right-2"
      >{{ cartQuantity }}</span
    >
    <PhShoppingCart :size="24" weight="fill"
  /></router-link>
</template>
<script setup lang="ts">
import { PhShoppingCart } from "@phosphor-icons/vue";
import { useCartStore } from "@/store/cartStore";
import { computed } from "vue";

const cartStore = useCartStore();

const cartQuantity = computed(() => {
  return cartStore.cartTotalItems;
});
</script>
