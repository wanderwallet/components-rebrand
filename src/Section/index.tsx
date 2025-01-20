import styled from "styled-components";

export const Section = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ showPaddingHorizontal = true, showPaddingVertical = true }) => {
    const h = showPaddingHorizontal ? "24px" : "0px";
    const v = showPaddingVertical ? "24px" : "0px";
    return `${v} ${h}`;
  }};
`;

export interface SectionProps {
  showPaddingVertical?: boolean;
  showPaddingHorizontal?: boolean;
}
