import { PropType } from 'vue';
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
        required: false;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
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
        required: false;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
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
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    name: string;
    disabled: boolean;
    placeholder: string;
    modelValue: string | null;
    rules: import("../composables/types").FormFieldRulesI;
    validateOnSetup: boolean;
}>;
export default _default;
