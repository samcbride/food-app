import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    handleSubmit: () => {},
    handleInputChange: () => {},
    errorMessage: "",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search
        handleSubmit={validProps.handleSubmit}
        handleInputChange={validProps.handleInputChange}
        errorMessage={validProps.errorMessage}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("check button exists with correct text", () => {
    const { getByRole } = render(
      <Search
        handleSubmit={validProps.handleSubmit}
        handleInputChange={validProps.handleInputChange}
        errorMessage={validProps.errorMessage}
      />
    );
    const button = getByRole("button", { name: /Search/i });
    expect(button).toBeInTheDocument();
  });
});
