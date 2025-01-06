import { PropsWithChildren } from "react";
export declare function Toast({ children, duration, action, type, close, addedAt }: PropsWithChildren<ToastProps>): JSX.Element;
export interface ToastProps {
    duration: number;
    action?: ToastAction;
    addedAt: number;
    type?: ToastType;
    close: (...args: any[]) => any;
}
export type ToastType = "error" | "success" | "info";
export interface ToastAction {
    name: string;
    task: (...args: any[]) => any;
}
