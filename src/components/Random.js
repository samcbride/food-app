import axios from "axios";
import "../styles/Random.css";



function GetRandomRecipe() {


  /*--------------------------Randomize List-------------------------------------*/

  const randomList = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z",];
  const randomResult = randomList[Math.floor(Math.random() * randomList.length)];

  /*--------------------------Axios Call Randomized-------------------------------------*/
  const apiURL = "https://api.edamam.com/search?q=";
  const apiKey = "&app_key=8dc3f327e4b629fa54df8c1d47c5d0cf";
  const apiId = "&app_id=95c4ca1b";
  const minHits = 1;
  const maxHits = 25;
  const maxHitsUrl = `&from=${minHits}&to=${maxHits}`;

  const url = `${apiURL}${randomResult}${maxHitsUrl}${apiId}${apiKey}`;
  return axios
    .get(url)
    .then((response) => {
      const recipes = response.data.hits;
      return [recipes[Math.floor(Math.random() * (maxHits - 1) + minHits)]];
    });
};

export default GetRandomRecipe;