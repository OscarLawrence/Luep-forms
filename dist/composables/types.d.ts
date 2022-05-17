export declare type FormFieldValueT = null | string;
export declare type FormFieldRuleFuncT = (value: FormFieldValueT) => boolean | null;
export declare type validatorsT = 'required' | 'email';
export declare type FormFieldRuleT = FormFieldRuleFuncT | validatorsT | boolean;
export interface FormFieldErrorStateI {
    [key: string]: boolean | null;
}
export interface FormFieldRulesI {
    [key: string]: FormFieldRuleT;
}
export interface SetupFormFieldOptionsI {
    validateOnSetup?: boolean | null;
}
export interface FormValidationStateI {
    [key: string]: FormFieldErrorStateI;
}
export declare type UpdateFormFieldFuncT = (id: string, fieldState: FormFieldErrorStateI) => Promise<FormValidationStateI>;
export declare type ValidateFormFieldFuncT = (value: FormFieldValueT) => Promise<FormFieldErrorStateI>;
