import { HTMLProps, ReactNode } from "react";
import { InputStatus } from "../hooks";
export declare function InputV2({ label, fullWidth, small, status, disabled, dropdown, popup, search, icon, errorMessage, ...props }: SharedPropsV2 & InputV2Props & HTMLProps<HTMLInputElement>): JSX.Element;
export interface SharedPropsV2 {
    fullWidth?: boolean;
    small?: boolean;
    dropdown?: boolean;
    popup?: boolean;
    search?: boolean;
    status?: InputStatus;
    disabled?: boolean;
}
export interface InputV2Props {
    icon?: ReactNode;
    label?: ReactNode;
    errorMessage?: string;
}
export declare const InputV2Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SharedPropsV2, never>;
export declare const LabelV2: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, {}, never>;
export declare const ErrorMsg: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, {}, never>;
export declare const InputV2Element: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, SharedPropsV2, never>;
export declare const IconWrapperV2: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SharedPropsV2, never>;
