import React from "react";
import { render } from "@testing-library/react";
import Recipe from "../components/Recipe";

describe("Recipe", () => {
  const validProps = {
    title: "stub title",
    image: "https://stubiamge.com",
  };

  it("renders properly", () => {
    const { asFragment } = render(
      <Recipe 
        title={validProps.title}
        image={validProps.image}
        url={validProps.url}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(
      <Recipe 
        title={validProps.title}
        image={validProps.image}
        url={validProps.url}
      />
    );
    expect(getByText("stub title")).toHaveClass("recipe__title");
  });
});