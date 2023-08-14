<template>
  <div>
    <input
      type="radio"
      :id="id"
      :value="value"
      v-bind="{ ...$attrs }"
      @change="(e) => updateValue(e as InputEvent)"
      class="hidden peer"
      :name="name"
    />
    <label
      :for="id"
      class="flex items-center min-w-[200px] gap-x-2 p-4 bg-base-button rounded-lg text-base-text peer-checked:bg-purple-light peer-checked:border-purple-dark peer-checked:border"
    >
      <slot name="icon"></slot>
      <p class="w-full text-s uppercase font-semibold">
        <slot></slot>
      </p>
    </label>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const updateValue = (e: InputEvent) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
