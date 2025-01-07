import {
  AlertCircle,
  ChevronDown,
  SearchSm,
  XCircle
} from "@untitled-ui/icons-react";
import { HTMLProps, ReactNode, useMemo, useState } from "react";
import styled from "styled-components";
import { InputStatus } from "../hooks";

const heights = {
  small: "42px",
  normal: "52px"
} as const;

export function Input({
  label,
  fullWidth,
  size = "normal" as never,
  status = "default",
  disabled,
  variant = "default",
  iconLeft,
  iconRight,
  errorMessage,
  special,
  ...props
}: Omit<SharedPropsV2, "hasLeftIcon"> &
  InputV2Props &
  HTMLProps<HTMLInputElement>) {
  const [isFocused, setIsFocused] = useState(false);
  const [blurTimeout, setBlurTimeout] = useState<NodeJS.Timeout | null>(null);
  const inputV2Props = useMemo<any>(
    () => ({
      fullWidth,
      size,
      variant,
      status,
      disabled,
      iconLeft,
      iconRight,
      special,
      ...props
    }),
    [
      fullWidth,
      size,
      variant,
      status,
      disabled,
      iconLeft,
      iconRight,
      special,
      props
    ]
  );

  const handleBlur = () => {
    const timeout = setTimeout(() => {
      setIsFocused(false);
    }, 200);
    setBlurTimeout(timeout);
  };

  const clearInput = (e: React.MouseEvent) => {
    e.preventDefault();
    if (blurTimeout) clearTimeout(blurTimeout);
    setIsFocused(true);
    props?.onChange?.({
      target: { value: "" }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const rightInputIcon = () => {
    if (iconRight) return iconRight;
    if (variant === "dropdown") return <ChevronDown height={20} width={20} />;
    if (props.value && (isFocused || blurTimeout))
      return <XCircle onClick={clearInput} height={20} width={20} />;
    if (status === "error") {
      return <AlertCircle height={20} width={20} color={"#D22B1F"} />;
    }

    return null;
  };

  const leftInputIcon = () => {
    if (iconLeft) return iconLeft;
    if (variant === "search") return <SearchIcon disabled={disabled} />;
    return null;
  };

  const LeftIconComponent = leftInputIcon();
  const RightIconComponent = rightInputIcon();

  return (
    <>
      {label && <LabelV2>{label}</LabelV2>}
      <InputContainer fullWidth={fullWidth} size={size}>
        <InputV2Wrapper
          fullWidth={fullWidth}
          size={size}
          status={status ?? "default"}
          disabled={disabled}
          variant={variant}
          special={special}
        >
          {LeftIconComponent && (
            <IconWrapperV2 position="left">{LeftIconComponent}</IconWrapperV2>
          )}
          <InputV2Element
            {...inputV2Props}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
          />
          {RightIconComponent && (
            <IconWrapperV2 position="right">{RightIconComponent}</IconWrapperV2>
          )}
        </InputV2Wrapper>
      </InputContainer>
      {status === "error" && <ErrorMsg>{errorMessage}</ErrorMsg>}
    </>
  );
}

type InputSize = "small" | "normal";
type InputVariant = "default" | "search" | "dropdown";

export interface SharedPropsV2 {
  fullWidth?: boolean;
  size?: InputSize;
  variant?: InputVariant;
  special?: boolean;
  status?: InputStatus;
  disabled?: boolean;
  hasRightIcon?: boolean;
}

export interface InputV2Props {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label?: ReactNode;
  errorMessage?: string;
}

export const InputContainer = styled.div<SharedPropsV2>`
  height: ${(props) => heights[props.size ?? "normal"]};
  width: ${(props) => (props.fullWidth ? "100%" : "345px")};
  box-sizing: border-box;
`;

export const InputV2Wrapper = styled.div<SharedPropsV2>`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: ${(props) => (props.size === "small" ? "12px" : "12px 14px")};
  background: ${(props) =>
    props.theme.input.background[props.variant ?? "default"].default};
  border-radius: 10px;
  box-sizing: border-box;
  border: 1.5px solid transparent;

  overflow: hidden;
  color: rgb(${(props) => props.theme.cardBorder});
  transition: border-color 0.13s ease-in-out, background 0.13s ease-in-out;

  ${(props) =>
    props.variant === "dropdown"
      ? `
      border: 1.5px solid  ${
        props.theme.input.border[props.variant || "default"].default
      };
      background: ${
        props.theme.input.background[props.variant || "default"].default
      };
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    `
      : props.variant === "search" && props.special
      ? `border: 1.5px solid ${
          props.theme.input.border[props.variant || "default"].special
        }; background:  ${
          props.theme.input.background[props.variant || "default"].special
        };`
      : ``}

  ${(props) =>
    props.status === "error" && `border: 1.5px solid ${props.theme.fail}`};

  &:hover {
    ${(props) =>
      "border: 1.5px solid " +
      (props.status === "error" ? props.theme.fail : "")};
  }

  &:focus-within,
  &:active {
    border: 1.5px solid
      ${(props) =>
        props.status === "error"
          ? props.theme.fail
          : props.theme.input.border[props.variant ?? "default"].focused};
  }

  ${(props) =>
    props.disabled &&
    `
    background: ${
      props.theme.input.background[props.variant ?? "default"].disabled
    };
    border: 1.5px solid ${
      props.theme.input.border[props.variant ?? "default"].disabled
    };
    color: #838383;
  `}
`;

export const LabelV2 = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #666;
  margin: 0;
  margin-bottom: 8px;
`;

export const ErrorMsg = styled.p`
  color: ${(props) => props.theme.fail};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding-top: 8px;
`;

export const InputV2Element = styled.input<SharedPropsV2>`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.primaryTextv2};

  font-size: ${(props) => (props.size === "small" ? "16px" : "18px")};
  font-weight: 500;
  width: 100%;
  transition: all 0.23s ease-in-out;

  ::-webkit-input-placeholder {
    color: ${(props) =>
      props.theme.input.placeholder[props.variant || "default"]};
  }

  :-ms-input-placeholder {
    color: ${(props) =>
      props.theme.input.placeholder[props.variant || "default"]};
  }

  ::placeholder {
    color: ${(props) =>
      props.theme.input.placeholder[props.variant || "default"]};
  }
`;

export const IconWrapperV2 = styled.div<{ position: "left" | "right" }>`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  color: #666;
  cursor: pointer;
`;

const SearchIcon = styled(SearchSm)<{ disabled?: boolean }>`
  color: ${(props) =>
    props.theme.input.icons[
      props.disabled ? "searchInactive" : "searchActive"
    ]};
`;
