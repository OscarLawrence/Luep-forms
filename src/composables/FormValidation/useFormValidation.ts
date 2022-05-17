import { provide, ref, Ref } from 'vue';
import * as validatrs from '@/utils/validators';

// Types
import {
  SetupFormFieldFuncT,
  ValidateFormFieldFuncT,
  FormValidationStateI,
  FormFieldErrorStateI,
  FormFieldRuleFuncT,
  FormFieldRuleT,
} from './types';

const validators = validatrs as { [key: string]: FormFieldRuleFuncT };

export default (): { valid: Ref<boolean>; state: FormValidationStateI } => {
  const state = {} as FormValidationStateI;

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

  const getRule = (rule: FormFieldRuleT) => {
    if (typeof rule === 'string') {
      if (Object.keys(validators).includes(rule)) {
        return validators[rule] as FormFieldRuleFuncT;
      }
      console.warn(`"${rule}" is no validator, please use one of ${Object.keys(validators)}`);
      return null;
    }
    if (typeof rule === 'boolean') {
      return () => rule;
    }
    return rule;
  };

  const setupFormField: SetupFormFieldFuncT = async (id, rules, value, options = {}) => {
    const errorState: FormFieldErrorStateI = {};
    Object.entries(rules).forEach(([key, rule]) => {
      const ru = getRule(rule);
      if (ru) {
        errorState[key] = options.validateOnSetup ? ru(value) : false;
      }
    });
    state[id] = errorState;

    return errorState;
  };

  const validateFormField: ValidateFormFieldFuncT = async (id, rules, value) => {
    state[id] = {};
    Object.entries(rules).forEach(([key, rule]) => {
      const ru = getRule(rule);
      if (ru) {
        state[id][key] = ru(value);
      }
    });
    triggerUpdate();
    return state[id];
  };
  provide('validateFormField', validateFormField);
  provide('setupFormField', setupFormField);

  return { valid, state };
};
