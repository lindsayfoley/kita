import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@kita/components/atoms/Icon";
import { IconListGroup } from "@kita/components/molecules/IconListGroup";

const meta = {
  title: "Molecules/IconListGroup",
  component: IconListGroup,
  decorators: [
    (Story) => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IconListGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: [
      {
        primaryIcon: <Icon name="documentText" />,
        text: "readme",
        secondaryIcon: <Icon name="ellipsis" />,
      },
      {
        primaryIcon: <Icon name="pythonColoured" />,
        text: "main.py",
        secondaryIcon: <Icon name="ellipsis" />,
      },
    ],
  },
};
