import { HTMLProps, ReactNode } from "react";
import { InputStatus } from "../hooks";
export declare function Input({ label, fullWidth, small, status, alternative, icon, ...props }: SharedProps & InputProps & HTMLProps<HTMLInputElement>): JSX.Element;
export interface SharedProps {
    fullWidth?: boolean;
    alternative?: boolean;
    small?: boolean;
    status?: InputStatus;
}
export interface InputProps {
    icon?: ReactNode;
    label?: ReactNode;
}
export declare const InputWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SharedProps, never>;
export declare const Label: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, {}, never>;
export declare const side_padding = 1.25;
export declare const top_padding = 0.75;
export declare const InputElement: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, SharedProps, never>;
export declare const IconWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SharedProps, never>;
