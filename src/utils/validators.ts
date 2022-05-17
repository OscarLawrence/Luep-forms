import { FormFieldValueT } from '@/composables/FormValidation/types';

export const required = (val: FormFieldValueT) => !!val && val !== '';

export const email = (val: FormFieldValueT) => !!val && /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(val);
