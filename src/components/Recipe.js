import React from "react";
import PropTypes from "prop-types";

const Recipe = (props) => {
 const { title, image, url } = props;
 console.log(title, image, url)

 return (
   <div className="recipe" >
     <div className="recipe__title" >{title}</div>
     <div className="recipe__image" >{image}</div>
     <div className="recipe__url" >{url}</div>
   </div>
 );
};

export default Recipe;

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}