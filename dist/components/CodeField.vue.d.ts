import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    nFields: {
        type: NumberConstructor;
        default: number;
    };
    name: {
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
    type: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: PropType<import("@/composables/types").FormFieldRulesI>;
        default: null;
    };
    required: {
        type: StringConstructor;
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
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("done" | "update:modelValue")[], "done" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    nFields: {
        type: NumberConstructor;
        default: number;
    };
    name: {
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
    type: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: PropType<import("@/composables/types").FormFieldRulesI>;
        default: null;
    };
    required: {
        type: StringConstructor;
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
    onDone?: ((...args: any[]) => any) | undefined;
}, {
    required: string;
    type: string;
    name: string;
    disabled: boolean;
    modelValue: string | null;
    labelImg: string;
    imgAlt: string;
    rules: import("@/composables/types").FormFieldRulesI;
    validateOnSetup: boolean;
    nFields: number;
}>;
export default _default;
