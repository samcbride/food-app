import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    handleSubmit: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search handleSubmit={validProps.handleSubmit} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("check button exists with correct text", () => {
    const { getByRole } = render(
      <Search handleSubmit={validProps.handleSubmit} />
    );
    const button = getByRole("button", { name: /Search/i });
    expect(button).toBeInTheDocument();
  });
});
