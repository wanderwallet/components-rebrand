import React from "react";
export declare const Button: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ButtonProps, never>;
type Variant = "primary" | "secondary" | "secondaryAlt";
type IconPosition = "left" | "right";
export interface ButtonProps {
    variant?: Variant;
    fullWidth?: boolean;
    height?: React.CSSProperties["height"];
    width?: React.CSSProperties["width"];
    icon?: React.ReactNode;
    iconPosition?: IconPosition;
    disabled?: boolean;
    loading?: boolean;
}
export {};
