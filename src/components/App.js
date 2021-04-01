import React, { useState, } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import fetchRecipes from "../requests/axiosrecipe";
import "../styles/App.css";
import "../styles/Random.css";
import GetRandomRecipe from "./Random";


function App() {
  const [searchResults, setSearchResults] = useState([]);
 

  const getResults = async (searchInput) => {
    const recipes = await fetchRecipes(searchInput);
    setSearchResults(recipes);
  };

  const getRandomResult = async ()=>{
    const randomRecipe = await GetRandomRecipe();
    setSearchResults(randomRecipe)
  }


   return (
    <div className="App">
      <p className="title">What's in your cupboard?</p>

      <Search
        className="search"
        handleSubmit={getResults}
        setSearchResults={setSearchResults}
      />
      <SearchResults
       className="searchResults"
        searchResults={searchResults} />

      <button
      className="button"
      onClick={getRandomResult}>
      Random Recipe
      </button> 
    
      
       
      </div> 
      
  );
}

export default App;

