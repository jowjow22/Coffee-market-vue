<template>
  <header
    class="px-5 sm:px-32 lg:px-40 w-screen fixed backdrop-blur-xl bg-white/30 py-8 flex justify-between flex-row"
  >
    <router-link to="/">
      <img class="w-14 sm:w-auto" src="@/assets/Logo.svg" />
    </router-link>
    <nav class="flex flex-row gap-x-5 max-w-full">
      <Button class="bg-purple-light text-purple" icon>
        <template #icon>
          <PhMapPin :size="18" weight="fill" />
        </template>
        {{ formatedAdress }}
      </Button>
      <CartButton />
    </nav>
  </header>
</template>
<script setup lang="ts">
import { PhMapPin } from "@phosphor-icons/vue";
import Button from "@/components/Button/Button.vue";
import CartButton from "@/components/CartButton/CartButton.vue";
import { useOrderStore } from "@/store/orderStore";
import { computed } from "vue";

const orderStore = useOrderStore();

const formatedAdress = computed(() => {
  const { city, state } = orderStore.getAdress;

  return `${city}, ${state.toUpperCase()}`;
});
</script>
