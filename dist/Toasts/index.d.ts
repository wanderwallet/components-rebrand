import { Dispatch, SetStateAction } from "react";
import { ToastDataWithID } from "../Toast/utils";
interface ToastsProps {
    setToasts: Dispatch<SetStateAction<ToastDataWithID[]>>;
}
export declare const Toasts: ({ setToasts }: ToastsProps) => JSX.Element;
export {};
