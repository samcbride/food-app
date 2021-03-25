import axios from "axios";
const apiURL = "https://api.edamam.com/search?q=";
const apiKey = "&app_key=8dc3f327e4b629fa54df8c1d47c5d0cf";
const apiId = "&app_id=95c4ca1b";
const maxHits = "&from=0&to=20";
const maxIngreds = `&ingr=10`;

const fetchRecipes = (ingredients) => {
  const url = `${apiURL}${ingredients}${maxIngreds}${maxHits}${apiId}${apiKey}`;
  if (ingredients) {
    return axios
      .get(url)
      .then((response) => {
        const recipes = response.data.hits;
        return recipes;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
export default fetchRecipes;
