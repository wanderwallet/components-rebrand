import { PropsWithChildren, ReactNode, useId } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Position, getPlace } from "./position";
import styled from "styled-components";

export function Tooltip({
  children,
  content,
  underline = false,
  position = "top",
  ...props
}: PropsWithChildren<TooltipProps>) {
  const tooltipId = useId();
  const place = getPlace(position);

  return (
    <>
      <TooltipWrapper
        data-tooltip-id={tooltipId}
        data-tooltip-place={place}
        data-tooltip-position-strategy="fixed"
        underline={underline}
      >
        {children}
      </TooltipWrapper>
      <StyledReactTooltip
        id={tooltipId}
        place={place}
        opacity={1}
        positionStrategy="fixed"
        {...props}
      >
        {content}
      </StyledReactTooltip>
    </>
  );
}

export interface TooltipProps {
  content: ReactNode;
  position?: Position;
  underline?: boolean;
}

const TooltipWrapper = styled.div<{ underline?: boolean }>`
  position: relative;
  display: inline-flex;
  ${(props) =>
    props.underline
      ? "border-bottom: 1px dotted rgb(" + props.theme.cardBorder + ");"
      : ""}
  ${(props) => (props.underline ? "cursor: pointer;" : "")}
`;

const StyledReactTooltip = styled(ReactTooltip)`
  background-color: ${(props) => props.theme.backgroundSecondary} !important;
  color: #ffffff !important;
  padding: 10px 15px !important;
  border-radius: 10px !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 19px !important;
  min-width: 109px !important;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.14) !important;
  z-index: 99999 !important;
  --rt-opacity: 1 !important;
  opacity: 1 !important;

  --rt-transition-show-delay: 0.23s;
  --rt-transition-closing-delay: 0.23s;
`;
