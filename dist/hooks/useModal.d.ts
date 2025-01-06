/// <reference types="react" />
export declare function useModal(defaultOpen?: boolean): {
    isOpen: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    bindings: {
        open: boolean;
        setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    };
};
