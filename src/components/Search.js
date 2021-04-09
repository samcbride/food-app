import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Search.css";

const Search = ({ handleSubmit, setSearchResults }) => {
  const [inputValue, setInputValue] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (inputValue) {
      handleSubmit(inputValue);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter your ingredients");
      setInputValue("");
      setSearchResults([]);
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="search">
        <label>
          <input
            className="input"
            placeholder="Enter your ingredients"
            type="text"
            id="ingredient"
            name="ingredient"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Search</button>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </form>
  );
};
export default Search;
Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
