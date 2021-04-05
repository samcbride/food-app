import axios from "axios";
const apiURL = "https://api.edamam.com/search?q=";
const apiKey = "&app_key=8dc3f327e4b629fa54df8c1d47c5d0cf";
const apiId = "&app_id=95c4ca1b";
const maxHits = "&from=0&to=20";
const maxIngreds = `&ingr=10`;

const fetchRecipes = (ingredients, value) => {
  let healthLabels = "";
  if (value) {
    value.forEach((label) => {
      healthLabels += "&health=" + label;
    });
  }

  const url = healthLabels
    ? `${apiURL}${ingredients}${maxIngreds}${maxHits}${apiId}${apiKey}${healthLabels}`
    : `${apiURL}${ingredients}${maxIngreds}${maxHits}${apiId}${apiKey}`;

  if (ingredients) {
    return axios
      .get(url)
      .then((response) => {
        const recipes = response.data.hits;
        console.log(recipes);
        return recipes;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export default fetchRecipes;
