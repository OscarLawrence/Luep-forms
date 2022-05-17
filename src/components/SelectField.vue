<template>
  <div class="mb-4">
    <label :for="name || id">
      <div class="flex items-center">
        <span class="mr-1">{{ label }}</span>
        <Image v-if="labelImg" width="20px" height="20px" :src="labelImg" :alt="imgAlt" />
      </div>
      <select
        class="inputField"
        :class="{ focus: isFocus, error: errors.length > 0, disabled }"
        :name="name || id"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        clearable
        @change="updateValue"
      >
        <option v-if="placeholder" value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <p v-for="(error, i) in errors" :key="i" class="text-error text-[14px]">
        {{ error }}
      </p>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { PropType, toRef, ref } from 'vue';
import useFieldValidation, { FormFieldRulesI } from '@/composables/useFieldValidation';
import { OptionI } from '@/types/forms/select';
import Image from './Image.vue';

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, default: null },
  placeholder: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  labelImg: { type: String, default: null },
  imgAlt: { type: String, default: 'null' },
  options: { type: Array as PropType<OptionI[]>, default: () => [] },
  rules: { type: Object as PropType<FormFieldRulesI>, default: null },
  validateOnSetup: { type: Boolean, default: false },
  modelValue: { type: String as PropType<string | null>, default: null },
});

const { errors, id } = useFieldValidation(toRef(props, 'rules'), toRef(props, 'modelValue'), {
  validateOnSetup: props.validateOnSetup,
});

const isFocus = ref(false);

const emit = defineEmits(['update:modelValue']);

//* Update Model Value
const updateValue = async (e: Event) => {
  const el = e.target as HTMLInputElement;
  emit('update:modelValue', el.value);
};
</script>

<style lang="scss"></style>
