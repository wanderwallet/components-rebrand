import { PropsWithChildren, ReactNode } from "react";
import { Position, PopoverPosition } from "./position";
export declare function Popover({ children, content, position, customPos, mode, ...props }: PropsWithChildren<PopoverProps>): JSX.Element;
export interface PopoverProps {
    content: ReactNode;
    position?: Position;
    mode?: "click" | "hover";
    customPos?: PopoverPosition;
}
