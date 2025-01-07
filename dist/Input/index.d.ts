import { HTMLProps, ReactNode } from "react";
import { InputStatus } from "../hooks";
export declare function Input({ label, fullWidth, size, status, disabled, variant, iconLeft, iconRight, errorMessage, special, ...props }: Omit<SharedPropsV2, "hasLeftIcon"> & InputV2Props & HTMLProps<HTMLInputElement>): JSX.Element;
type InputSize = "small" | "normal";
type InputVariant = "default" | "search" | "dropdown";
export interface SharedPropsV2 {
    fullWidth?: boolean;
    size?: InputSize;
    variant?: InputVariant;
    special?: boolean;
    status?: InputStatus;
    disabled?: boolean;
    hasRightIcon?: boolean;
}
export interface InputV2Props {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    label?: ReactNode;
    errorMessage?: string;
}
export declare const InputContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SharedPropsV2, never>;
export declare const InputV2Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SharedPropsV2, never>;
export declare const LabelV2: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, {}, never>;
export declare const ErrorMsg: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, {}, never>;
export declare const InputV2Element: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, SharedPropsV2, never>;
export declare const IconWrapperV2: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    position: "left" | "right";
}, never>;
export {};
