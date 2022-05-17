import { ref, inject, Ref, watch, isRef } from 'vue';
import getUid from '@/utils/uid';
//* types
import {
  FormFieldRulesI as RulesI,
  SetupFormFieldOptionsI,
  SetupFormFieldFuncT,
  ValidateFormFieldFuncT,
  FormFieldValueT,
  FormFieldErrorStateI,
} from './types';

export default (
  rules: Ref<RulesI> | RulesI,
  reactiveValue: Ref<FormFieldValueT>,
  options: SetupFormFieldOptionsI = {}
): { errors: Ref<string[]>; errorState: Ref<FormFieldErrorStateI>; id: string } => {
  const unwrappedRules = isRef(rules) ? rules.value : rules;

  const errorState = ref({} as FormFieldErrorStateI);
  const errors = ref([] as string[]);

  const id = getUid();

  if (!unwrappedRules || Object.keys(unwrappedRules).length === 0)
    return { errors, errorState, id };

  const setState = async (state: FormFieldErrorStateI) => {
    errorState.value = state;
    errors.value = Object.entries(state)
      .filter((v) => !v[1])
      .map((x) => x[0]);
  };

  const setupFormField = inject('setupFormField') as SetupFormFieldFuncT;
  const validateFormField = inject('validateFormField') as ValidateFormFieldFuncT;

  setupFormField(id, unwrappedRules, reactiveValue.value, options).then((errState) => {
    if (options.validateOnSetup) {
      setState(errState);
    }
  });

  // watch(rules, async (ruls) => {
  //   setState(await validateFormField(id, ruls, reactiveValue.value));
  // });

  watch(reactiveValue, async (n) => {
    setState(await validateFormField(id, unwrappedRules, n));
  });

  return { errors, errorState, id };
};

export type FormFieldRulesI = RulesI;
