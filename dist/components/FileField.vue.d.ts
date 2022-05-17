import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: () => string;
    };
    validateOnSetup: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: PropType<string | string[]>;
        default: string;
    };
    modelValue: {
        type: PropType<File[] | null>;
        default: () => null;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: () => string;
    };
    validateOnSetup: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: PropType<string | string[]>;
        default: string;
    };
    modelValue: {
        type: PropType<File[] | null>;
        default: () => null;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    multiple: boolean;
    accept: string | string[];
    modelValue: File[] | null;
    validateOnSetup: boolean;
}>;
export default _default;
