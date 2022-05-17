<template>
  <form>
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { watch } from 'vue';

import useFormValidation from '@/composables/useFormValidation';

const { valid } = useFormValidation();

defineProps({
  modelValue: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);

watch(valid, (val) => emit('update:modelValue', val));
</script>

<style lang="scss" scoped></style>
