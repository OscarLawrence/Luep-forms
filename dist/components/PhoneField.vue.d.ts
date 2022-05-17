import { PropType } from 'vue';
import { CountryCode } from 'libphonenumber-js';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    invalidMsg: {
        type: StringConstructor;
        default: null;
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
    defaultCountry: {
        type: PropType<CountryCode | null>;
        default: () => null;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    invalidMsg: {
        type: StringConstructor;
        default: null;
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
    defaultCountry: {
        type: PropType<CountryCode | null>;
        default: () => null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    disabled: boolean;
    placeholder: string;
    modelValue: string | null;
    labelImg: string;
    imgAlt: string;
    rules: import("../composables/types").FormFieldRulesI;
    validateOnSetup: boolean;
    invalidMsg: string;
    defaultCountry: CountryCode | null;
}>;
export default _default;
