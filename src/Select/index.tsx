import { Icon, IconWrapper, InputWrapper, Label } from "../Input";
import { HTMLProps, PropsWithChildren, ReactNode, useMemo } from "react";
import styled from "styled-components";
import { InputStatus } from "../hooks";
import { ChevronDown } from "@untitled-ui/icons-react";

export function Select({
  children,
  label,
  fullWidth,
  small,
  status = "default",
  ...props
}: PropsWithChildren<SelectProps & HTMLProps<HTMLSelectElement>>) {
  const selectProps = useMemo<any>(
    () => ({ fullWidth, small, status, ...props }),
    [fullWidth, small, status, props]
  );

  return (
    <>
      {label && <Label>{label}</Label>}
      <InputWrapper
        fullWidth={fullWidth}
        sizeVariant={"small"}
        status={status ?? "default"}
      >
        <SelectElement {...selectProps}>{children}</SelectElement>
        <IconWrapper position="right">
          <Icon as={ChevronDown} />
        </IconWrapper>
      </InputWrapper>
    </>
  );
}

interface SelectProps {
  fullWidth?: boolean;
  small?: boolean;
  label?: ReactNode;
  status?: InputStatus;
}

const SelectElement = styled.select<SelectProps>`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.primaryText};

  font-size: 16px;
  font-weight: 500;
  padding: ${(props) => (props.small ? "12px" : "12px 14px")};
  line-height: 22px;
  width: 100%;
  cursor: pointer;
  transition: all 0.23s ease-in-out;
  z-index: 15;

  -webkit-appearance: none;
  -moz-appearance: none;

  &::-ms-expand {
    display: none;
  }

  option {
  }
`;
