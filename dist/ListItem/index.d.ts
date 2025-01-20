import type { DragControls } from "framer-motion";
import { CSSProperties, HTMLProps, ReactNode } from "react";
export declare function ListItem({ children, small, active, title, titleStyle, description, descriptionStyle, descriptionExtra, descriptionExtraStyle, img, dragControls, showArrow, squircleSize, hideSquircle, ...props }: Props & HTMLProps<HTMLDivElement>): JSX.Element;
export declare const ListItemIcon: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ListItemImg: import("styled-components").StyledComponent<"img", import("styled-components").DefaultTheme, {
    alt: "icon";
    draggable: false;
}, "draggable" | "alt">;
interface Props {
    small?: boolean;
    active?: boolean;
    title: string | ReactNode;
    titleStyle?: CSSProperties;
    description?: string | ReactNode;
    descriptionStyle?: CSSProperties;
    descriptionExtra?: string | ReactNode;
    descriptionExtraStyle?: CSSProperties;
    img?: string;
    dragControls?: DragControls;
    showArrow?: boolean;
    squircleSize?: number;
    hideSquircle?: boolean;
}
export {};
