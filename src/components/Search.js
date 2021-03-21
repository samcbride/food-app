import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Search.css";

const Search = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState();

  const handleSearch = (event) => {
    event.preventDefault();
    handleSubmit(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSearch}>
      <label>
        Enter your ingredients:
        <input
          placeholder="Search"
          type="text"
          id="ingredient"
          name="ingredient"
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default Search;

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
