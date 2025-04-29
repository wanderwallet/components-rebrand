/// <reference types="react" />
import { ToastAction, ToastType } from "./index";
export type ToastPosition = "top" | "bottom";
export interface ToastData {
    duration: number;
    content: React.ReactNode | ((props: {
        close: () => void;
    }) => React.ReactNode);
    type?: ToastType;
    action?: ToastAction;
    showProgress?: boolean;
    progressColor?: string;
    showIcon?: boolean;
    position?: ToastPosition;
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
