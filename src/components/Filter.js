import React from "react";

function Filter({ onCategoryChange }) {
  function onChange(event) {
    onCategoryChange(event.target.value);
  }
  return (
    <select name="filter" onChange={onChange}>
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;
