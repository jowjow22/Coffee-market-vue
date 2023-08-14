<template>
  <input
    type="text"
    :value="modelValue"
    @input="(e) => updateValue(e as InputEvent)"
    class="px-3 py-3 rounded-md focus:outline-yellow-dark border-base-button border-2 bg-base-input text-s w-full"
    v-bind="{ ...$attrs }"
  />
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const updateValue = (e: InputEvent) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
