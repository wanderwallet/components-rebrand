import { CSSProperties, HTMLProps, ReactNode } from "react";
import { InputStatus } from "../hooks";
export declare function Input({ label, fullWidth, sizeVariant, status, disabled, variant, iconLeft, iconRight, errorMessage, special, inputContainerStyle, labelStyle, type, onBlur, ...props }: SharedProps & InputProps & HTMLProps<HTMLInputElement>): JSX.Element;
type InputSize = "small" | "normal";
type InputVariant = "default" | "search" | "dropdown";
export interface SharedProps {
    fullWidth?: boolean;
    sizeVariant?: InputSize;
    variant?: InputVariant;
    special?: boolean;
    status?: InputStatus;
    disabled?: boolean;
    hasRightIcon?: boolean;
    inputContainerStyle?: CSSProperties;
    labelStyle?: CSSProperties;
}
export interface InputProps {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    label?: ReactNode;
    errorMessage?: string;
}
export declare const InputWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SharedProps, never>;
export declare const Label: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, {}, never>;
export declare const ErrorMsg: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, {}, never>;
export declare const InputElement: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, SharedProps, never>;
export declare const IconWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    position: "left" | "right";
}, never>;
export {};
