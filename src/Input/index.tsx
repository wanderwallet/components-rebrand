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
} as Record<InputSize, string>;

const fontSizes = {
  small: "16px",
  normal: "18px",
  large: "40px"
} as Record<InputSize, string>;

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
  inputFooter,
  onBlur,
  stacked,
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const timeout = setTimeout(() => {
      setIsFocused(false);
      clearTimeout(timeout);
    }, 200);
    setBlurTimeout(timeout);
    onBlur?.(e);
  };

  const clearInput = (e: React.MouseEvent) => {
    e.preventDefault();
    if (blurTimeout) clearTimeout(blurTimeout);
    setIsFocused(true);
    props?.onChange?.({
      target: {
        value: "",
        name: props?.name
      }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const rightInputIcon = () => {
    if (iconRight) return iconRight;
    if (type === "password")
      return (
        <Icon
          as={showPassword ? EyeOff : Eye}
          onClick={() => setShowPassword(!showPassword)}
        />
      );
    if (variant === "dropdown")
      return <Icon as={ChevronDown} disabled={disabled} />;
    if (props.value && isFocused)
      return <ClearIcon onClick={clearInput} height={20} width={20} />;
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
        stacked={stacked}
      >
        {LeftIconComponent && (
          <IconWrapper position="left">{LeftIconComponent}</IconWrapper>
        )}
        <BottomRow stacked={stacked}>
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
        </BottomRow>
        {inputFooter}
      </InputWrapper>
      {status === "error" && errorMessage && (
        <ErrorMsg>{errorMessage}</ErrorMsg>
      )}
    </>
  );
}

type InputSize = "small" | "normal" | "large";
type InputVariant = "default" | "search" | "dropdown";

export interface SharedProps {
  fullWidth?: boolean;
  sizeVariant?: InputSize;
  variant?: InputVariant;
  special?: boolean;
  status?: InputStatus;
  disabled?: boolean;
  hasRightIcon?: boolean;
  stacked?: boolean;
  inputContainerStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  inputFooter?: ReactNode;
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
  flex-direction: ${(props) => (props.stacked ? "column" : "row")};
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

  font-size: ${(props) => fontSizes[props.sizeVariant ?? "normal"]};
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
  display: flex;
`;

const SearchIcon = styled(SearchSm)<{ disabled?: boolean }>`
  color: ${(props) =>
    props.theme.input.icons[
      props.disabled ? "searchInactive" : "searchActive"
    ]};
`;

export const Icon = styled(XCircle)<{ disabled?: boolean }>`
  height: 20px;
  width: 20px;
  cursor: pointer;
  color: ${({ theme, disabled }) =>
    disabled ? theme.tertiaryText : theme.secondaryText};
`;

interface ClearIconProps {
  onClick?: (event: React.MouseEvent<SVGElement>) => void;
  width?: number;
  height?: number;
  color?: string;
}

const ClearIcon = ({
  onClick,
  width = 20,
  height = 20,
  color = "#838383"
}: ClearIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    onClick={onClick}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.00008 0.666656C3.94999 0.666656 0.666748 3.9499 0.666748 7.99999C0.666748 12.0501 3.94999 15.3333 8.00008 15.3333C12.0502 15.3333 15.3334 12.0501 15.3334 7.99999C15.3334 3.9499 12.0502 0.666656 8.00008 0.666656ZM10.4715 5.52859C10.7318 5.78893 10.7318 6.21105 10.4715 6.47139L8.94289 7.99999L10.4715 9.52859C10.7318 9.78893 10.7318 10.211 10.4715 10.4714C10.2111 10.7317 9.78903 10.7317 9.52868 10.4714L8.00008 8.9428L6.47149 10.4714C6.21114 10.7317 5.78903 10.7317 5.52868 10.4714C5.26833 10.211 5.26833 9.78893 5.52868 9.52859L7.05727 7.99999L5.52868 6.47139C5.26833 6.21105 5.26833 5.78893 5.52868 5.52859C5.78903 5.26824 6.21114 5.26824 6.47149 5.52859L8.00008 7.05718L9.52868 5.52859C9.78903 5.26824 10.2111 5.26824 10.4715 5.52859Z"
      fill={color}
    />
  </svg>
);

const BottomRow = styled.div<{ stacked?: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100%;
  flex: ${(props) => (props.stacked ? "0" : "1")};
`;
