import React, { useState } from "react";
import arrowDown from "../../images/icon-arrow-down.svg";
import "./FilterDrop.css";

const FilterDrop = ({ currentFilter, onSelectFilter, filterOptions }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const handleFilterSelect = (filter) => {
    onSelectFilter(filter);
    setIsFilterOpen(false);
  };

  const filteredOptions = filterOptions.filter(
    (option) => option !== currentFilter
  );

  return (
    <div className="filter-drop">
      <button className="filter-drop__opt" onClick={toggleFilter}>
        <p className="txt-sans16">{currentFilter}</p>
        <div
          className={
            isFilterOpen
              ? "filter-drop__opt-icon open"
              : "filter-drop__opt-icon"
          }
        >
          <img alt="стрелка вниз" src={arrowDown} />
        </div>
      </button>

      {isFilterOpen && (
        <div className="filter-drop__filter">
          <div className="filter-drop__filter-box">
            {filteredOptions.map((filter, index) => (
              <button
                key={index}
                className="filter-drop__filter-item"
                onClick={() => handleFilterSelect(filter)}
              >
                <p className="txt-sans16">{filter}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDrop;
