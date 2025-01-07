import { HTMLAttributes } from "react";
import styled from "styled-components";

const fontWeights = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
} as const;

const sizes = {
  // Display text (Hero, Banner)
  "7xl": "3.5rem", // 56px
  "6xl": "3rem", // 48px
  "5xl": "2.75rem", // 44px
  "4xl": "2.5rem", // 40px

  // Headings
  "3xl": "2rem", // 32px
  "2xl": "1.75rem", // 28px
  xl: "1.5rem", // 24px

  // Body text
  lg: "1.25rem", // 20px
  base: "1.125rem", // 18px
  md: "1rem", // 16px
  sm: "0.875rem", // 14px
  xs: "0.75rem", // 12px

  // Micro text (Labels, badges, tags)
  "2xs": "0.625rem", // 10px
  "3xs": "0.5rem", // 8px
  "4xs": "0.375rem", // 6px
  "5xs": "0.25rem", // 4px
  "6xs": "0.125rem", // 2px
  "7xs": "0.0625rem" // 1px
} as const;

export function Text({
  children,
  lineHeight,
  noMargin = false,
  as = "p",
  size = "md",
  weight = "regular",
  variant = "primary",
  ...props
}: TextProps & Omit<HTMLAttributes<HTMLElement>, keyof TextProps>) {
  return (
    <TextElement
      as={as}
      $size={size}
      $weight={weight}
      $variant={variant}
      $lineHeight={lineHeight}
      $noMargin={noMargin}
      {...props}
    >
      {children}
    </TextElement>
  );
}

const TextElement = styled.p<{
  $size: keyof typeof sizes;
  $weight: keyof typeof fontWeights;
  $variant: "primary" | "secondary";
  $lineHeight?: number;
  $noMargin?: boolean;
}>`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${(props) => sizes[props.$size]};
  font-weight: ${(props) => fontWeights[props.$weight]};
  ${(props) => props.$lineHeight && `line-height: ${props.$lineHeight};`}
  color: ${(props) =>
    props.$variant === "primary"
      ? props.theme.primaryText
      : props.theme.secondaryText};
  ${(props) => props.$noMargin && "margin: 0;"}
`;

export interface TextProps {
  as?: "p" | "span" | "div";
  size?: keyof typeof sizes;
  weight?: keyof typeof fontWeights;
  variant?: "primary" | "secondary";
  lineHeight?: number;
  noMargin?: boolean;
}
