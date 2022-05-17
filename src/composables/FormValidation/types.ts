//* FormField
export type FormFieldValueT = null | string;

export type FormFieldRuleFuncT = (value: FormFieldValueT) => boolean | null;

export type validatorsT = 'required' | 'email';

export type FormFieldRuleT = FormFieldRuleFuncT | validatorsT | boolean;

export interface FormFieldErrorStateI {
  [key: string]: boolean | null;
}

export interface FormFieldRulesI {
  [key: string]: FormFieldRuleT;
}

export interface SetupFormFieldOptionsI {
  validateOnSetup?: boolean | null;
}

//* FormValidation Provider
export interface FormValidationStateI {
  [key: string]: FormFieldErrorStateI;
}

export type SetupFormFieldFuncT = (
  id: string,
  rules: FormFieldRulesI,
  value: FormFieldValueT,
  options?: SetupFormFieldOptionsI
) => Promise<FormFieldErrorStateI>;

export type ValidateFormFieldFuncT = (
  id: string,
  rules: FormFieldRulesI,
  value: FormFieldValueT
) => Promise<FormFieldErrorStateI>;
