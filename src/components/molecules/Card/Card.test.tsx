import React from "react";
import Card, { CardProps } from "./Card";
import { render, screen } from "@testing-library/react";

const headerText = "Student Projects";
const bodyText = "No lesson projects";

const props: CardProps = {
  theme: Card.Theme.dark,
  header: <h4>{headerText}</h4>,
  body: <span>{bodyText}</span>,
  borderRadiusSize: Card.BorderRadiusSize.large,
};

describe("Card", () => {
  it("Should render an article", () => {
    render(<Card {...props} />);
    expect(screen.getByRole("article")).toBeVisible();
  });

  it("Should render the card header", () => {
    render(<Card {...props} />);
    expect(screen.getByRole("heading", { name: headerText })).toBeVisible();
    expect(screen.getByRole("separator")).toBeVisible();
  });

  it("Should render the card body", () => {
    render(<Card {...props} />);
    expect(screen.getByText(bodyText)).toBeVisible();
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
