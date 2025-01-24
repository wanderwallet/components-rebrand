export type Position = "top" | "topStart" | "topEnd" | "left" | "bottom" | "bottomStart" | "bottomEnd" | "right";
export interface TooltipPosition {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    transform?: string;
}
export declare function getPosition(position: Position): TooltipPosition;
export declare function getArrowPosition(position: Position): string;
