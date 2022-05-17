import { Ref } from 'vue';
import { FormFieldRulesI as RulesI, SetupFormFieldOptionsI, FormFieldValueT } from './types';
declare const _default: (rules: Ref<RulesI>, reactiveValue: Ref<FormFieldValueT>, options: SetupFormFieldOptionsI) => {
    errors: import("vue").ComputedRef<string[]>;
    errorState: {
        [x: string]: boolean | null;
    };
    id: string;
};
export default _default;
export declare type FormFieldRulesI = RulesI;
