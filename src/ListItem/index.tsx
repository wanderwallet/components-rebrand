import type { DragControls } from "framer-motion";
import { CSSProperties, HTMLProps, ReactNode } from "react";
import ReorderIcon from "../ReorderIcon";
import styled from "styled-components";
import Squircle from "../Squircle";
import { Text } from "../Text";
import { ChevronRight } from "@untitled-ui/icons-react";

export function ListItem({
  children,
  small = false,
  active,
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  subtitleExtra,
  subtitleExtraStyle,
  img,
  icon,
  leftIcon,
  rightIcon,
  dragControls,
  showArrow = false,
  squircleSize = small ? 32 : 48,
  hideSquircle = false,
  ...props
}: Props & HTMLProps<HTMLDivElement>) {
  return (
    <Wrapper small={small} active={active} {...(props as any)}>
      <ContentWrapper>
        {!hideSquircle || img ? (
          <IconWrapper small={small} img={img} squircleSize={squircleSize}>
            {!img && (
              <ListItemIcon>{leftIcon || icon || children}</ListItemIcon>
            )}
          </IconWrapper>
        ) : (
          leftIcon || icon || children
        )}
        <div>
          <ItemName small={small} style={titleStyle}>
            {title}
          </ItemName>
          {subtitle && (
            <ItemSubtitle small={small} style={subtitleStyle}>
              {subtitle}
            </ItemSubtitle>
          )}
        </div>
      </ContentWrapper>
      <RightWrapper>
        {subtitleExtra && (
          <ItemSubtitleExtra small={small} style={subtitleExtraStyle}>
            {subtitleExtra}
          </ItemSubtitleExtra>
        )}
        {rightIcon &&
          (!hideSquircle ? (
            <IconWrapper small={small} squircleSize={squircleSize}>
              <ListItemIcon>{rightIcon}</ListItemIcon>
            </IconWrapper>
          ) : (
            rightIcon
          ))}
        {!dragControls && showArrow && <ArrowIcon />}
        {dragControls && <ReorderIcon dragControls={dragControls} />}
      </RightWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ active: boolean; small: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  padding: 8px;
  height: ${(props) => (props.small ? "36px" : "48px")};
  transition: all 0.23s ease-in-out;

  background-color: ${(props) =>
    props.active ? props.theme.listItem.active : "none"};

  &:hover {
    background-color: ${(props) => props.theme.listItem.hover};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconWrapper = styled(Squircle)<{
  small: boolean;
  squircleSize: number;
}>`
  position: relative;
  flex-shrink: 0;
  width: ${(props) => props.squircleSize}px;
  height: ${(props) => props.squircleSize}px;
  color: ${(props) => props.theme.theme};
`;

const ItemName = styled(Text).attrs({
  noMargin: true,
  weight: "semibold"
})<{ small: boolean }>`
  font-size: ${(props) => (props.small ? "16px" : "18px")};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
`;

const ItemSubtitle = styled(Text).attrs({
  noMargin: true,
  variant: "secondary",
  weight: "medium"
})<{ small: boolean }>`
  font-size: ${(props) => (props.small ? "12px" : "14px")};
`;

const ItemSubtitleExtra = styled(Text).attrs({
  noMargin: true,
  variant: "secondary",
  weight: "medium"
})<{ small: boolean }>`
  font-size: ${(props) => (props.small ? "14px" : "16px")};
`;

const ArrowIcon = styled(ChevronRight)`
  color: ${(props) => props.theme.listItem.icon};
  width: 24px;
  height: 24px;
`;

export const ListItemIcon = styled.div`
  position: absolute;
  font-size: 1.5rem;
  width: 1em;
  height: 1em;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ListItemImg = styled.img.attrs({
  alt: "icon",
  draggable: false
})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5rem;
  user-select: none;
  transform: translate(-50%, -50%);
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface Props {
  small?: boolean;
  active?: boolean;
  title: string | ReactNode;
  titleStyle?: CSSProperties;
  subtitle?: string | ReactNode;
  subtitleStyle?: CSSProperties;
  subtitleExtra?: string | ReactNode;
  subtitleExtraStyle?: CSSProperties;
  img?: string;
  icon?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  dragControls?: DragControls;
  showArrow?: boolean;
  squircleSize?: number;
  hideSquircle?: boolean;
}
