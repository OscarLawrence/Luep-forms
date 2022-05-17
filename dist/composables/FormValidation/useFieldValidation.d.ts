import { Ref } from 'vue';
import { FormFieldRulesI as RulesI, SetupFormFieldOptionsI, FormFieldValueT, FormFieldErrorStateI } from './types';
declare const _default: (rules: Ref<RulesI> | RulesI, reactiveValue: Ref<FormFieldValueT>, options?: SetupFormFieldOptionsI) => {
    errors: Ref<string[]>;
    errorState: Ref<FormFieldErrorStateI>;
    id: string;
};
export default _default;
export declare type FormFieldRulesI = RulesI;
