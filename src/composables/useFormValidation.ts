import { provide, ref, reactive } from 'vue';

import { UpdateFormFieldFuncT, FormValidationStateI } from './types';

export default () => {
  const state = reactive({} as FormValidationStateI);
  const valid = ref(false);

  const triggerUpdate = async () => {
    let va = true;
    Object.values(state).forEach((item) => {
      Object.values(item).forEach((err) => {
        if (!err) va = false;
      });
    });
    valid.value = va;
  };

  const updateFormField: UpdateFormFieldFuncT = async (id, fieldState) => {
    state[id] = fieldState;
    triggerUpdate();
    return state;
  };
  provide('updateFormField', updateFormField);

  return { valid, state };
};
