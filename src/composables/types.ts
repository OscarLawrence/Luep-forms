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

export type UpdateFormFieldFuncT = (
  id: string,
  fieldState: FormFieldErrorStateI
) => Promise<FormValidationStateI>;

export type ValidateFormFieldFuncT = (value: FormFieldValueT) => Promise<FormFieldErrorStateI>;
