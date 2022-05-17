<template>
  <label :for="name || id">
    <div class="flex items-center" v-if="label">
      <span class="mr-1">{{ label }}</span>
      <Image v-if="labelImg" width="20px" height="20px" :src="labelImg" :alt="imgAlt" />
    </div>
    <div v-if="errorsTop" class="errors">
      <p v-for="(error, i) in errors" :key="i" class="text-error text-[14px]">
        {{ error }}
      </p>
    </div>

    <div
      ref="divRef"
      class="grow-wrap relative overflow-y-scroll"
      :style="{ 'max-height': maxHeight }"
    >
      <textarea
        :value="modelValue || undefined"
        :name="name || id"
        @input="handleInput"
        :rows="initialRows"
      ></textarea>
      <div class="absolute placeholder" v-if="!modelValue || modelValue === ''">
        {{ placeholder }}
      </div>
      <slot />
    </div>
    <div v-if="!errorsTop" class="errors">
      <p v-for="(error, i) in errors" :key="i" class="text-error text-[14px]">
        {{ error }}
      </p>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { ref, PropType, toRef, watch } from 'vue';
import useFieldValidation, { FormFieldRulesI } from '@/composables/useFieldValidation';
import Image from './Image.vue';

const props = defineProps({
  name: { type: String, default: null },
  label: { type: String, default: null },
  labelImg: { type: String, default: null },
  imgAlt: { type: String, default: 'null' },
  placeholder: { type: String, default: null },
  rules: { type: Object as PropType<FormFieldRulesI>, default: null },
  maxHeight: { type: String, default: '100%' },
  validateOnSetup: { type: Boolean, default: false },
  initialRows: { type: Number, default: 1 },
  modelValue: { type: String as PropType<string | null>, default: null },
  errorsTop: { type: Boolean, default: false },
});

const modelValue = toRef(props, 'modelValue');
const rules = toRef(props, 'rules');

const { errors, id } = useFieldValidation(rules, modelValue, {
  validateOnSetup: props.validateOnSetup,
});

const divRef = ref(null as null | HTMLDivElement);
const emit = defineEmits(['update:modelValue']);

const handleInput = async (e: Event) => {
  const el = e.target as HTMLTextAreaElement;
  if (divRef.value) {
    emit('update:modelValue', el.value || null);
  }
};

let previous: null | string = null;

watch(modelValue, (value) => {
  const currentValue = value as string;
  if (divRef.value) {
    divRef.value.dataset.replicatedValue = currentValue || undefined;
    if (
      currentValue &&
      previous &&
      previous[previous.length - 1] !== currentValue[currentValue.length - 1]
    ) {
      divRef.value.scrollTo(0, divRef.value.scrollHeight);
    }
  }
  previous = value;
});
</script>

<style lang="scss" scoped>
.grow-wrap {
  display: grid;
  word-break: break-word;
  &::after {
    content: attr(data-replicated-value) ' ';
    white-space: pre-wrap;
    visibility: hidden;
  }
  textarea {
    resize: none;
    outline: none;
  }

  &::after,
  textarea,
  .placeholder {
    padding: 0.5rem;
    font: inherit;
    grid-area: 1 / 1 / 2 / 2;
    background-color: transparent;
    z-index: 1;
  }
  .placeholder {
    z-index: 0;
    color: rgba(0, 0, 0, 0.3);
    margin-left: 2px;
    color: rgba(40, 40, 40, 0.3);
  }
}
label {
  display: block;
}
.errors {
  padding-left: 0.5rem;
  margin-left: 2px;
}
</style>
