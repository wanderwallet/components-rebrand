import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonProps } from "./index";
import { ArrowUpRightIcon } from "@iconicicons/react";

export default {
  title: "Button",
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    Test
    {args.icon && (
      <ArrowUpRightIcon style={{ width: "22px", height: "22px" }} />
    )}
  </Button>
);
const defaultArgs: ButtonProps = {
  variant: "primary",
  fullWidth: false,
  icon: false,
  disabled: false
};

export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variant: "secondary"
};

export const SecondaryAlt = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variant: "secondaryAlt"
};
