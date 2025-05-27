import { PropsWithChildren } from "react";
export declare function Toast({ children, duration, action, type, close, addedAt, icon, showProgress, progressColor, showIcon, showCloseButton }: PropsWithChildren<ToastProps>): JSX.Element;
export interface ToastProps {
    duration: number;
    action?: ToastAction;
    addedAt: number;
    type?: ToastType;
    showProgress?: boolean;
    progressColor?: string;
    showIcon?: boolean;
    icon?: React.ReactNode;
    showCloseButton?: boolean;
    close: (...args: any[]) => any;
}
export type ToastType = "error" | "success" | "info";
export interface ToastAction {
    name: string;
    task: (...args: any[]) => any;
}
