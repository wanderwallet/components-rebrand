import type { DragControls } from "framer-motion";
import { CSSProperties, HTMLProps, ReactNode, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReorderIcon from "../ReorderIcon";
import styled from "styled-components";
import Squircle from "../Squircle";
import { Text } from "../Text";
import { ChevronDown, ChevronRight, ChevronUp } from "@untitled-ui/icons-react";

export function ListItem({
  children,
  small = false,
  active,
  height,
  padding = 8,
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
  expandableContent,
  expandedText = "Hide",
  collapsedText = "Show",
  expandable = false,
  showArrow = false,
  squircleSize = small ? 32 : 48,
  hideSquircle = false,
  ...props
}: Omit<Props & HTMLProps<HTMLDivElement>, "title"> & { title: ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  const memoizedHeight = useMemo(() => {
    if (height) return height;
    if (!hideSquircle && squircleSize) return squircleSize + 2 * (padding ?? 8);
    if (small) return 36;
    return 48;
  }, [height, small, squircleSize, hideSquircle, padding]);

  return (
    <Wrapper
      small={small}
      active={active}
      height={memoizedHeight}
      padding={padding}
      {...(props as any)}
    >
      <NonExpandableWrapper height={memoizedHeight}>
        <ContentWrapper>
          {!hideSquircle || img ? (
            <IconWrapper small={small} img={img} squircleSize={squircleSize}>
              <ListItemIcon>{leftIcon || icon || children}</ListItemIcon>
            </IconWrapper>
          ) : (
            <div style={{ flexShrink: 0 }}>{leftIcon || icon || children}</div>
          )}
          <div style={{ width: "100%" }}>
            {typeof title === "string" ? (
              <ItemName small={small} style={titleStyle as any}>
                {title}
              </ItemName>
            ) : (
              title
            )}
            {subtitle &&
              (typeof subtitle === "string" ? (
                <ItemSubtitle small={small} style={subtitleStyle as any}>
                  {subtitle}
                </ItemSubtitle>
              ) : (
                subtitle
              ))}
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
      </NonExpandableWrapper>
      {expandable && (
        <>
          <AdvancedWrapper
            expanded={expanded}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((prev) => !prev);
            }}
          >
            <HorizontalLine active={active} />
            <div
              style={{
                display: "flex",
                gap: 4,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{ whiteSpace: "nowrap" }}
                variant="secondary"
                size="xs"
                weight="medium"
                noMargin
              >
                {expanded ? expandedText : collapsedText}
              </Text>
              <Action as={expanded ? ChevronUp : ChevronDown} />
            </div>
            <HorizontalLine active={active} />
          </AdvancedWrapper>
          <motion.div
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              opacity: { duration: 0.2, delay: expanded ? 0.1 : 0 }
            }}
            style={{ overflow: "hidden" }}
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              {expanded && (
                <motion.div
                  key="expandable-content"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut"
                  }}
                >
                  <ExpandableWrapper>{expandableContent}</ExpandableWrapper>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  active: boolean;
  small: boolean;
  height?: number | string;
  padding?: number;
}>`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  padding: ${(props) => props.padding}px;
  box-sizing: border-box;
  transition: all 0.23s ease-in-out;

  background-color: ${(props) =>
    props.active ? props.theme.listItem.active : "none"};

  &:hover {
    background-color: ${(props) => props.theme.listItem.hover};
  }
`;

const NonExpandableWrapper = styled.div<{ height?: number | string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  height: ${(props) => props.height};
  width: 100%;
`;

const ExpandableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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

const AdvancedWrapper = styled.div<{ expanded: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  padding: ${(props) => `1rem 0 ${props.expanded ? "1rem" : "0"} 0`};
  cursor: pointer;

  transition: all 0.23s ease-in-out;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: scale(0.92);
  }
`;

const Action = styled(ChevronDown)`
  cursor: pointer;
  font-size: 1.25rem;
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.tertiaryText};
`;

const HorizontalLine = styled.div<{
  active?: boolean;
  height?: number;
  marginVertical?: number;
}>`
  width: 100%;
  height: ${({ height }) => height || 1}px;
  background: ${({ theme, active }) =>
    active ? theme.borderDefault : theme.borderSecondary};
  margin: ${({ marginVertical }) => marginVertical || 0}px 0;
`;

interface Props {
  small?: boolean;
  active?: boolean;
  title: ReactNode;
  titleStyle?: CSSProperties;
  subtitle?: ReactNode;
  subtitleStyle?: CSSProperties;
  subtitleExtra?: ReactNode;
  subtitleExtraStyle?: CSSProperties;
  img?: string;
  icon?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  dragControls?: DragControls;
  showArrow?: boolean;
  squircleSize?: number;
  hideSquircle?: boolean;
  height?: number | string;
  padding?: number;
  expandable?: boolean;
  expandedText?: string;
  collapsedText?: string;
  expandableContent?: ReactNode;
}
