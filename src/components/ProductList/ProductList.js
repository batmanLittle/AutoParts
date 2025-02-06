import "./ProductList.css";
import arrowDown from "../../images/icon-arrow-down.svg";
import { useParams } from "react-router-dom";

import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productData, carBrands } from "../../utils/constants";

function ProductList() {
  const { subcategory } = useParams();
  const decodedSubcategory = decodeURIComponent(subcategory);

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Функция для обработки изменения выбранной марки
  const handleBrandChange = (brand) => {
    if (brand === "Все марки") {
      setSelectedBrand(null);
    } else {
      setSelectedBrand(brand);
    }
    setIsFilterVisible(false);
  };

  // Функция для переключения видимости фильтра
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const selectedCategoryData = productData.filter(
    (product) => product.subcategory === decodedSubcategory
  );

  // Фильтруем продукты по выбранному бренду
  const filteredProducts = selectedCategoryData.filter((product) => {
    return selectedBrand ? product.brand === selectedBrand : true;
  });
  return (
    <div className="product-list">
      <div className="container">
        <div className="product-list__c">
          <div className="product-list__c-option-box">
            <button
              className="product-list__c-option"
              onClick={toggleFilterVisibility}
            >
              <p className="txt-sans16_bold">
                {selectedBrand ? selectedBrand : "Бренд"}
              </p>
              <div
                className={
                  isFilterVisible
                    ? "product-list__c-option-icon open"
                    : "product-list__c-option-icon"
                }
              >
                <img alt="стрелка вниз" src={arrowDown} />
              </div>
            </button>
            {isFilterVisible && (
              <div className="product-list__c-filter">
                <div className="product-list__c-filter-box">
                  {carBrands.map((brand) => (
                    <button
                      className="product-list__c-filter-item"
                      onClick={() => handleBrandChange(brand)}
                      key={brand}
                    >
                      <p className="txt-sans16">{brand}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <ul className="product-list__c-block">
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <ProductCard
                  src={product.src}
                  name={product.name}
                  brand={product.brand}
                  number={product.number}
                  price={product.price}
                  id={product.id}
                  product={product}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
