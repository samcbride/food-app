import React, { useState, } from "react";
import "../styles/App.css";
import Search from "./Search";
import Random from "./Random";
import SearchResults from "./SearchResults";
import FilterMenu from "./FilterMenu";
import fetchRecipes from "../requests/axiosrecipe";
import headerimage from "../images/headerimage.jpg";
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
       <Random 
       classname="button" />
       </div>
  );
}

export default App;

