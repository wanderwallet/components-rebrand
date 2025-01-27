import { PropsWithChildren, ReactNode } from "react";
export declare function Modal({ children, open, setOpen, actions, root, showCloseIcon }: PropsWithChildren<ModalProps>): import("react").ReactPortal;
interface ModalProps {
    open: boolean;
    setOpen: (open: boolean) => any;
    actions?: ReactNode;
    root?: Element | DocumentFragment;
    showCloseIcon?: boolean;
}
export {};
