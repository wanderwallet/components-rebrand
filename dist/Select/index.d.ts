import { HTMLProps, PropsWithChildren, ReactNode } from "react";
import { InputStatus } from "../hooks";
export declare function Select({ children, label, fullWidth, small, status, ...props }: PropsWithChildren<SelectProps & HTMLProps<HTMLSelectElement>>): JSX.Element;
interface SelectProps {
    fullWidth?: boolean;
    small?: boolean;
    label?: ReactNode;
    status?: InputStatus;
}
export {};
