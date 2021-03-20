/* Using the method we used (filter by image)

import axios from 'axios';

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
       .get("https://api.edamam.com/search?q=&ingr=10&time=30&app_id=95c4ca1b&app_key=8dc3f327e4b629fa54df8c1d47c5d0cf")
      .then((response) => {
        const imageResults = response.data.collection.items;
        console.log(imageResults);
        const parsedImages = imageResults.filter(
          (e) => e.data[0].media_type === "image"
        );
        const images = parsedImages.map((image) => image.links[0].href);
        return images;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;

*/// 

import axios from "axios";

const apiURL = "https://api.edamam.com/search?q=";
const apiKey = "&app_key=8dc3f327e4b629fa54df8c1d47c5d0cf";
const apiId = "&app_id=95c4ca1b";
const maxTime = "&time=30";
const maxIngreds = `&ingr=10`;

const fetchRecipes = async (...ingredients) => {
  const mappedIngreds = ingredients
    .map((ingredient, idx) => {
      if (idx < ingredients.length - 1) {
        return ingredient + "+";
      } else {
        return ingredient;
      }
    })
    .join("");

  const url = `${apiURL}${mappedIngreds}${maxIngreds}${maxTime}${apiId}${apiKey}`;
  const res = await axios.get(url);
  const recipes = res.data;
  console.log(recipes);

  // create addToList? (recipes)
};

fetchRecipes("zucchini", "broccoli", "carrots");