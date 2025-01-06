import { ChangeEvent } from "react";
export declare function useInput(val?: string): {
    state: string | undefined;
    setState: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
    setStatus: import("react").Dispatch<import("react").SetStateAction<InputStatus>>;
    reset(): void;
    bindings: {
        value: string | undefined;
        status: InputStatus;
        onChange(e: ChangeEvent<HTMLInputElement>): void;
    };
};
export type InputStatus = "default" | "success" | "error" | "warning";
