import { PropsWithChildren, ReactNode } from "react";
export declare function ModalV2({ children, open, setOpen, actions, root }: PropsWithChildren<ModalV2Props>): import("react").ReactPortal;
interface ModalV2Props {
    open: boolean;
    setOpen: (open: boolean) => any;
    actions?: ReactNode;
    root?: Element | DocumentFragment;
}
export {};
