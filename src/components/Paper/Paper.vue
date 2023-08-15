<template>
  <article
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
  </article>
  <article
    v-else
    class="bg-base-card p-12 rounded-lg"
    :class="[
      { 'rounded-tr-[36px]  rounded-bl-[36px]': props.rounded },
      { 'p-5': !large },
    ]"
  >
    <slot></slot>
  </article>
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
