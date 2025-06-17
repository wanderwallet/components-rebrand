import {
  CheckCircleIcon,
  InformationIcon,
  TargetIcon
} from "@iconicicons/react";
import {
  PropsWithChildren,
  useEffect,
  useState,
  useCallback,
  useRef
} from "react";
import { motion } from "framer-motion";
import styled, { DefaultTheme, ThemeProps } from "styled-components";
import { XClose } from "@untitled-ui/icons-react";

const getIconComponent = (type: ToastType) => {
  switch (type) {
    case "info":
      return InformationIcon;
    case "error":
      return TargetIcon;
    default:
      return CheckCircleIcon;
  }
};

export function Toast({
  children,
  duration,
  action,
  type = "info",
  close,
  addedAt,
  icon,
  showProgress = false,
  progressColor,
  showIcon = true,
  showCloseButton = true
}: PropsWithChildren<ToastProps>) {
  const [progress, setProgress] = useState<number>(100);
  const progressRef = useRef<number>(100);
  const lastUpdateRef = useRef<number>(Date.now());

  const handleActionClick = useCallback(async () => {
    if (action) {
      await action.task();
      close();
    }
  }, [action, close]);

  useEffect(() => {
    if (!showProgress) return;

    const startTime = addedAt;
    const endTime = startTime + duration;
    let animationFrameId: number;
    lastUpdateRef.current = Date.now();

    const updateProgress = () => {
      const now = Date.now();
      const remainingTime = Math.max(0, endTime - now);

      if (now - lastUpdateRef.current >= 16) {
        const newProgress = (remainingTime / duration) * 100;
        if (Math.abs(newProgress - progressRef.current) >= 1) {
          setProgress(newProgress);
          progressRef.current = newProgress;
        }
        lastUpdateRef.current = now;
      }

      if (remainingTime > 0) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [addedAt, duration, showProgress]);

  return (
    <ToastWrapper>
      <ChildrenWithIcon>
        {showIcon &&
          (icon ? icon : <Icon as={getIconComponent(type)} type={type} />)}
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ChildrenWithIcon>
      <Actions>
        {action && (
          <ActionButton onClick={handleActionClick}>{action.name}</ActionButton>
        )}
        {showCloseButton && (
          <CloseButton onClick={close}>
            <XIcon />
          </CloseButton>
        )}
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
  icon?: React.ReactNode;
  showCloseButton?: boolean;
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
