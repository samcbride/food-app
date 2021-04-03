import React from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";
import "../styles/SearchResults.css";

const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results" data-testid="search-results">
      {searchResults &&
        searchResults.map((recipe) => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
          />
        ))}
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default SearchResults;
