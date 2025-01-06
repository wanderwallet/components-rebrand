/// <reference types="react" />
export declare function useCheckbox(val?: boolean): {
    state: boolean;
    setState: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    reset: () => void;
    bindings: {
        checked: boolean;
        onChange: (newVal: boolean) => void;
    };
};
