import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./index";
import { ComponentProps } from "react";

export default {
  title: "Input",
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input type="text" {...args} />;
};

const defaultArgs: ComponentProps<typeof Input> = {
  size: "normal" as never,
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
Small.args = { ...defaultArgs, size: "small" as never };
