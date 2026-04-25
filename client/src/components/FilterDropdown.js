import React from "react";

function FilterDropdown({ category, setCategory }) {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="All">All</option>
      <option value="Mobile">Mobile</option>
      <option value="Electronics">Electronics</option>
      <option value="Fashion">Fashion</option>
    </select>
  );
}

export default FilterDropdown;