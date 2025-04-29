import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useCallback, useMemo } from "react";
import {
  ToastData,
  ToastDataWithID,
  ToastPosition,
  useToasts
} from "../Toast/utils";
import styled from "styled-components";
import { Toast } from "../Toast";

interface ToastsProps {
  setToasts: Dispatch<SetStateAction<ToastDataWithID[]>>;
}

const POSITION_STYLES: Record<ToastPosition, string> = {
  top: `
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
  `,
  bottom: `
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  `
};

export const Toasts = ({ setToasts }: ToastsProps) => {
  const { toasts } = useToasts();

  const closeToast = useCallback(
    (id: string) => {
      setToasts((val) => val.filter((t) => t.id !== id));
    },
    [setToasts]
  );

  const renderContent = useCallback(
    (content: ToastData["content"], id: string) => {
      if (typeof content === "function") {
        return content({ close: () => closeToast(id) });
      }
      return content;
    },
    [closeToast]
  );

  const toastsByPosition = useMemo(() => {
    return toasts.reduce((acc, toast) => {
      const position = (toast.position || "bottom") as ToastPosition;
      if (!acc[position]) {
        acc[position] = [];
      }
      acc[position].push(toast);
      return acc;
    }, {} as Record<ToastPosition, ToastDataWithID[]>);
  }, [toasts]);

  return (
    <>
      {Object.entries(toastsByPosition).map(([position, positionToasts]) => (
        <ToastsWrapper key={position} position={position as ToastPosition}>
          <AnimatePresence>
            {positionToasts.map((toast) => (
              <Toast
                action={toast.action}
                duration={toast.duration}
                type={toast.type}
                close={() => closeToast(toast.id)}
                addedAt={toast.addedAt}
                showProgress={toast.showProgress}
                progressColor={toast.progressColor}
                showIcon={toast.showIcon}
                key={toast.id}
              >
                {renderContent(toast.content, toast.id)}
              </Toast>
            ))}
          </AnimatePresence>
        </ToastsWrapper>
      ))}
    </>
  );
};

const ToastsWrapper = styled.div<{ position: ToastPosition }>`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  ${(props) => POSITION_STYLES[props.position]}
  max-width: calc(100% - 2rem);
  width: 420px;
  z-index: 10000;
`;
