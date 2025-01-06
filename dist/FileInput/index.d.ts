import { HTMLProps, MutableRefObject } from "react";
export declare function FileInput({ children, accept, multiple, inputRef, ...props }: Omit<HTMLProps<HTMLDivElement>, "ref"> & FileInputProps): JSX.Element;
interface FileInputProps {
    accept?: string;
    multiple?: boolean;
    inputRef: MutableRefObject<HTMLInputElement | undefined>;
}
export {};
