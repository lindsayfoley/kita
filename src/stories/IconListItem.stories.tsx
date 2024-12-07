import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@kita/components/atoms/Icon";
import { IconListItem } from "@kita/components/atoms/IconListItem";

const meta = {
  title: "Atoms/IconListItem",
  component: IconListItem,
  argTypes: {
    text: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IconListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primaryIcon: <Icon name="documentText" />,
    text: "readme",
    secondaryIcon: <Icon name="ellipsis" />,
  },
};
