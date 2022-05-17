<template>
  <label :for="name" class="flex flex-col cursor-pointer my-2 w-full">
    <div class="flex justify-between items-center">
      <div class="mr-3 text-gray-700 font-medium flex-grow">{{ label }}</div>
      <div class="relative">
        <input type="checkbox" class="sr-only" :value="value" @input="updateModelValue" />

        <div class="block bg-[#C4C4C4] w-10 h-4 rounded-full"></div>

        <div
          class="dot absolute -top-1 w-6 h-6 rounded-full transition"
          :class="{
            '-left-1': !value,
            'right-5': value,
            'bg-primary': value,
            'bg-white': !value,
          }"
        ></div>
      </div>
    </div>
    <p class="text-sm font-thin" v-show="hint">{{ hint }}</p>
  </label>
</template>

<script lang="ts" setup>
import { toRef } from 'vue';

const props = defineProps({
  label: { type: String, default: null },
  name: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  hint: { type: String, default: null },
  loading: { type: Boolean, default: false },
  modelValue: { type: Boolean, default: false },
});

const value = toRef(props, 'modelValue');

const emit = defineEmits(['update:modelValue']);

const updateModelValue = async () => {
  emit('update:modelValue', !value.value);
};
</script>

<style lang="scss" scoped>
input:checked ~ .dot {
  transform: translateX(100%);
}
</style>
