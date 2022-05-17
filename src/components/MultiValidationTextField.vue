<template>
  <div class="my-4">
    <label :for="name || id">
      <div class="flex items-center">
        <span class="mr-2">{{ label }}</span>
      </div>
      <input
        class="inputField"
        :class="{ focus: isFocus, error: errors.length > 0, disabled }"
        :type="type"
        :name="name || id"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
        @focus="() => (isFocus = true)"
        @blur="() => (isFocus = false)"
      />
      <p
        v-for="(valid, error) in errorState"
        :key="error"
        class="mt-2 ml-1 text-error flex items-center"
      >
        <img
          :src="valid ? '/static/check_black_24dp.svg' : '/static/error_black_24dp.svg'"
          alt=""
          class="w-5 h-5 mr-2"
        />
        <i>{{ error }}</i>
      </p>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { PropType, toRef, ref } from 'vue';
import useFieldValidation, { FormFieldRulesI } from '@/composables/useFieldValidation';

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, default: null },
  placeholder: { type: String, required: false, default: null },
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'text' },
  rules: { type: Object as PropType<FormFieldRulesI>, default: null },
  validateOnSetup: { type: Boolean, default: false },
  modelValue: { type: String as PropType<string | null>, default: null },
});

const { errors, errorState, id } = useFieldValidation(
  toRef(props, 'rules'),
  toRef(props, 'modelValue'),
  {
    validateOnSetup: props.validateOnSetup,
  }
);

const isFocus = ref(false);

const emit = defineEmits(['update:modelValue']);

//* Update Model Value
const updateValue = async (e: Event) => {
  const el = e.target as HTMLInputElement;
  emit('update:modelValue', el.value);
};
</script>

<style lang="scss" scoped></style>
