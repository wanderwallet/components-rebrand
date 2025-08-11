import { CSSProperties, HTMLProps, ReactNode } from "react";
import { InputStatus } from "../hooks";
export declare function Input({ label, fullWidth, sizeVariant, status, disabled, variant, iconLeft, iconRight, errorMessage, special, inputContainerStyle, labelStyle, type, inputFooter, onBlur, stacked, ...props }: SharedProps & InputProps & HTMLProps<HTMLInputElement>): JSX.Element;
type InputSize = "small" | "normal" | "large";
type InputVariant = "default" | "search" | "dropdown";
export interface SharedProps {
    fullWidth?: boolean;
    sizeVariant?: InputSize;
    variant?: InputVariant;
    special?: boolean;
    status?: InputStatus;
    disabled?: boolean;
    hasRightIcon?: boolean;
    stacked?: boolean;
    inputContainerStyle?: CSSProperties;
    labelStyle?: CSSProperties;
    inputFooter?: ReactNode;
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
export declare const Icon: import("styled-components").StyledComponent<(props: import("react").SVGProps<SVGSVGElement>) => React.JSX.Element, import("styled-components").DefaultTheme, {
    disabled?: boolean | undefined;
}, never>;
export {};
