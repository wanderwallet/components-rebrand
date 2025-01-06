import { type HTMLProps } from "react";
export default function Squircle({ children, img, outline, ...props }: HTMLProps<HTMLDivElement> & Props): JSX.Element;
interface Props {
    img?: string;
    outline?: string;
}
export {};
