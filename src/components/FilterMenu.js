import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "../styles/FilterMenu.css";

const FilterMenu = ({ value, setValue }) => {
  const options = [
    { value: "vegan", label: "Vegan" },
    { value: "vegetarian", label: "Vegetarian" },
    { value: "dairy-free", label: "Dairy-free" },
    { value: "gluten-free", label: "Gluten-free" },
    { value: "egg-free", label: "Egg-free" },
    { value: "shellfish-free", label: "Shellfish-free" },
    { value: "peanut-free", label: "Peanut-free" },
    { value: "tree-nut-free", label: "Tree-nut-free" },
    { value: "sesame-free", label: "Sesame-free" },
  ];
  const styles = {
    control: (base) => ({
      ...base,
      fontFamily: "Amaranth",
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "Amaranth",
    }),
  };

  return (
    <div className="filterMenu" data-testid="filter">
      <Select
        styles={styles}
        options={options}
        isMulti
        name="filters"
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={(e) => {
          setValue(e.map((value) => value.value));
        }}
      />
    </div>
  );
};

export default FilterMenu;

FilterMenu.propTypes = {
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
};
