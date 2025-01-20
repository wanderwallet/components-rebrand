import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Reorder, useDragControls } from "framer-motion";
import { ListItem, ListItemIcon } from "./index";
import { ComponentProps, useState } from "react";
import { UsersPlusIcon } from "@iconicicons/react";

export default {
  title: "ListItem",
  component: ListItem
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args}>
    {!args.img && !args.children && (
      <ListItemIcon>
        <UsersPlusIcon />
      </ListItemIcon>
    )}
    {args.children}
  </ListItem>
);
const defaultArgs: ComponentProps<typeof ListItem> = {
  small: false,
  active: false,
  showArrow: false,
  title: "Contacts",
  description: "Add/edit contacts"
};

const TemplateDraggable: ComponentStory<typeof ListItem> = (args) => {
  const dragControls = useDragControls();
  const [tokens, setTokens] = useState(["Component 1", "Component 2"]);

  return (
    <Reorder.Group
      as="div"
      axis="y"
      onReorder={setTokens}
      values={["Component 1", "Component 2"]}
      style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
    >
      {tokens.map((token) => (
        <Reorder.Item
          key={token} // Ensure each Reorder.Item has a unique key
          as="div"
          value={token}
          dragListener={true}
          dragControls={dragControls}
        >
          <ListItem {...args} dragControls={dragControls}>
            {!args.img && <ListItemIcon />}
          </ListItem>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export const Basic = Template.bind({});
Basic.args = defaultArgs;

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  small: true,
  active: false,
  showArrow: false,
  title: "USD",
  description: "United States Dollar"
};

export const Draggable = TemplateDraggable.bind({});
Draggable.args = {
  title: "Tokens",
  description: "x1aoxArDf02xbgrua20492bdfg4",
  showArrow: false
};

export const Children = Template.bind({});
Children.args = {
  ...defaultArgs,
  hideSquircle: true,
  descriptionExtra: "1",
  showArrow: true,
  children: (
    <img
      style={{ borderRadius: 12, position: "absolute", top: 0, left: 0 }}
      src="https://picsum.photos/200/300"
      height={50}
      width={50}
      alt="Alternate"
    />
  )
};
