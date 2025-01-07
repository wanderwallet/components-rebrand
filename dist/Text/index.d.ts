import { HTMLAttributes } from "react";
declare const fontWeights: {
    readonly extraLight: 200;
    readonly light: 300;
    readonly regular: 400;
    readonly medium: 500;
    readonly semibold: 600;
    readonly bold: 700;
    readonly extrabold: 800;
};
declare const sizes: {
    readonly "7xl": "3.5rem";
    readonly "6xl": "3rem";
    readonly "5xl": "2.75rem";
    readonly "4xl": "2.5rem";
    readonly "3xl": "2rem";
    readonly "2xl": "1.75rem";
    readonly xl: "1.5rem";
    readonly lg: "1.25rem";
    readonly base: "1.125rem";
    readonly md: "1rem";
    readonly sm: "0.875rem";
    readonly xs: "0.75rem";
    readonly "2xs": "0.625rem";
    readonly "3xs": "0.5rem";
    readonly "4xs": "0.375rem";
    readonly "5xs": "0.25rem";
    readonly "6xs": "0.125rem";
    readonly "7xs": "0.0625rem";
};
export declare function Text({ children, lineHeight, noMargin, as, size, weight, variant, ...props }: TextProps & Omit<HTMLAttributes<HTMLElement>, keyof TextProps>): JSX.Element;
export interface TextProps {
    as?: "p" | "span" | "div";
    size?: keyof typeof sizes;
    weight?: keyof typeof fontWeights;
    variant?: "primary" | "secondary";
    lineHeight?: number;
    noMargin?: boolean;
}
export {};
