export type Position = "top" | "topStart" | "topEnd" | "left" | "leftStart" | "leftEnd" | "bottom" | "bottomStart" | "bottomEnd" | "right" | "rightStart" | "rightEnd";
export interface TooltipPosition {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    transform?: string;
}
export declare function getPosition(position: Position): TooltipPosition;
export declare function getArrowPosition(position: Position): string;
