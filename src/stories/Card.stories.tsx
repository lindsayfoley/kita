import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@kita/components/molecules/Card";
import { Icon } from "@kita/components/atoms/Icon";
import { IconListGroup } from "@kita/components/molecules/IconListGroup";
import {
  defaultStoryList,
  subMenuList,
} from "@kita/components/molecules/Card/mockdata";

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

export const Default: Story = {
  args: {
    theme: Card.Theme.dark,
    header: (
      <>
        <h4>Lesson 3: Morse Code</h4> <Icon name="plus" />
      </>
    ),
    body: <IconListGroup list={defaultStoryList} />,
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

export const SubMenu: Story = {
  args: {
    theme: Card.Theme.dark,
    body: <IconListGroup list={subMenuList} />,
    borderRadiusSize: Card.BorderRadiusSize.small,
  },
};
