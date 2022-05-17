<template>
  <div class="mb-4">
    <label :for="name || id">
      <div class="flex items-center">
        <span class="mr-1">{{ label }}</span>
        <Image v-if="labelImg" width="20px" height="20px" :src="labelImg" :alt="imgAlt" />
      </div>
      <div class="flex justify-center">
        <input
          v-for="field in nFields"
          :key="field"
          class="codeField"
          :data-pos="field"
          :class="{ focus: isFocus[field - 1], error: errors.length > 0, disabled }"
          :type="type"
          :name="name || id"
          :value="code[field - 1]"
          :disabled="disabled"
          @input="updateValue"
          @focus="() => (isFocus[field - 1] = true)"
          @blur="() => (isFocus[field - 1] = false)"
        />
      </div>

      <p v-for="(error, i) in errors" :key="i" class="text-error text-[14px] text-center">
        {{ error }}
      </p>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { PropType, toRef, ref } from 'vue';
import { FormFieldRuleFuncT } from '@/composables/types';
import useFieldValidation, { FormFieldRulesI } from '@/composables/useFieldValidation';
import Image from './Image.vue';

const props = defineProps({
  label: { type: String, required: true },
  nFields: { type: Number, default: 4 },
  name: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  labelImg: { type: String, default: null },
  imgAlt: { type: String, default: 'null' },
  type: { type: String, default: 'text' },
  rules: { type: Object as PropType<FormFieldRulesI>, default: null },
  required: { type: String, default: null },
  validateOnSetup: { type: Boolean, default: false },
  modelValue: { type: String as PropType<string | null>, default: null },
});

const modelValue = toRef(props, 'modelValue');

let rules = toRef(props, 'rules');

if (props.required) {
  const requiredRule: FormFieldRuleFuncT = (val: string | null) =>
    !!val && val.length === props.nFields;
  rules = ref({ ...rules.value, [props.required]: requiredRule });
}

const { errors, id } = useFieldValidation(rules, modelValue, {
  validateOnSetup: props.validateOnSetup,
});

const code = ref(modelValue.value ? [...modelValue.value] : Array(props.nFields));
const isFocus = ref(Array(props.nFields).fill(false));

const emit = defineEmits(['update:modelValue', 'done']);

//* Update Model Value
const updateValue = async (e: Event) => {
  const el = e.target as HTMLInputElement;
  let pos = el.getAttribute('data-pos') as string | number;
  pos = +pos - 1;
  code.value[pos] = el.value;
  emit('update:modelValue', code.value?.join(''));
  if (el.value) {
    if (pos < props.nFields - 1) {
      const next = el.nextSibling as HTMLInputElement;
      next.focus();
    } else {
      el.blur();
      emit('done');
    }
  }
};
</script>

<style lang="scss">
.codeField {
  @apply w-10 h-10 border-solid border-[1px] border-primary m-2 rounded-md text-center;
  height: 48px;
  width: 48px;
  font-size: 16px;
  margin-top: 16px;
  outline: none !important;
  &.focus {
    @apply border-highBlue border-2;
  }
  &.disabled {
    @apply border-dashed border-gray-400 text-gray-400;
  }
  &.error {
    @apply border-error;
  }
}
</style>
