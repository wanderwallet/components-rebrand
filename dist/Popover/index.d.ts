import { PropsWithChildren, ReactNode } from "react";
import { Position, TooltipPosition } from "../Tooltip/position";
export declare function Popover({ children, content, position, customPos, mode, ...props }: PropsWithChildren<PopoverProps>): JSX.Element;
export interface PopoverProps {
    content: ReactNode;
    position?: Position;
    mode?: "click" | "hover";
    customPos?: TooltipPosition;
}
