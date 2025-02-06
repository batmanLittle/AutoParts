import "./PartSelect.css";
import Button from "../Button/Button";
import arrow from "../../images/icon-arrow.svg";
import React, { useState } from "react";
import arrowDown from "../../images/icon-arrow-down.svg";
import arrowRight from "../../images/icon-arrow-rght-wh.svg";
import { carBrands, carParts } from "../../utils/constants";
import { productData, carModels } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import FilterDrop from "../FilterDrop/FilterDrop";

function PartSelect({ handleCatalogClick }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all"); // По умолчанию активная вкладка "Весь каталог"
  const [carPosition, setCarPosition] = useState("front");
  const [selectedBrand, setSelectedBrand] = useState(null); // Для выбранной марки
  const [selectedPart, setSelectedPart] = useState(null); // Для выбранной детали

  const [isBrandFilterVisible, setIsBrandFilterVisible] = useState(false);
  const [isPartFilterVisible, setIsPartFilterVisible] = useState(false);

  const [currentFilter, setCurrentFilter] = useState("седан");

  const filterOptions = [
    "кроссовер",
    "седан",
    "хэтчбек",
    "универсал",
    "грузовик",
    "минивэн",
    "джип",
  ]; // Доступные фильтры

  const handleSelectFilter = (filter) => {
    setCurrentFilter(filter);
    setCarPosition("front");
  };

  // Функция для обработки клика на товар
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  // Обработчик клика по вкладке
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCarPositionChange = (position) => {
    setCarPosition(position);
  };

  // Обработчик клика по марке
  const handleBrandSelect = (brand) => {
    if (brand === "Все марки") {
      setSelectedBrand(null); // Сброс фильтра
    } else {
      setSelectedBrand(brand); // Устанавливаем выбранный бренд
    }
    setIsBrandFilterVisible(false); // Скрываем фильтр после выбора
  };

  // Обработчик клика по детали
  const handlePartSelect = (part) => {
    if (part === "Все детали") {
      setSelectedPart(null); // Сброс фильтра
    } else {
      setSelectedPart(part); // Устанавливаем выбранную деталь
    }
    setIsPartFilterVisible(false); // Скрываем фильтр после выбора
  };

  // Функции для открытия/закрытия фильтра
  const toggleBrandFilter = () => {
    setIsBrandFilterVisible(!isBrandFilterVisible);
  };

  const togglePartFilter = () => {
    setIsPartFilterVisible(!isPartFilterVisible);
  };

  // Фильтрация продуктов на основе выбранной марки и детали
  const filteredProducts = productData.filter((product) => {
    const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
    const matchesPart = selectedPart
      ? product.subcategory === selectedPart
      : true;
    return matchesBrand && matchesPart;
  });

  return (
    <div className="part-select">
      <div className="container">
        <div className="part-select__c">
          <div className="part-select__c-top">
            <p className="txt-sans60">Подобрать деталь</p>
            <Button
              text={"в каталог"}
              src={arrow}
              onClick={handleCatalogClick}
              data-open-menu="true"
            />
          </div>
          <div className="part-select__c-block">
            <div className="part-select__left">
              <div className="part-select__left-top">
                <div className="part-select__opts">
                  {/* Фильтр по марке */}
                  <div className="part-select__opt-box">
                    <button
                      className="part-select__opt"
                      onClick={toggleBrandFilter}
                    >
                      <p className="txt-sans20"> {selectedBrand || "Марка"}</p>
                      <div
                        className={
                          isBrandFilterVisible
                            ? "part-select__opt-img open"
                            : "part-select__opt-img"
                        }
                      >
                        <img src={arrowDown} alt="стрелка вниз" />
                      </div>
                    </button>
                    {isBrandFilterVisible && (
                      <div className="part-select__c-filter">
                        <div className="part-select__c-filter-box">
                          {carBrands.map((brand, index) => (
                            <button
                              key={index}
                              className="part-select__c-filter-item"
                              onClick={() => handleBrandSelect(brand)}
                            >
                              <p className="txt-sans20">{brand}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="part-select__opt-separator"></div>
                  {/* Фильтр по деталям */}
                  <div className="part-select__opt-box">
                    <button
                      className="part-select__opt"
                      onClick={togglePartFilter}
                    >
                      <p className="txt-sans20">{selectedPart || "Деталь"}</p>
                      <div
                        className={
                          isPartFilterVisible
                            ? "part-select__opt-img open"
                            : "part-select__opt-img"
                        }
                      >
                        <img src={arrowDown} alt="стрелка вниз" />
                      </div>
                    </button>
                    {isPartFilterVisible && (
                      <div className="part-select__c-filter">
                        <div className="part-select__c-filter-box">
                          {carParts.map((part, index) => (
                            <button
                              className="part-select__c-filter-item"
                              key={index}
                              onClick={() => handlePartSelect(part)}
                            >
                              <p className="txt-sans20">{part}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="part-select__opts-tabs">
                  <button
                    className={`part-select__opts-tab ${
                      activeTab === "car" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("car")}
                  >
                    <p className="txt-sans16">Мой автомобиль</p>
                  </button>
                  <button
                    className={`part-select__opts-tab ${
                      activeTab === "all" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("all")}
                  >
                    <p className="txt-sans16">Весь каталог</p>
                  </button>
                </div>
              </div>

              <ul className="part-select__list">
                {filteredProducts.map((product) => (
                  <li className="part-select__item" key={product.id}>
                    <div className="part-select__item-img">
                      <img alt="" src={product.src} />
                    </div>
                    <div className="part-select__item-dtl">
                      <p className="txt-sans18_bold">{product.name}</p>
                      <div className="part-select__item-dtl-center">
                        <div className="part-select__item-dtl-clm">
                          <p className="txt-sans16">Марка:</p>
                          <p className="txt-sans16">{product.brand}</p>
                        </div>
                        <div className="part-select__item-dtl-clm num">
                          <p className="txt-sans16">
                            Оригинальный номер детали:
                          </p>
                          <p className="txt-sans16">{product.number}</p>
                        </div>
                      </div>
                      <div className="part-select__item-dtl-btm">
                        <p className="txt-sans24">{product.price}</p>
                        <button
                          className="part-select__item-dtl-icon"
                          onClick={() => handleProductClick(product.id)}
                        >
                          <img alt="стрелка вправо" src={arrowRight} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="part-select__right">
              <div className="part-select__right-img">
                <img alt="" src={carModels[currentFilter][carPosition]} />
              </div>
              <div className="part-select__right-btm">
                <FilterDrop
                  currentFilter={currentFilter}
                  onSelectFilter={handleSelectFilter}
                  filterOptions={filterOptions}
                />
                <div className="part-select__opts-tabs">
                  <button
                    className={`part-select__opts-tab ${
                      carPosition === "front" ? "active" : ""
                    }`}
                    onClick={() => handleCarPositionChange("front")}
                  >
                    <p className="txt-sans16">Вид спереди</p>
                  </button>
                  <button
                    className={`part-select__opts-tab ${
                      carPosition === "rear" ? "active" : ""
                    }`}
                    onClick={() => handleCarPositionChange("rear")}
                  >
                    <p className="txt-sans16">Вид сзади</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartSelect;
