import { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import fetchRecipes from "../requests/axiosrecipe";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const getResults = async (searchInput) => {
    const recipes = await fetchRecipes(searchInput);
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
      <SearchResults className="searchResults" searchResults={searchResults} />
    </div>
  );
}

export default App;
