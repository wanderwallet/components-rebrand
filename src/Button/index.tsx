import styled from "styled-components";
import { Loading } from "../Loading";
import React from "react";

export const Button = styled.button.attrs<ButtonProps>((props) => ({
  children: props.loading ? (
    <Loading style={{ margin: ".18rem 0" }} />
  ) : props.icon ? (
    <>
      {(!props.iconPosition || props.iconPosition === "left") && props.icon}
      {props.children}
      {props.iconPosition === "right" && props.icon}
    </>
  ) : (
    props.children
  )
}))<ButtonProps>`
  display: flex;
  outline: none;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  width: ${(props) => (props.fullWidth ? "100%" : props.width || "250px")};
  ${(props) => !props.width && `min-width: 100px`};
  height: ${(props) => props.height || "46px"};
  border-radius: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.icon ? "4px" : "0")};
  background: ${(props) =>
    props.theme.button.background[props.variant || "primary"].default};
  color: ${(props) => props.theme.button.text[props.variant || "primary"]};

  &:hover {
    background: ${(props) =>
      props.theme.button.background[props.variant || "primary"].hover};
    border: ${(props) =>
      props.theme.button.hoverBorder[props.variant || "primary"]};
  }

  &:active {
    background: ${(props) =>
      props.theme.button.background[props.variant || "primary"].active};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(props) =>
      props.theme.button.background[props.variant || "primary"].disabled};
    color: ${(props) => props.theme.button.text.disabled};
  }
`;

type Variant = "primary" | "secondary" | "secondaryAlt";
type IconPosition = "left" | "right";

export interface ButtonProps {
  variant?: Variant;
  fullWidth?: boolean;
  height?: React.CSSProperties["height"];
  width?: React.CSSProperties["width"];
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  disabled?: boolean;
  loading?: boolean;
}
