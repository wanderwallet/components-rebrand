import { PropsWithChildren, ReactNode } from "react";
import { Position } from "./positionV2";
export declare function TooltipV2({ children, content, underline, position, ...props }: PropsWithChildren<TooltipV2Props>): JSX.Element;
export interface TooltipV2Props {
    content: ReactNode;
    position?: Position;
    underline?: boolean;
}
