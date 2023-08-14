<template>
  <button
    class="rounded-lg min-w-max transition-colors"
    :class="[
      { 'button-g w-full px-2 py-3': large },
      { 'button-m': !large },
      {
        'max-w-fit flex flex-row items-center justify-center  gap-x-1 px-2 py-2':
          icon,
      },
    ]"
  >
    <slot v-if="icon" name="icon"></slot>
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
defineProps({
  icon: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
});
</script>
