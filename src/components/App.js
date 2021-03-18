import { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const getResults = async (searchInput) => {
    const recipes = await searchInput;
    setSearchResults(recipes);
  };
  return (
    <div className="App">
      What's in your cupboard?
      <Search handleSubmit={getResults} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
