import { HTMLProps, PropsWithChildren, ReactNode } from "react";
import { InputStatus } from "../hooks";
export declare function SelectV2({ children, label, fullWidth, small, status, ...props }: PropsWithChildren<SelectV2Props & HTMLProps<HTMLSelectElement>>): JSX.Element;
interface SelectV2Props {
    fullWidth?: boolean;
    small?: boolean;
    label?: ReactNode;
    status?: InputStatus;
}
export {};
