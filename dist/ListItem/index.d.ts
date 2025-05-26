import type { DragControls } from "framer-motion";
import { CSSProperties, HTMLProps, ReactNode } from "react";
export declare function ListItem({ children, small, active, height, padding, title, titleStyle, subtitle, subtitleStyle, subtitleExtra, subtitleExtraStyle, img, icon, leftIcon, rightIcon, dragControls, expandableContent, expandedText, collapsedText, expandable, showArrow, squircleSize, hideSquircle, ...props }: Props & HTMLProps<HTMLDivElement>): JSX.Element;
export declare const ListItemIcon: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ListItemImg: import("styled-components").StyledComponent<"img", import("styled-components").DefaultTheme, {
    alt: "icon";
    draggable: false;
}, "draggable" | "alt">;
interface Props {
    small?: boolean;
    active?: boolean;
    title: ReactNode;
    titleStyle?: CSSProperties;
    subtitle?: ReactNode;
    subtitleStyle?: CSSProperties;
    subtitleExtra?: ReactNode;
    subtitleExtraStyle?: CSSProperties;
    img?: string;
    icon?: ReactNode;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    dragControls?: DragControls;
    showArrow?: boolean;
    squircleSize?: number;
    hideSquircle?: boolean;
    height?: number | string;
    padding?: number;
    expandable?: boolean;
    expandedText?: string;
    collapsedText?: string;
    expandableContent?: ReactNode;
}
export {};
