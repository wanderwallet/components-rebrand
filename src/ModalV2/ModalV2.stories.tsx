import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spacer } from "../Spacer";
import { Button } from "../Button";
import { useModal } from "../hooks";

import { ModalV2 } from ".";

export default {
  title: "ModalV2",
  component: ModalV2
} as ComponentMeta<typeof ModalV2>;

export const Basic: ComponentStory<typeof ModalV2> = (args) => (
  <ModalV2 {...args} open={true} setOpen={() => {}}>
    <p>Pop up notification text goes here</p>
    <Spacer y={200} />
  </ModalV2>
);

export const Demo = () => {
  const modal = useModal();

  return (
    <>
      <Button onClick={() => modal.setOpen(true)}>Show modal</Button>
      <ModalV2
        {...modal.bindings}
        actions={
          <>
            <Button variant="secondary" onClick={() => modal.setOpen(false)}>
              No
            </Button>
            <Button onClick={() => modal.setOpen(false)}>Yes</Button>
          </>
        }
      >
        <p>Pop up notification text goes here</p>
      </ModalV2>
    </>
  );
};
