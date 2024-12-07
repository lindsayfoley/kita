import React from "react";
import { render, screen } from "@testing-library/react";
import IconListGroup, { IconListGroupProps } from "./IconListGroup";
import { Icon } from "@kita/components/atoms/Icon";

const props: IconListGroupProps = {
  list: [
    {
      primaryIcon: <Icon name="documentText" dataTestId="documentText" />,
      text: "readme",
      secondaryIcon: <Icon name="ellipsis" dataTestId="ellipsis" />,
    },
    {
      primaryIcon: <Icon name="pythonColoured" dataTestId="pythonColoured" />,
      text: "main.py",
    },
  ],
};

describe("IconListGroup", () => {
  it("Should render a list of IconListItem components", () => {
    render(<IconListGroup {...props} />);
    expect(screen.getByTestId("documentText")).toBeVisible();
    expect(screen.getByText(props.list[0].text)).toBeVisible();
    expect(screen.getByTestId("ellipsis")).toBeVisible();
    expect(screen.getByTestId("pythonColoured")).toBeVisible();
    expect(screen.getByText(props.list[1].text)).toBeVisible();
  });
});
