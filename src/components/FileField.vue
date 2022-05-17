<template>
  <div class="mb-4">
    <label :for="name" class="w-full h-full">
      <input
        class="hidden"
        ref="input"
        type="file"
        :accept="acceptString"
        :name="name"
        @change.prevent="updateValue"
        :multiple="multiple"
      />
      <button type="button" @click="handleClick" class="w-full h-full">
        <slot> Select File </slot>
      </button>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, computed } from 'vue';
import getUid from '@/utils/uid';

const props = defineProps({
  name: { type: String, default: () => getUid() },
  validateOnSetup: { type: Boolean, default: false },
  accept: { type: [String, Array] as PropType<string | string[]>, default: '' },
  modelValue: { type: Array as PropType<File[] | null>, default: () => null },
  multiple: { type: Boolean, default: false },
});

const acceptString = computed(() => {
  if (Array.isArray(props.accept)) {
    return props.accept.join(', ');
  }
  return props.accept;
});

const input = ref(null as null | HTMLInputElement);

const handleClick = async () => {
  input.value?.click();
};

const emit = defineEmits(['update:modelValue']);

//* Update Model Value
const updateValue = async (e: Event) => {
  const el = e.target as HTMLInputElement;
  emit('update:modelValue', el.files ? Array.from(el.files) : null);
};
</script>

<style lang="scss" scoped></style>
