import { PropType } from 'vue';
import { OptionI } from '@/types/forms/select';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelImg: {
        type: StringConstructor;
        default: null;
    };
    imgAlt: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: PropType<OptionI[]>;
        default: () => never[];
    };
    rules: {
        type: PropType<import("../composables/types").FormFieldRulesI>;
        default: null;
    };
    validateOnSetup: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: PropType<string | null>;
        default: null;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelImg: {
        type: StringConstructor;
        default: null;
    };
    imgAlt: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: PropType<OptionI[]>;
        default: () => never[];
    };
    rules: {
        type: PropType<import("../composables/types").FormFieldRulesI>;
        default: null;
    };
    validateOnSetup: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: PropType<string | null>;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    disabled: boolean;
    options: OptionI[];
    placeholder: string;
    modelValue: string | null;
    labelImg: string;
    imgAlt: string;
    rules: import("../composables/types").FormFieldRulesI;
    validateOnSetup: boolean;
}>;
export default _default;
