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
  description,
  descriptionStyle,
  descriptionExtra,
  descriptionExtraStyle,
  img,
  dragControls,
  showArrow = false,
  squircleSize = small ? 32 : 48,
  hideSquircle = false,
  ...props
}: Props & HTMLProps<HTMLDivElement>) {
  return (
    <Wrapper small={small} active={active} {...(props as any)}>
      <ContentWrapper>
        <IconWrapper
          small={small}
          img={img}
          squircleSize={squircleSize}
          hideSquircle={hideSquircle}
        >
          {children}
        </IconWrapper>
        <div>
          <ItemName small={small} style={titleStyle}>
            {title}
          </ItemName>
          {description && (
            <ItemDescription small={small} style={descriptionStyle}>
              {description}
            </ItemDescription>
          )}
        </div>
      </ContentWrapper>
      <RightWrapper>
        {descriptionExtra && (
          <ItemDescriptionExtra small={small} style={descriptionExtraStyle}>
            {descriptionExtra}
          </ItemDescriptionExtra>
        )}
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

const ItemDescription = styled(Text).attrs({
  noMargin: true,
  variant: "secondary",
  weight: "medium"
})<{ small: boolean }>`
  font-size: ${(props) => (props.small ? "12px" : "14px")};
`;

const ItemDescriptionExtra = styled(Text).attrs({
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
  description?: string | ReactNode;
  descriptionStyle?: CSSProperties;
  descriptionExtra?: string | ReactNode;
  descriptionExtraStyle?: CSSProperties;
  img?: string;
  dragControls?: DragControls;
  showArrow?: boolean;
  squircleSize?: number;
  hideSquircle?: boolean;
}
