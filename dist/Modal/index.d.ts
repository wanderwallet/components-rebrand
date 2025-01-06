import { PropsWithChildren, ReactNode } from "react";
export declare function Modal({ children, open, setOpen, actions, root }: PropsWithChildren<ModalProps>): import("react").ReactPortal;
export declare const ModalButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
interface ModalProps {
    open: boolean;
    setOpen: (open: boolean) => any;
    actions?: ReactNode;
    root?: Element | DocumentFragment;
}
export {};
