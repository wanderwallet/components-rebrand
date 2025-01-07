import type { DisplayTheme } from "./Provider";
import "styled-components";

/// <reference types="vite/client" />

declare module "styled-components" {
  export interface DefaultTheme {
    displayTheme: DisplayTheme;
    theme: string;
    primaryText: string;
    secondaryText: string;
    background: string;
    cardBorder: string;
    cardBackground: string;
    backgroundv2: string;
    primary: string;
    primaryBtnHover: string;
    secondaryBtnHover: string;
    secondaryItemHover: string;
    buttonDisabled: string;
    primaryTextv2: string;
    secondaryTextv2: string;
    buttonDisabledText: string;
    inputField: string;
    success: string;
    fail: string;
    backgroundSecondary: string;
    delete: string;
    secondaryDelete: string;
    button: {
      background: {
        primary: {
          default: string;
          hover: string;
          active: string;
          disabled: string;
        };
        secondary: {
          default: string;
          hover: string;
          active: string;
          disabled: string;
        };
        secondaryAlt: {
          default: string;
          hover: string;
          active: string;
          disabled: string;
        };
      };
      text: {
        primary: string;
        secondary: string;
        secondaryAlt: string;
        disabled: string;
      };
      hoverBorder: {
        primary: string;
        secondary: string;
        secondaryAlt: string;
      };
    };
    input: {
      background: {
        search: { default: string; disabled: string; special: string };
        default: { default: string; disabled: string };
        dropdown: { default: string; disabled: string };
      };
      border: {
        default: { disabled: string; focused: string };
        search: { disabled: string; focused: string; special: string };
        dropdown: { default: string; disabled: string; focused: string };
      };
      placeholder: {
        default: string;
        search: string;
        dropdown: string;
      };
      icons: {
        searchActive: string;
        searchInactive: string;
      };
    };
  }
}
