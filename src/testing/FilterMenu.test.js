import { render } from "@testing-library/react";
import Select from "react-select";

describe("FilterMenu", () => {
  const validProps = {
    value: "vegan",
    setValue: [],
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Select value={validProps.value} setValue={validProps.setValue} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // it("check dropdown exists with correct placeholder text", () => {
  //   const { getByRole } = render(
  //     <Select value={validProps.value} setValue={validProps.setValue} />
  //   );
  //   const dropdown = getByRole("textbox", { name: /Select/i });
  //   expect(dropdown).toBeInTheDocument();
  // });
});
