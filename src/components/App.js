import React, { useState, } from "react";
import "../styles/App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import FilterMenu from "./FilterMenu";
import fetchRecipes from "../requests/axiosrecipe";
import Random from "./Random";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [value, setValue] = useState();

  const getResults = async (searchInput) => {
    const recipes = await fetchRecipes(searchInput, value);
    setSearchResults(recipes);
  };

   return (
    <div className="App">
      <p className="title">What's in your cupboard?</p>
      <Search
        className="search"
        handleSubmit={getResults}
        setSearchResults={setSearchResults}
      />
      <FilterMenu value={value} setValue={setValue} />
      <SearchResults className="searchResults" searchResults={searchResults} />
       <Random 
       classname="button" />
       </div>
  );
}

export default App;

