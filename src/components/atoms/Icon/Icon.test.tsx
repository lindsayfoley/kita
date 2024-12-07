import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Icon from "./Icon";

const iconName = "magnifyingGlass";

describe("Icon", () => {
  it("Should render an SVG with default setttings when using a valid icon name", () => {
    render(<Icon name={iconName} />);
    expect(screen.getByTestId(iconName)).toBeVisible();
    expect(screen.getByTestId(iconName)).toHaveAttribute("width", "18");
    expect(screen.getByTestId(iconName)).toHaveAttribute("height", "18");
    expect(screen.getByTestId(iconName)).toHaveAttribute(
      "fill",
      "currentColor"
    );
  });

  it("Should use the size passed in via props", () => {
    const sizeValue = "50";
    render(<Icon name={iconName} size={sizeValue} />);
    expect(screen.getByTestId(iconName)).toHaveAttribute("width", sizeValue);
    expect(screen.getByTestId(iconName)).toHaveAttribute("height", sizeValue);
  });

  it("Should use the colour passed in via props", () => {
    const chosenColour = "pink";
    render(<Icon name={iconName} colour={chosenColour} />);
    expect(screen.getByTestId(iconName)).toHaveAttribute("fill", chosenColour);
  });

  it("Should fire an onClick when passed in via props", () => {
    const handleClick = jest.fn();
    render(<Icon name={iconName} onClick={handleClick} />);
    fireEvent.click(screen.getByTestId(iconName));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
