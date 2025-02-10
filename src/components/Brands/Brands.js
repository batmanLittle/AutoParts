import "./Brands.css";

import arrowBlue from "../../images/arrow-blue.svg";
import { brandImgs } from "../../utils/constants";
import React, { useState, useEffect } from "react";
import FilterDrop from "../FilterDrop/FilterDrop";

function Brands() {
  const [itemsToShow, setItemsToShow] = useState(brandImgs.length);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);
  const repeatedBrands = Array(4).fill(brandImgs).flat();

  const [currentFilter, setCurrentFilter] = useState("по популярности");
  const filterOptions = ["по популярности", "по рейтингу"];

  const handleSelectFilter = (filter) => {
    setCurrentFilter(filter);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth <= 768;
      setIsMobile(isMobileScreen);
      setItemsToShow(isMobileScreen ? brandImgs.length : brandImgs.length * 2);
      setIsOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleShowMore = () => {
    if (!isOpen) {
      setItemsToShow(repeatedBrands.length);
    } else {
      setItemsToShow(isMobile ? brandImgs.length : brandImgs.length * 2);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="brands">
      <div className="container">
        <div className="brands__c">
          <div className="brands__c-opts">
            <FilterDrop
              currentFilter={currentFilter}
              onSelectFilter={handleSelectFilter}
              filterOptions={filterOptions}
            />
          </div>
          <div className="brands__c-box">
            <ul className="brands__c-list">
              {repeatedBrands.slice(0, itemsToShow).map((brand, index) => (
                <li key={index} className="brands__c-item">
                  <img src={brand.src} alt={`иконка ${brand.name}`} />
                </li>
              ))}
            </ul>
            <button
              className={isOpen ? "brands__c-btn open" : "brands__c-btn"}
              onClick={toggleShowMore}
            >
              <p className="txt-rubik16">
                {isOpen ? "свернуть" : "показать еще"}
              </p>
              <img alt="стрелка" src={arrowBlue} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
