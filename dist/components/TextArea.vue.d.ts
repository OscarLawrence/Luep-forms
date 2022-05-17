import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: null;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    labelImg: {
        type: StringConstructor;
        default: null;
    };
    imgAlt: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    rules: {
        type: PropType<import("../composables/types").FormFieldRulesI>;
        default: null;
    };
    maxHeight: {
        type: StringConstructor;
        default: string;
    };
    validateOnSetup: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialRows: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: PropType<string | null>;
        default: null;
    };
    errorsTop: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: null;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    labelImg: {
        type: StringConstructor;
        default: null;
    };
    imgAlt: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    rules: {
        type: PropType<import("../composables/types").FormFieldRulesI>;
        default: null;
    };
    maxHeight: {
        type: StringConstructor;
        default: string;
    };
    validateOnSetup: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialRows: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: PropType<string | null>;
        default: null;
    };
    errorsTop: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    maxHeight: string;
    label: string;
    placeholder: string;
    modelValue: string | null;
    labelImg: string;
    imgAlt: string;
    rules: import("../composables/types").FormFieldRulesI;
    validateOnSetup: boolean;
    initialRows: number;
    errorsTop: boolean;
}>;
export default _default;
