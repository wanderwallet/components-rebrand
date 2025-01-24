import {
  AlertCircle,
  ChevronDown,
  Eye,
  EyeOff,
  SearchSm,
  XCircle
} from "@untitled-ui/icons-react";
import { CSSProperties, HTMLProps, ReactNode, useMemo, useState } from "react";
import styled from "styled-components";
import { InputStatus } from "../hooks";

const heights = {
  small: "42px",
  normal: "52px"
} as const;

export function Input({
  label,
  fullWidth,
  sizeVariant = "normal",
  status = "default",
  disabled,
  variant = "default",
  iconLeft,
  iconRight,
  errorMessage,
  special,
  inputContainerStyle,
  labelStyle,
  type = "text",
  ...props
}: SharedProps & InputProps & HTMLProps<HTMLInputElement>) {
  const [isFocused, setIsFocused] = useState(false);
  const [blurTimeout, setBlurTimeout] = useState<NodeJS.Timeout | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const inputType = useMemo(() => {
    if (type === "password") return showPassword ? "text" : "password";
    return type;
  }, [variant, showPassword, type]);

  const inputProps = useMemo<any>(
    () => ({
      fullWidth,
      sizeVariant,
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
      sizeVariant,
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
      clearTimeout(timeout);
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
    if (variant === "dropdown")
      return <Icon as={ChevronDown} disabled={disabled} />;
    if (type === "password")
      return (
        <Icon
          as={showPassword ? EyeOff : Eye}
          onClick={() => setShowPassword(!showPassword)}
        />
      );
    if (props.value && isFocused)
      return <Icon as={XCircle} onClick={clearInput} disabled={disabled} />;
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
      {label && <Label style={labelStyle}>{label}</Label>}
      <InputWrapper
        fullWidth={fullWidth}
        sizeVariant={sizeVariant}
        status={status ?? "default"}
        disabled={disabled}
        variant={variant}
        special={special}
        style={inputContainerStyle}
      >
        {LeftIconComponent && (
          <IconWrapper position="left">{LeftIconComponent}</IconWrapper>
        )}
        <InputElement
          {...inputProps}
          type={inputType}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
        />
        {RightIconComponent && (
          <IconWrapper position="right">{RightIconComponent}</IconWrapper>
        )}
      </InputWrapper>
      {status === "error" && <ErrorMsg>{errorMessage}</ErrorMsg>}
    </>
  );
}

type InputSize = "small" | "normal";
type InputVariant = "default" | "search" | "dropdown";

export interface SharedProps {
  fullWidth?: boolean;
  sizeVariant?: InputSize;
  variant?: InputVariant;
  special?: boolean;
  status?: InputStatus;
  disabled?: boolean;
  hasRightIcon?: boolean;
  inputContainerStyle?: CSSProperties;
  labelStyle?: CSSProperties;
}

export interface InputProps {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label?: ReactNode;
  errorMessage?: string;
}

export const InputWrapper = styled.div<SharedProps>`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
  height: ${(props) => heights[props.sizeVariant ?? "normal"]};
  width: ${(props) => (props.fullWidth ? "100%" : "345px")};
  padding: ${(props) => (props.sizeVariant === "small" ? "12px" : "12px 14px")};
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

export const Label = styled.p`
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

export const InputElement = styled.input<SharedProps>`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.primaryText};

  font-size: ${(props) => (props.sizeVariant === "small" ? "16px" : "18px")};
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

export const IconWrapper = styled.div<{ position: "left" | "right" }>`
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

const Icon = styled(XCircle)<{ disabled?: boolean }>`
  height: 20px;
  width: 20px;
  cursor: pointer;
  color: ${({ theme, disabled }) =>
    disabled ? theme.tertiaryText : theme.secondaryText};
`;
