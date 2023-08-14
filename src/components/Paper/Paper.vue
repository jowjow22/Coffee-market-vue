<template>
  <div
    v-if="gradientBorder"
    class="h-full w-full rounded-md bg-gradient-to-r from-yellow to-purple p-[2px]"
    :class="[{ 'rounded-tr-[36px]  rounded-bl-[36px]': props.rounded }]"
  >
    <div
      class="flex h-full w-full items-center rounded-[4px] bg-white back p-5"
      :class="[
        { 'rounded-tr-[34px]  rounded-bl-[34px]': props.rounded },
        { 'p-12': large },
      ]"
    >
      <slot> </slot>
    </div>
  </div>
  <div
    v-else
    class="bg-base-card p-5 rounded-lg"
    :class="[
      { 'rounded-tr-[36px]  rounded-bl-[36px]': props.rounded },
      { 'p-12': large },
    ]"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  rounded: {
    type: Boolean,
    default: true,
  },
  large: {
    type: Boolean,
    default: false,
  },
  gradientBorder: {
    type: Boolean,
    default: false,
  },
});
</script>
