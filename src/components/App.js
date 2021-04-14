import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import FilterMenu from "./FilterMenu";
import fetchRecipes from "../requests/axiosrecipe";
import "../styles/Edamam.css";
import "../styles/App.css";
import "../styles/Random.css";
import GetRandomRecipe from "./Random";
import headerimage from "../images/headerimage.jpg";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const getResults = async (searchInput) => {
    const recipes = await fetchRecipes(searchInput, value);
    setSearchResults(recipes);
  };

  const getRandomResult = async () => {
    const randomRecipe = await GetRandomRecipe(value);
    console.log(randomRecipe);
    setSearchResults(randomRecipe);
    setErrorMessage("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (inputValue) {
      getResults(inputValue);
      setErrorMessage("");
    } else {
      setErrorMessage("* Please enter your ingredients");
      setInputValue("");
      setSearchResults([]);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <img src={headerimage} alt="header-food-display"></img>
        <h1 className="title">What's in your cupboard?</h1>
      </div>
      <div className="wrapper">
        <Search
          className="search"
          handleSubmit={handleSearch}
          handleInputChange={handleInputChange}
          errorMessage={errorMessage}
        />
        <div className="wrapper-r">
          <button className="button" onClick={getRandomResult}>
            Random Recipe!
          </button>
        </div>
      </div>
      <FilterMenu value={value} setValue={setValue} />
      <SearchResults className="searchResults" searchResults={searchResults} />
      <div className="edamam-container">
        <div id="edamam-badge" data-color="transparent"></div>
      </div>
    </div>
  );
}

export default App;
