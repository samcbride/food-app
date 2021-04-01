import { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import Random from "./Random";
import SearchResults from "./SearchResults";
import fetchRecipes from "../requests/axiosrecipe";
import headerimage from "../images/headerimage.jpg";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const getResults = async (searchInput) => {
    const recipes = await fetchRecipes(searchInput);
    setSearchResults(recipes);
  };

  return (
    <div className="App">
      <div className="header">
        <img src={headerimage} alt="header-food-display"></img>
        <h1 className="title">What's in your cupboard?</h1>
      </div>
      <div className="wrapper">
        <Search className="search" handleSubmit={getResults} />
        <Random />
      </div>
      <SearchResults className="searchResults" searchResults={searchResults} />
    </div>
  );
}

export default App;
