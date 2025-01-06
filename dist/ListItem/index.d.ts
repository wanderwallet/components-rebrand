import type { DragControls } from "framer-motion";
import { UsersPlusIcon } from "@iconicicons/react";
import { HTMLProps, ReactNode } from "react";
export declare function ListItem({ children, small, active, title, description, img, dragControls, ...props }: Props & HTMLProps<HTMLDivElement>): JSX.Element;
export declare const ListItemIcon: import("styled-components").StyledComponent<typeof UsersPlusIcon, import("styled-components").DefaultTheme, {}, never>;
export declare const ListItemImg: import("styled-components").StyledComponent<"img", import("styled-components").DefaultTheme, {
    alt: "icon";
    draggable: false;
}, "draggable" | "alt">;
interface Props {
    small?: boolean;
    active?: boolean;
    title: string | ReactNode;
    description: string | ReactNode;
    img?: string;
    dragControls?: DragControls;
}
export {};
