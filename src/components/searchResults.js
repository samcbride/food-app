import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  return results ? (
    results.map((result) => {
      return (
        <> 
          <div className="recipe-card">
            <div 
              className="recipe"
              src={result}
            />
          </div>
        </>
      );
    })
  ) : (
    <p>No results found.</p>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
