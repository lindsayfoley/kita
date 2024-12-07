import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@kita/components/molecules/Card";

const meta = {
  title: "Atoms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    theme: {
      options: Object.keys(Card.Theme),
    },
    borderRadiusSize: {
      options: Object.keys(Card.BorderRadiusSize),
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: Card.Theme.dark,
    header: <h4>Student Projects</h4>,
    body: <span>No lesson projects</span>,
    borderRadiusSize: Card.BorderRadiusSize.large,
  },
};
