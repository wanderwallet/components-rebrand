import { HTMLProps } from "react";
export declare function Checkbox({ children, checked, onChange, ...props }: CheckboxProps & Omit<HTMLProps<HTMLDivElement>, "onChange">): JSX.Element;
interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => any;
}
export {};
