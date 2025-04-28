import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonProps } from "./index";
import { Fingerprint04 } from "@untitled-ui/icons-react";

export default {
  title: "Button",
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Test</Button>
);
const defaultArgs: ButtonProps = {
  variant: "primary",
  fullWidth: false,
  icon: <Fingerprint04 />,
  iconPosition: "left",
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
SecondaryAlt.args = {
  ...defaultArgs,
  variant: "secondaryAlt"
};
