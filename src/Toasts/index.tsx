import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useCallback } from "react";
import { ToastData, ToastDataWithID, useToasts } from "../Toast/utils";
import styled from "styled-components";
import { Toast } from "../Toast";

interface ToastsProps {
  setToasts: Dispatch<SetStateAction<ToastDataWithID[]>>;
}

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

  return (
    <ToastsWrapper>
      <AnimatePresence>
        {toasts.map((toast) => (
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
  );
};

const ToastsWrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  bottom: 1rem;
  right: 1rem;
  max-width: calc(100% - 2rem);
  width: 420px;
  z-index: 10000;
`;
