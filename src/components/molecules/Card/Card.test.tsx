import React from "react";
import Card, { CardProps } from "./Card";
import { render, screen } from "@testing-library/react";

const headerText = "Student Projects";
const bodyText = "No lesson projects";

const props: CardProps = {
  theme: Card.Theme.highlight,
  header: <h4>{headerText}</h4>,
  body: <span>{bodyText}</span>,
  borderRadiusSize: Card.BorderRadiusSize.small,
};

describe("Card", () => {
  it("Should render an article", () => {
    render(<Card {...props} />);
    expect(screen.getByRole("article")).toBeVisible();
  });

  it("Should render the card header", () => {
    render(<Card {...props} />);
    expect(screen.getByRole("heading", { name: headerText })).toBeVisible();
  });

  it("Should render the card body", () => {
    render(<Card {...props} />);
    expect(screen.getByText(bodyText)).toBeVisible();
  });

  it("Should add a classname when passed in via props", () => {
    render(<Card {...props} classname="test" />);
    expect(screen.getByRole("article")).toHaveClass("test");
  });

  it.each(Object.values(Card.Theme))(
    "Should return expected theme class for %s",
    (theme) => {
      render(<Card {...props} theme={theme} />);
      expect(screen.getByRole("article")).toHaveClass(`theme-${theme}`);
    }
  );

  it.each(Object.values(Card.BorderRadiusSize))(
    "Should return expected BorderRadiusSize class for %s",
    (borderRadiusSize) => {
      render(<Card {...props} borderRadiusSize={borderRadiusSize} />);
      expect(screen.getByRole("article")).toHaveClass(
        `border-radius-${borderRadiusSize}`
      );
    }
  );
});
