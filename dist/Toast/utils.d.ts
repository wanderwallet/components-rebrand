import { ReactNode } from "react";
import { ToastAction, ToastType } from "./index";
export interface ToastData {
    duration: number;
    content: ReactNode;
    type?: ToastType;
    action?: ToastAction;
}
export interface ToastDataWithID extends ToastData {
    id: string;
    addedAt: number;
}
export declare const ToastsContext: import("react").Context<{
    toasts: ToastDataWithID[];
    setToast: (toast: ToastData) => void;
}>;
export declare const useToasts: () => {
    toasts: ToastDataWithID[];
    setToast: (toast: ToastData) => void;
};
