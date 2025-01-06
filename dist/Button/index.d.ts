export declare const Button: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ButtonProps, never>;
type Variant = "primary" | "secondary" | "secondaryAlt";
type IconPosition = "left" | "right";
export interface ButtonProps {
    variant?: Variant;
    fullWidth?: boolean;
    icon?: boolean;
    iconPosition?: IconPosition;
    disabled?: boolean;
    loading?: boolean;
}
export {};
