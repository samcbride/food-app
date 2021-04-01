import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    handleSubmit: () => {},
    setSearchResults: [],
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search
        handleSubmit={validProps.handleSubmit}
        setSearchResults={validProps.setSearchResults}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("check button exists with correct text", () => {
    const { getByRole } = render(
      <Search
        handleSubmit={validProps.handleSubmit}
        setSearchResults={validProps.setSearchResults}
      />
    );
    const button = getByRole("button", { name: /Search/i });
    expect(button).toBeInTheDocument();
  });
});
