import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = {
    searchResults: [],
  };
  

  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults 
      searchResults={validProps.searchResults}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct number of SearchResults instances", () => {
    const { getAllByTestId } = render(
      <SearchResults 
      searchResults={validProps.searchResults}
      />
    );
    expect(getAllByTestId("search-results")).toHaveLength(1);
  })
});