import {
  CheckCircleIcon,
  InformationIcon,
  TargetIcon
} from "@iconicicons/react";
import { PropsWithChildren, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled, { DefaultTheme, ThemeProps } from "styled-components";
import { XClose } from "@untitled-ui/icons-react";

export function Toast({
  children,
  duration,
  action,
  type = "info",
  close,
  addedAt,
  showProgress = false,
  progressColor,
  showIcon = true
}: PropsWithChildren<ToastProps>) {
  const [progress, setProgress] = useState<number>(100);

  // update progress based on the total duration
  useEffect(() => {
    if (!showProgress) return;

    const startTime = addedAt;
    const endTime = startTime + duration;

    const updateProgress = () => {
      const now = new Date().getTime();
      const remainingTime = Math.max(0, endTime - now);
      const newProgress = (remainingTime / duration) * 100;

      setProgress(newProgress);

      if (remainingTime <= 0) {
        return;
      }

      requestAnimationFrame(updateProgress);
    };

    updateProgress();
    const animationFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrame);
  }, [addedAt, duration, showProgress]);

  return (
    <ToastWrapper>
      <ChildrenWithIcon>
        {showIcon && (
          <Icon
            as={
              type === "info"
                ? InformationIcon
                : type === "error"
                ? TargetIcon
                : CheckCircleIcon
            }
            type={type}
          />
        )}
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ChildrenWithIcon>
      <Actions>
        {action && (
          <ActionButton
            onClick={async () => {
              await action.task();
              close();
            }}
          >
            {action.name}
          </ActionButton>
        )}
        <CloseButton onClick={close}>
          <XIcon />
        </CloseButton>
      </Actions>
      {showProgress && progress > 0 && (
        <Progress type={type} progress={progress} color={progressColor} />
      )}
    </ToastWrapper>
  );
}

export interface ToastProps {
  duration: number;
  action?: ToastAction;
  addedAt: number;
  type?: ToastType;
  showProgress?: boolean;
  progressColor?: string;
  showIcon?: boolean;
  close: (...args: any[]) => any;
}

export type ToastType = "error" | "success" | "info";

export interface ToastAction {
  name: string;
  task: (...args: any[]) => any;
}

const progressHeight = ".25rem";

const ToastWrapper = styled(motion.div).attrs({
  initial: {
    opacity: 0,
    translateY: "-100%",
    scale: 0.85,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  },
  animate: {
    opacity: 1,
    translateY: 0,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  }
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  background-color: ${(props) =>
    props.theme.displayTheme === "light"
      ? "black"
      : props.theme.cardBackground};
  border-radius: 8px;
  //padding: .5rem 1.1rem calc(.5rem + ${progressHeight});
  padding: 0.5rem 0.75rem;
  width: calc(100% - 2.2rem);
  overflow: hidden;
  border: ${(props) =>
    props.theme.displayTheme === "light"
      ? "none"
      : "2px solid rgb(" + props.theme.cardBorder + ")"};
  transition: all 0.23s ease-in-out;
`;

const resultColors = {
  success: (props: ThemeProps<DefaultTheme>) => props.theme.success,
  error: (props: ThemeProps<DefaultTheme>) => props.theme.fail,
  info: (props: ThemeProps<DefaultTheme>) => props.theme.theme
};

const Progress = styled.div<{
  type: ToastType;
  progress: number;
  color?: string;
}>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: ${progressHeight};
  width: ${(props) => props.progress || "100"}%;
  background: ${(props) => props.color || resultColors[props.type](props)};
  will-change: width;
`;

const child_padding = ".35rem";

const ChildrenWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`;

const Icon = styled(InformationIcon)<{ type: ToastType }>`
  font-size: 1.25rem;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  color: ${(props) => resultColors[props.type](props)};
`;

const ChildrenWrapper = styled.div`
  padding: ${child_padding} 0;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const action_button_font_size = "1rem";

const ActionButton = styled.button`
  font-size: ${action_button_font_size};
  font-weight: 500;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  padding: ${child_padding} 0.9rem;
  background-color: transparent;
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
  }
`;

const CloseButton = styled(ActionButton)`
  position: relative;
  border-radius: 100%;
  padding: 0;
  width: calc(${child_padding} * 2 + ${action_button_font_size});
  height: calc(${child_padding} * 2 + ${action_button_font_size});
`;

const XIcon = styled(XClose)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2em;
  width: 1em;
  height: 1em;
  color: #fff;
  transform: translate(-50%, -50%);
`;
