import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./index";
import { ComponentProps } from "react";
import { useInput } from "../hooks";

export default {
  title: "Input",
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const textInput = useInput("");
  return <Input type="text" {...args} {...textInput.bindings} />;
};

const defaultArgs: ComponentProps<typeof Input> = {
  sizeVariant: "normal",
  variant: "default",
  fullWidth: false,
  status: "default",
  disabled: false,
  errorMessage: "Error: payment method not accepted",
  placeholder: "Select an option",
  label: "Label"
};

export const Normal = Template.bind({});
Normal.args = { ...defaultArgs };

export const Small = Template.bind({});
Small.args = { ...defaultArgs, sizeVariant: "small" };
