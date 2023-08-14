<template>
  <div class="flex flex-row items-center justify-center">
    <button
      @click="decrement"
      class="w-8 h-10 bg-base-button flex justify-center items-center rounded-l-lg"
    >
      <PhMinus :size="12" class="fill-purple" weight="bold" />
    </button>
    <p
      class="w-4 h-10 bg-base-button flex justify-center items-center leading-none"
    >
      {{ props.modelValue }}
    </p>
    <button
      @click="increment"
      class="w-8 h-10 bg-base-button flex justify-center items-center rounded-r-lg"
    >
      <PhPlus :size="12" class="fill-purple" weight="bold" />
    </button>
  </div>
</template>
<script lang="ts" setup>
import { PhPlus, PhMinus } from "@phosphor-icons/vue";
import { onMounted } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 10,
  },
});
onMounted(() => {
  emits("update:modelValue", props.min);
});
const emits = defineEmits(["update:modelValue"]);
const increment = () => {
  props.max > props.modelValue &&
    emits("update:modelValue", props.modelValue + 1);
};
const decrement = () => {
  props.min < props.modelValue &&
    emits("update:modelValue", props.modelValue - 1);
};
</script>
