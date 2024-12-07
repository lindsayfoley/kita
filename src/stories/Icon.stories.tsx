import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@kita/components/atoms/Icon";
import icons from "@kita/assets";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      options: Object.keys(icons),
    },
    size: {
      control: "text",
    },
    colour: {
      control: "text",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "magnifyingGlass",
  },
};
