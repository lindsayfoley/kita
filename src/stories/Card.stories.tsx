import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@kita/components/molecules/Card";
import { Icon } from "@kita/components/atoms/Icon";
import { IconListGroup } from "@kita/components/molecules/IconListGroup";

const meta = {
  title: "Molecules/Card",
  component: Card,
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

const list = [
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
];

export const Default: Story = {
  args: {
    theme: Card.Theme.dark,
    header: (
      <>
        <h4>Lesson 3: Morse Code</h4> <Icon name="plus" />
      </>
    ),
    body: <IconListGroup list={list} />,
    borderRadiusSize: Card.BorderRadiusSize.large,
  },
};

export const StudentProjects: Story = {
  args: {
    theme: Card.Theme.highlight,
    header: (
      <>
        <h4>Student Projects</h4> <Icon name="magnifyingGlass" />
      </>
    ),
    body: <span>No lesson projects</span>,
    borderRadiusSize: Card.BorderRadiusSize.large,
  },
};
