/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import PropTypes from "prop-types";
import fetchRecipes from "../requests/axiosrecipe";

const Search = ({ handleSubmit }) => {
  
  const [inputValue, setInputValue] = useState();

  const handleSearch = async (event) => {
    event.preventDefault();
    handleSubmit(await fetchRecipes(inputValue));
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
          //value={initialState.ingredient}
          onChange={handleInputChange}
        />
        {/* <option value="tomato">Tomato</option>
          <option value="pasta">Pasta</option>
          <option value="basil">Basil</option>
        </select> */}
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default Search;

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

// npm i --save react-select
// import Select from "react-select";
{
  /* //   const initialState = [
  //     { label: "tomato", value: "tomato" },
  //     { label: "pasta", value: "pasta" },
  //     { label: "basil", value: "basil" },
  //     { label: "parmesan", value: "parmesan" },
  //   ]; */
}
{
  /* <select
          type="text"
          name="search"
          placeholder="Ingredients"
          options={initialState}
          onChange={handleInputChange}
        ></select> */
}
