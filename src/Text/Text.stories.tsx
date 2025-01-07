import { ComponentMeta } from "@storybook/react";

import { Text } from "./index";

export default {
  title: "Text",
  component: Text
} as ComponentMeta<typeof Text>;

export const DisplaySizes = () => (
  <>
    <Text size="7xl" weight="bold">
      Display 7xl - 56px
    </Text>
    <Text size="6xl" weight="bold">
      Display 6xl - 48px
    </Text>
    <Text size="5xl" weight="bold">
      Display 5xl - 44px
    </Text>
    <Text size="4xl" weight="bold">
      Display 4xl - 40px
    </Text>
  </>
);

export const HeadingSizes = () => (
  <>
    <Text size="3xl" weight="semibold">
      Heading 3xl - 32px
    </Text>
    <Text size="2xl" weight="semibold">
      Heading 2xl - 28px
    </Text>
    <Text size="xl" weight="semibold">
      Heading xl - 24px
    </Text>
  </>
);

export const BodySizes = () => (
  <>
    <Text size="lg">Body Large - 20px</Text>
    <Text size="base">Body Base - 18px</Text>
    <Text size="md">Body Medium - 16px</Text>
    <Text size="sm">Body Small - 14px</Text>
    <Text size="xs">Body XSmall - 12px</Text>
  </>
);

export const MicroSizes = () => (
  <>
    <Text size="2xs">Micro 2xs - 10px</Text>
    <Text size="3xs">Micro 3xs - 8px</Text>
    <Text size="4xs">Micro 4xs - 6px</Text>
  </>
);

export const FontWeights = () => (
  <>
    <Text weight="extraLight">Extra Light - 200</Text>
    <Text weight="light">Light - 300</Text>
    <Text weight="regular">Regular - 400</Text>
    <Text weight="medium">Medium - 500</Text>
    <Text weight="semibold">Semibold - 600</Text>
    <Text weight="bold">Bold - 700</Text>
    <Text weight="extrabold">Extra Bold - 800</Text>
  </>
);

export const Variants = () => (
  <>
    <Text variant="primary">Primary Text</Text>
    <Text variant="secondary">Secondary Text</Text>
  </>
);

export const LineHeights = () => (
  <>
    <Text lineHeight={1}>Line Height 1</Text>
    <Text lineHeight={1.5}>Line Height 1.5</Text>
    <Text lineHeight={2}>Line Height 2</Text>
  </>
);
