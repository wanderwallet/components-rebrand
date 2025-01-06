import { HTMLAttributes } from "react";
export declare function Text({ children, title, subtitle, heading, noMargin, ...props }: TextProps & Omit<HTMLAttributes<any>, keyof TextProps>): JSX.Element;
export interface TextProps {
    title?: boolean;
    subtitle?: boolean;
    heading?: boolean;
    noMargin?: boolean;
}
