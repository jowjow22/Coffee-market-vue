<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <CartCoffeeCard :coffee="coffees[0]" />
  </div>
</template>
<script lang="ts" setup>
import CartCoffeeCard from "@/components/CartCoffeeCard/CartCoffeeCard.vue";
import { coffees } from "@/assets/coffees";
</script>
