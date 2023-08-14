<template>
  <Paper class="max-w-[300px] min-w-[300px] flex flex-col items-center gap-y-5">
    <img
      :src="props.coffee.imgSource"
      :alt="props.coffee.name"
      class="w-40 -mt-12"
    />
    <section class="flex flex-col items-center gap-y-3" v-if="!loading">
      <div class="flex flex-row flex-wrap items-center justify-center gap-2">
        <Tag
          class="bg-yellow-light text-yellow-dark"
          v-for="category in props.coffee.categories"
          >{{ category }}</Tag
        >
      </div>
      <h1 class="title-s">{{ props.coffee.name }}</h1>
      <p class="text-center text-m text-base-label">
        {{ props.coffee.description }}
      </p>
    </section>

    <section v-else>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-28 w-28 stroke-base-text"
        fill="none"
        stroke-width="6"
        viewBox="0 0 256 256"
      >
        <path
          class="path animate-[move_10s_linear_infinite]"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M212,76H32A12,12,0,0,0,20,88v48a100.24,100.24,0,0,0,26.73,68H32a12,12,0,0,0,0,24H208a12,12,0,0,0,0-24H193.27a100.75,100.75,0,0,0,20-32A44,44,0,0,0,256,128v-8A44.05,44.05,0,0,0,212,76Zm-16,60a76.27,76.27,0,0,1-42,68H86a76.27,76.27,0,0,1-42-68V100H196Zm36-8a20,20,0,0,1-12.57,18.55A97.17,97.17,0,0,0,220,136V101.68A20,20,0,0,1,232,120ZM68,48V24a12,12,0,0,1,24,0V48a12,12,0,0,1-24,0Zm40,0V24a12,12,0,0,1,24,0V48a12,12,0,0,1-24,0Zm40,0V24a12,12,0,0,1,24,0V48a12,12,0,0,1-24,0Z"
        ></path>
      </svg>
    </section>
    <footer class="flex flex-row items-center gap-x-10 mt-4">
      <p class="title-m text-base-text">
        <span class="text-m">R$</span> {{ formatedPrice }}
      </p>
      <div class="flex flex-row gap-x-2">
        <Counter v-model="counter" :min="1" :max="15" />
        <Button
          icon
          class="bg-purple-dark text-white"
          @click="addToCart(coffeeToCart)"
        >
          <template #icon>
            <PhShoppingCart :size="24" weight="fill" /> </template
        ></Button>
      </div>
    </footer>
  </Paper>
</template>
<script lang="ts" setup>
import { PhShoppingCart } from "@phosphor-icons/vue";
import Counter from "@/components/Counter/Counter.vue";
import Button from "@/components/Button/Button.vue";
import Paper from "@/components/Paper/Paper.vue";
import Tag from "@/components/Tag/Tag.vue";
import { ICoffee, ICoffeeToCard } from "@/models/coffee";
import { PropType, computed, onMounted, ref } from "vue";
import { delay } from "@/utils/delay";

const props = defineProps({
  coffee: {
    type: Object as PropType<ICoffee | ICoffeeToCard>,
    required: true,
  },
});
const loading = ref(false);
const emits = defineEmits(["add-to-cart"]);

const addToCart = async (coffee: ICoffeeToCard) => {
  emits("add-to-cart", coffee);
  loading.value = true;
  await delay(1000);
  loading.value = false;
  counter.value = 1;
};

const coffeeToCart = computed(() => {
  return {
    ...props.coffee,
    quantity: counter.value,
  };
});

const formatedPrice = computed(() => {
  return props.coffee.price.toFixed(2).replace(".", ",");
});

onMounted(() => {
  if (!("quantity" in props.coffee)) return;
  counter.value = props.coffee.quantity;
});

const counter = ref(0);
</script>
