import { createContext, useContext } from "react";
import { ToastAction, ToastType } from "./index";

export type ToastPosition = "top" | "bottom";

export interface ToastData {
  duration: number;
  content:
    | React.ReactNode
    | ((props: { close: () => void }) => React.ReactNode);
  type?: ToastType;
  action?: ToastAction;
  showProgress?: boolean;
  progressColor?: string;
  showIcon?: boolean;
  position?: ToastPosition;
  showCloseButton?: boolean;
  icon?: React.ReactNode;
}

export interface ToastDataWithID extends ToastData {
  id: string;
  addedAt: number;
}

export const ToastsContext = createContext<{
  toasts: ToastDataWithID[];
  setToast: (toast: ToastData) => void;
}>({
  toasts: [],
  setToast() {}
});

export const useToasts = () => useContext(ToastsContext);
