import { inject, Ref, watch, reactive, computed } from 'vue';
import getUid from '@/utils/uid';
import { cloneDeep } from '@/utils/helpers';
import * as validatrs from '@/utils/validators';
//* types
import {
  FormFieldRulesI as RulesI,
  SetupFormFieldOptionsI,
  UpdateFormFieldFuncT,
  ValidateFormFieldFuncT,
  FormFieldValueT,
  FormFieldErrorStateI,
  FormFieldRuleFuncT,
  FormFieldRuleT,
} from './types';

export default (
  rules: Ref<RulesI>,
  reactiveValue: Ref<FormFieldValueT>,
  options: SetupFormFieldOptionsI
) => {
  const errorState = reactive({} as FormFieldErrorStateI);
  const validators = validatrs as { [key: string]: FormFieldRuleFuncT };
  const errors = computed(() =>
    Object.entries(errorState)
      .filter((v) => !v[1])
      .map((x) => x[0])
  );

  const id = getUid();
  if (!rules.value) return { errors, errorState, id };
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
  const updateFormField = inject('updateFormField') as UpdateFormFieldFuncT;

  const update = async () => {
    if (updateFormField) {
      updateFormField(id, errorState);
    }
  };

  const validate: ValidateFormFieldFuncT = async (value: FormFieldValueT) => {
    Object.entries(rules.value).forEach(([key, rule]) => {
      const ru = getRule(rule);
      if (ru) {
        errorState[key] = ru(value);
      }
    });
    update();
    return errorState;
  };

  watch(reactiveValue, async (v) => {
    validate(v);
  });

  watch(rules, async () => {
    validate(reactiveValue.value);
  });

  if (options.validateOnSetup) {
    validate(reactiveValue.value);
  }

  update();

  return { errors, errorState, id };
};

export type FormFieldRulesI = RulesI;
