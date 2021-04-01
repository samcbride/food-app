import React from "react";
import PropTypes from "prop-types";
import "../styles/Recipe.css";
import defaultImage from "../images/carrot.jpg";

const Recipe = (props) => {
  const { title, image, url } = props;

  const addDefaultSrc = (ev) => {
    ev.target.src = defaultImage;
  };
  return (
    <div className="recipe" data-testid="recipe">
      <div className="recipe__title">{title}</div>
      <a href={url} rel="noreferrer" target="_blank">
        <img
          className="recipe__image"
          onError={addDefaultSrc}
          src={image}
          alt={title}
        />
      </a>
    </div>
  );
};

export default Recipe;

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
