import { render } from "@testing-library/react";
import FilterMenu from "../components/FilterMenu";

describe("FilterMenu", () => {
  const validProps = {
    value: "vegan",
    setValue: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <FilterMenu value={validProps.value} setValue={validProps.setValue} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("check dropdown exists with correct placeholder text", () => {
    const { getByTestId } = render(
      <FilterMenu value={validProps.value} setValue={validProps.setValue} />
    );
    expect(getByTestId("filter")).toHaveClass("filterMenu");
  });
});
