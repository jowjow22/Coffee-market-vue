<template>
  <li class="flex flex-row items-center gap-x-5 border-b pb-4">
    <img
      :src="props.coffee.imgSource"
      :alt="props.coffee.name"
      class="w-16 sm:w-20"
    />
    <section class="flex flex-col gap-y-3 w-full gap-x-10 mt-4">
      <div class="flex flex-row w-full items-center justify-between">
        <h1
          class="text-s sm:text-m max-w-[100px] break-words sm:max-w-none lg:text-l"
        >
          {{ props.coffee.name }}
        </h1>
        <p class="text-m font-bold text-base-text">
          <span class="text-s sm:text-m font-bold">R$</span> {{ formatedPrice }}
        </p>
      </div>
      <div class="flex flex-row gap-x-2">
        <Counter v-model="counter" :min="1" :max="15" />
        <Button class="bg-base-button" icon @click="remove"
          ><template #icon><PhTrash :size="18" class="fill-purple" /></template
          >REMOVER</Button
        >
      </div>
    </section>
  </li>
</template>
<script lang="ts" setup>
import { PhTrash } from "@phosphor-icons/vue";
import Counter from "@/components/Counter/Counter.vue";
import Button from "@/components/Button/Button.vue";
import { ICoffeeToCard } from "@/models/coffee";
import { PropType, computed, onMounted, ref, watch } from "vue";
import { useCartStore } from "@/store/cartStore";

const cartStore = useCartStore();

const props = defineProps({
  coffee: {
    type: Object as PropType<ICoffeeToCard>,
    required: true,
  },
});
const emits = defineEmits(["remove-from-cart"]);

const remove = async () => {
  emits("remove-from-cart", props.coffee.id);
};

const counter = ref(0);

onMounted(() => {
  counter.value = props.coffee.quantity;
});

watch(counter, (newValue) => {
  cartStore.updateQuantity(props.coffee.id, newValue);
});

const formatedPrice = computed(() => {
  return props.coffee.price.toFixed(2).replace(".", ",");
});
</script>
