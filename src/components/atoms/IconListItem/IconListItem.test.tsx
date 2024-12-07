import React from "react";
import { render, screen } from "@testing-library/react";
import IconListItem, { IconListItemProps } from "./IconListItem";
import { Icon } from "../Icon";

const iconName = "magnifyingGlass";

const props: IconListItemProps = {
  primaryIcon: <Icon dataTestId="magnifyingGlass" name={iconName} />,
  text: "main.py",
};

describe("IconListItem", () => {
  it("Should render a list item with an icon", () => {
    render(<IconListItem {...props} />);
    expect(screen.getByText(props.text)).toBeVisible();
    expect(screen.getByTestId(iconName)).toBeVisible();
  });

  it("Should render with a secondary icon when passed in via props", () => {
    const secondaryIconDataTestId = "secondary-icon";
    const secondaryIcon = (
      <Icon name={iconName} dataTestId={secondaryIconDataTestId} />
    );
    render(<IconListItem {...props} secondaryIcon={secondaryIcon} />);
    expect(screen.getByTestId(secondaryIconDataTestId)).toBeVisible();
  });
});
