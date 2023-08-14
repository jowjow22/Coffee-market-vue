<template>
  <main>
    <section
      class="max-w-screen h-screen bg-cover xl:px-40 gap-x-14 font-baloo items-center flex flex-row"
      :style="{ backgroundImage: `url(${Background})` }"
    >
      <div class="px-10">
        <h1 class="title-l lg:title-xl">
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p class="text-l mb-16">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ul class="grid grid-cols-2 grid-rows-2 gap-y-5 place-content-start">
          <li class="flex flex-row items-center gap-x-3 max-w-fit">
            <span
              class="min-w-[32px] h-8 rounded-full grid place-items-center bg-yellow-dark"
            >
              <PhShoppingCart :size="18" color="white" weight="fill" />
            </span>
            <p class="text-xs lg:text-lg">Compra simples e segura</p>
          </li>
          <li class="flex flex-row items-center gap-x-3 max-w-fit">
            <span
              class="min-w-[32px] h-8 rounded-full grid place-items-center bg-base-text"
            >
              <PhPackage :size="18" color="white" weight="fill" />
            </span>
            <p class="text-xs lg:text-lg">Embalagem mantém o café intacto</p>
          </li>
          <li class="flex flex-row items-center gap-x-3 max-w-fit">
            <span
              class="min-w-[32px] h-8 rounded-full grid place-items-center bg-yellow"
            >
              <PhTimer :size="18" color="white" weight="fill" />
            </span>
            <p class="text-xs lg:text-lg">Entrega rápida e rastreada</p>
          </li>
          <li class="flex flex-row items-center gap-x-3 max-w-fit">
            <span
              class="min-w-[32px] h-8 rounded-full grid place-items-center bg-purple"
            >
              <PhCoffee :size="18" color="white" weight="fill" />
            </span>
            <p class="text-xs lg:text-lg">O café chega fresquinho até você</p>
          </li>
        </ul>
      </div>
      <img :src="HeroImage" class="w-1/2 hidden sm:block" />
    </section>
    <section class="flex flex-col gap-y-8 mb-20 max-w-fit mx-auto">
      <h1 class="title-l mb-10">Nossos cafés</h1>
      <div
        class="flex flex-row flex-wrap gap-x-9 gap-y-10 items-center justify-center lg:justify-start max-w-[90vw]"
      >
        <CoffeeCard
          v-for="coffee in coffeeList"
          :coffee="coffee"
          @add-to-cart="addToCart"
          class="shrink basis-2/6"
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { coffees } from "@/assets/coffees.ts";
import Background from "@/assets/Background.svg";
import HeroImage from "@/assets/hero.svg";
import CoffeeCard from "@/components/CoffeeCard/CoffeeCard.vue";
import { ref } from "vue";
import {
  PhShoppingCart,
  PhTimer,
  PhCoffee,
  PhPackage,
} from "@phosphor-icons/vue";
import { ICoffeeToCard } from "@/models/coffee";
import { useCartStore } from "@/store/cartStore";

const coffeeList = ref(coffees);

const cartStore = useCartStore();

const addToCart = (coffee: ICoffeeToCard) => {
  cartStore.addCoffeeToCart(coffee);
};
</script>
