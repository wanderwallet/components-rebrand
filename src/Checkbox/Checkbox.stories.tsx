import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox } from "./index";
import { useState } from "react";

export default {
  title: "Checkbox",
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox {...args} label="Test" checked={checked} onChange={setChecked} />
  );
};

export const Basic = Template.bind({});
