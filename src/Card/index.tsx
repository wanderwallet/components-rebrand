import styled from "styled-components";

export const Card = styled.div<CardProps>`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgb(${(props) => props.theme.cardBorder});
  background-color: ${(props) => props.theme.cardBackground};
`;

export interface CardProps {
  smallPadding?: boolean;
}
