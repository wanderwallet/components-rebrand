import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { Button } from "../Button";

import { Toast } from "./index";
import { useToasts } from "./utils";

export default {
  title: "Toast",
  component: Toast
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => (
  <Toast {...args}>This is the toast content</Toast>
);
const defaultArgs: ComponentProps<typeof Toast> = {
  close: () => {},
  duration: 4000,
  addedAt: new Date().getTime(),
  showProgress: true
};

export const Info = Template.bind({});
Info.args = {
  ...defaultArgs,
  type: "info",
  action: {
    name: "Ok",
    task: () => alert("Action called")
  }
};

export const Error = Template.bind({});
Error.args = {
  ...defaultArgs,
  type: "error",
  action: {
    name: "Ok",
    task: () => alert("Action called")
  }
};

export const Success = Template.bind({});
Success.args = {
  ...defaultArgs,
  type: "success"
};

export const Demo = () => {
  const { setToast } = useToasts();

  return (
    <Button
      onClick={() =>
        setToast({
          type: "info",
          content: "This is a toast",
          duration: 3000,
          showProgress: true,
          progressColor: "linear-gradient(47deg, #5842f8 5.41%, #6b57f9 96%)",
          showIcon: false
        })
      }
    >
      Show toast!
    </Button>
  );
};
