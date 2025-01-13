import { type TextProps } from "../Text";
import { type HTMLAttributes, type HTMLProps } from "react";
export declare const Checkbox: ({ checked, onChange, size, label, labelProps }: CheckboxProps & Omit<HTMLProps<HTMLDivElement>, "onChange">) => JSX.Element;
interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    id?: string;
    size?: number;
    label?: string;
    labelProps?: TextProps & Omit<HTMLAttributes<HTMLElement>, keyof TextProps>;
}
export default Checkbox;
