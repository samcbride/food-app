import axios from 'axios';

function getRecipe() {
    axios
        .get('https://api.edamam.com/search?q=&ingr=10&time=30&app_id=95c4ca1b&app_key=8dc3f327e4b629fa54df8c1d47c5d0cf')
        .then(res => console.log(res))
        .catch(err => console.error(err));
};


export default getRecipe;

