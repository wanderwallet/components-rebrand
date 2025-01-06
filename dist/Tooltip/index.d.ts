import { Position } from "../Tooltip/position";
import { PropsWithChildren, ReactNode } from "react";
export declare function Tooltip({ children, content, underline, position, ...props }: PropsWithChildren<TooltipProps>): JSX.Element;
export interface TooltipProps {
    content: ReactNode;
    position?: Position;
    underline?: boolean;
}
