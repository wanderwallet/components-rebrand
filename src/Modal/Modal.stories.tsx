import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spacer } from "../Spacer";
import { Button } from "../Button";
import { useModal } from "../hooks";

import { Modal } from ".";

export default {
  title: "Modal",
  component: Modal
} as ComponentMeta<typeof Modal>;

export const Basic: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} open={true} setOpen={() => {}}>
    <p>Pop up notification text goes here</p>
    <Spacer y={200} />
  </Modal>
);

export const Demo = () => {
  const modal = useModal();

  return (
    <>
      <Button onClick={() => modal.setOpen(true)}>Show modal</Button>
      <Modal
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
      </Modal>
    </>
  );
};
