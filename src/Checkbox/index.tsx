import { Text, type TextProps } from "../Text";
import { useCallback, type HTMLAttributes, type HTMLProps } from "react";
import styled from "styled-components";

export const Checkbox = ({
  checked,
  onChange,
  size = 24,
  label,
  labelProps
}: CheckboxProps & Omit<HTMLProps<HTMLDivElement>, "onChange">) => {
  const toggle = useCallback(() => {
    if (onChange) {
      onChange(!checked);
    }
  }, [onChange, checked]);

  return (
    <CheckboxContainer size={size} onClick={toggle}>
      <CheckboxWrapper>
        <CheckboxInput
          checked={checked}
          aria-checked={checked}
          role="checkbox"
        />
        <Label size={size} />
      </CheckboxWrapper>
      {label && (
        // @ts-ignore
        <CheckboxLabel {...labelProps} size={size}>
          {label}
        </CheckboxLabel>
      )}
    </CheckboxContainer>
  );
};

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  size?: number;
  label?: string;
  labelProps?: TextProps & Omit<HTMLAttributes<HTMLElement>, keyof TextProps>;
}

const CheckboxContainer = styled.div<{ size?: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => Math.max(8, props.size ? props.size * 0.4 : 8)}px;
  margin-left: 0.12rem;
  cursor: pointer;
`;

const CheckboxWrapper = styled.div<{ size?: number }>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  visibility: hidden;

  &:checked + label {
    background-color: ${(props) => props.theme.theme};
    border-color: ${(props) => props.theme.theme};
  }

  &:checked + label:after {
    opacity: 1;
  }

  &:focus + label {
    box-shadow: 0 0 0 2px ${(props) => props.theme.theme}33;
  }
`;

const Label = styled.label<{ size: number }>`
  box-sizing: border-box;
  background-color: transparent;
  border: 2.25px solid ${(props) => props.theme.theme};
  border-radius: 50%;
  cursor: pointer;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  position: absolute;
  margin: auto;

  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.theme};
    background-color: ${(props) => props.theme.theme}11;
  }

  &:after {
    border: 2.25px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: ${(props) => props.size / 4}px;
    left: ${(props) => props.size / 8}px;
    opacity: 0;
    position: absolute;
    top: ${(props) => props.size / 6}px;
    transform: rotate(-45deg);
    width: ${(props) => props.size / 2}px;
    transition: opacity 0.2s ease;
  }
`;

const CheckboxLabel = styled(Text).attrs({
  weight: "medium",
  noMargin: true
})<{ size?: number }>`
  font-size: ${(props) => Math.max(14, props.size ? props.size * 0.6 : 14)}px;
  display: flex;
  align-items: center;
  height: ${(props) => Math.max(props.size || 24, 24)}px;
`;

export default Checkbox;
