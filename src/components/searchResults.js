import React from "react";
import PropTypes from "prop-types";

const SearchResults = (searchResults) => {
  return searchResults ? (
    searchResults.map((result) => {
      return (
        <>
          <div className="recipe-card">
            <div className="recipe" src={result} />
          </div>
        </>
      );
    })
  ) : (
    <p>No results found.</p>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array,
};

export default SearchResults;
