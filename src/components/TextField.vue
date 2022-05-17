<template>
  <div class="mb-4">
    <label :for="name || id">
      <div class="flex items-center">
        <span class="mr-1">{{ label }}</span>
        <Image v-if="labelImg" width="20px" height="20px" :src="labelImg" :alt="imgAlt" />
      </div>
      <input
        class="inputField"
        :class="{ focus: isFocus, error: errors.length > 0, disabled }"
        :type="type"
        :name="name || id"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        clearable
        @input="updateValue"
        @focus="() => (isFocus = true)"
        @blur="() => (isFocus = false)"
      />
      <p v-for="(error, i) in errors" :key="i" class="text-error text-[14px]">
        {{ error }}
      </p>
    </label>
    <p class="text-sm font-thin" v-show="hint && showHint">{{ hint }}</p>
  </div>
</template>

<script lang="ts" setup>
import { PropType, toRef, ref } from 'vue';
import useFieldValidation, { FormFieldRulesI } from '@/composables/useFieldValidation';
import Image from './Image.vue';

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, default: null },
  placeholder: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  labelImg: { type: String, default: null },
  imgAlt: { type: String, default: 'null' },
  type: { type: String, default: 'text' },
  rules: { type: Object as PropType<FormFieldRulesI>, default: null },
  validateOnSetup: { type: Boolean, default: false },
  hint: { type: String, default: null },
  showHint: { type: Boolean, default: false },
  modelValue: { type: String as PropType<string | null>, default: null },
});

const rules = toRef(props, 'rules');

const { errors, id } = useFieldValidation(rules, toRef(props, 'modelValue'), {
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
