import React, { useState, } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import FilterMenu from "./FilterMenu";
import fetchRecipes from "../requests/axiosrecipe";

import "../styles/App.css";
import "../styles/Random.css";
import GetRandomRecipe from "./Random";
import headerimage from "../images/headerimage.jpg";



function App() {
  const [searchResults, setSearchResults] = useState([]);

  const [value, setValue] = useState();


  const getResults = async (searchInput) => {
    const recipes = await fetchRecipes(searchInput, value);
    setSearchResults(recipes);
  };

  const getRandomResult = async ()=>{
    const randomRecipe = await GetRandomRecipe();
    setSearchResults(randomRecipe)
  }


   return (
    <div className="App">
      <div className="header">
        <img src={headerimage} alt="header-food-display"></img>
        <h1 className="title">What's in your cupboard?</h1>
      </div>
      <div className="wrapper">
        <Search className="search" 
         handleSubmit={getResults} 
         setSearchResults={setSearchResults} 
        />
      <FilterMenu value={value} setValue={setValue} />
        <Random />
      </div>

      <SearchResults className="searchResults" searchResults={searchResults} />
       <button
      className="button"
      onClick={getRandomResult}>
      Random Recipe
      </button>
       </div>

  );
}

export default App;

