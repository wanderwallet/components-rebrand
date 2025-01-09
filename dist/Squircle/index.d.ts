import { type HTMLProps } from "react";
export default function Squircle({ children, img, outline, hideSquircle, ...props }: HTMLProps<HTMLDivElement> & Props): JSX.Element;
interface Props {
    img?: string;
    outline?: string;
    hideSquircle?: boolean;
}
export {};
