import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Reorder, useDragControls } from "framer-motion";
import { ListItem, ListItemIcon } from "./index";
import { ComponentProps, useState } from "react";
import { BoxIcon, UsersPlusIcon } from "@iconicicons/react";
import { User01 } from "@untitled-ui/icons-react";

export default {
  title: "ListItem",
  component: ListItem
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args}>
    {!args.icon && !args.children && (
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
  subtitle: "Add/edit contacts"
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
            {!args.icon && <ListItemIcon />}
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
  subtitle: "United States Dollar",
  icon: <User01 height={24} width={24} />
};

export const Draggable = TemplateDraggable.bind({});
Draggable.args = {
  title: "Tokens",
  subtitle: "x1aoxArDf02xbgrua20492bdfg4",
  showArrow: false
};

export const Children = Template.bind({});
Children.args = {
  ...defaultArgs,
  hideSquircle: true,
  subtitleExtra: "1",
  showArrow: true,
  rightIcon: <BoxIcon />,
  children: (
    <img
      style={{ borderRadius: 12 }}
      src="https://picsum.photos/200/300"
      height={50}
      width={50}
      alt="Alternate"
    />
  ),
  expandable: true,
  expandableContent: <div>Expandable content</div>
};
