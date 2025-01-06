import { PropsWithChildren } from "react";
import { DefaultTheme } from "styled-components";
export type DisplayTheme = "dark" | "light";
export type ArconnectTheme = DefaultTheme;
export declare const ARCONNECT_LIGHT_THEME: ArconnectTheme;
export declare const ARCONNECT_DARK_THEME: ArconnectTheme;
export declare function Provider<T extends ArconnectTheme = ArconnectTheme>({ children, theme }: PropsWithChildren<{
    theme: T;
}>): JSX.Element;
