<template>
  <div class="mb-4">
    <label :for="name || id">
      <div class="flex items-center">
        <span class="mr-1">{{ label }}</span>
        <Image v-if="labelImg" width="20px" height="20px" :src="labelImg" :alt="imgAlt" />
      </div>
      <div class="flex items-center">
        <select
          class="callingCodeSelect w-10 mr-1 bg-transparent"
          name="country"
          :value="countryCode"
          style="background-color: transparent"
          @change="updateCountry"
        >
          <option value="" class="bg-transparent">Other</option>
          <option class="bg-transparent" v-for="data in codes" :value="data.code" :key="data.code">
            <li class="bg-transparent">{{ data.flag }} {{ data.dialCode }}</li>
          </option>
        </select>
        <input
          class="inputField"
          :class="{ focus: isFocus, error: errors.length > 0, disabled }"
          type="tel"
          :name="name || id"
          :placeholder="placeholder"
          :value="number"
          :disabled="disabled"
          clearable
          @input="updateValue"
          @focus="() => (isFocus = true)"
          @blur="() => (isFocus = false)"
        />
      </div>

      <p v-for="(error, i) in errors" :key="i" class="text-error text-[14px]">
        {{ error }}
      </p>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { PropType, toRef, ref, watch } from 'vue';
import { AsYouType, CountryCode, parseNumber } from 'libphonenumber-js';
import MetaData from '@/metaData/phoneData.json';
import useFieldValidation, { FormFieldRulesI } from '@/composables/useFieldValidation';
import Image from './Image.vue';

const props = defineProps({
  label: { type: String, required: true },
  invalidMsg: { type: String, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  labelImg: { type: String, default: null },
  imgAlt: { type: String, default: 'null' },
  rules: { type: Object as PropType<FormFieldRulesI>, default: null },
  validateOnSetup: { type: Boolean, default: false },
  modelValue: { type: String as PropType<string | null>, default: null },
  defaultCountry: {
    type: String as PropType<CountryCode | null>,
    default: () => null,
  },
});

interface CountryMetaInterface {
  code: string;
  dialCode: string;
  flag: string;
  name: string;
}

const sortCodes = (a: CountryMetaInterface, b: CountryMetaInterface) => {
  if (+a.dialCode.replace('+', '') > +b.dialCode.replace('+', '')) return 1;
  if (+a.dialCode.replace('+', '') < +b.dialCode.replace('+', '')) return -1;
  return 0;
};

const parsedNumber = parseNumber(props.modelValue || '') as {
  country: CountryCode;
  phone: string;
};

const getDefaultCountryCode = (): CountryCode => {
  if (parsedNumber?.country) return parsedNumber.country;
  if (props.defaultCountry) return props.defaultCountry;
  let locale =
    typeof navigator !== 'undefined' ? (navigator.language.split('-') as string[] | string) : null;
  if (locale) {
    locale = locale[locale.length - 1].toUpperCase() as string;
    if (Object.keys(MetaData).includes(locale)) return locale as CountryCode;
  }
  return 'US';
};

const countryCodeProp = toRef(props, 'defaultCountry');
const countryCode = ref(getDefaultCountryCode() as CountryCode);

const getAsYouType = () => {
  let asYouType = new AsYouType();
  if (countryCode.value) {
    asYouType = new AsYouType(countryCode.value);
  }
  return asYouType;
};

const number = ref(parsedNumber.phone ? getAsYouType().input(parsedNumber?.phone) : ''); // getAsYouType().input(parsedNumber?.phone)

const codes = Object.entries(MetaData)
  .map(([code, data]) => ({ code, ...data }))
  .sort(sortCodes);

const isFocus = ref(false);
const isValid = ref(false);

const emit = defineEmits(['update:modelValue']);

const updateCountry = (e: Event) => {
  const el = e.target as HTMLInputElement;
  const val = el.value as CountryCode;
  countryCode.value = val;
  const asYouType = getAsYouType();
  number.value = asYouType.input(el.value);
  isValid.value = asYouType.isValid();
  emit('update:modelValue', asYouType.getNumber()?.number);
};

//* Update Model Value
const updateValue = async (e: Event) => {
  const el = e.target as HTMLInputElement;
  const asYouType = getAsYouType();
  number.value = asYouType.input(el.value);
  isValid.value = asYouType.isValid();
  emit('update:modelValue', asYouType.getNumber()?.number);
};

const extendedRules = ref({
  ...props.rules,
  [props.invalidMsg]: (val: string) => !props.invalidMsg || (!!val && isValid.value),
} as FormFieldRulesI);

const { errors, id } = useFieldValidation(extendedRules, toRef(props, 'modelValue'), {
  validateOnSetup: props.validateOnSetup,
});

watch(countryCodeProp, (cc) => {
  console.log(cc, 'update CountryCode');
  if (cc) countryCode.value = cc;
});

const mValue = toRef(props, 'modelValue');

watch(mValue, (val) => {
  console.log(val, 'update val');
});
</script>

<style lang="scss">
.callingCodeSelect {
  appearance: none;
  width: 65px !important;
  @apply bg-white border-solid border-[1px] border-primary;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  height: 48px;
  padding: 16px 0 8px 0;
  font-size: 16px;
  outline: none;
  margin-bottom: 8px;
  &.focus {
    @apply border-highBlue border-2;
  }
  &.disabled {
    @apply border-dashed border-gray-400 text-gray-400;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
  }
  &.error {
    @apply border-error;
  }
}
</style>
