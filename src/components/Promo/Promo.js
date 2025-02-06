import "./Promo.css";
import arrowDown from "../../images/icon-arrow-down.svg";
import arrow from "../../images/icon-arrow.svg";
import search from "../../images/icon-search.svg";
import React, { useState } from "react";
import { carData } from "../../utils/constants";
import Button from "../Button/Button";

function Promo({ handleCatalogClick }) {
  const [isBrandFilterOpen, setIsBrandFilterOpen] = useState(false);
  const [isModelFilterOpen, setIsModelFilterOpen] = useState(false);
  const [isYearFilterOpen, setIsYearFilterOpen] = useState(false);
  const [isEngineFilterOpen, setIsEngineFilterOpen] = useState(false);
  const [isModificFilterOpen, setIsModificFilterOpen] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("");
  const [selectedModific, setSelectedModific] = useState("");

  const toggleBrandFilter = () => {
    setIsBrandFilterOpen(!isBrandFilterOpen);
    setIsModelFilterOpen(false);
    setIsYearFilterOpen(false);
    setIsEngineFilterOpen(false);
    setIsModificFilterOpen(false);
  };

  //открытие/закрытие фильтра модели
  const toggleModelFilter = () => {
    setIsModelFilterOpen(!isModelFilterOpen);
  };

  //открытие/закрытие фильтра года
  const toggleYearFilter = () => {
    setIsYearFilterOpen(!isYearFilterOpen);
  };

  //открытие/закрытие фильтра двигателя
  const toggleEngineFilter = () => {
    setIsEngineFilterOpen(!isEngineFilterOpen);
  };

  //открытие/закрытие фильтра модификаций
  const toggleModificFilter = () => {
    setIsModificFilterOpen(!isModificFilterOpen);
  };

  const selectBrand = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel(""); // Сброс модели при выборе новой марки
    setSelectedYear("");
    setSelectedEngine("");
    setSelectedModific("");
    setIsBrandFilterOpen(false);
  };

  const selectModel = (model) => {
    setSelectedModel(model);
    setIsModelFilterOpen(false);
  };

  const selectYear = (year) => {
    setSelectedYear(year);
    setIsYearFilterOpen(false);
  };

  const selectEngine = (engine) => {
    setSelectedEngine(engine);
    setIsEngineFilterOpen(false);
  };

  const selectModific = (modific) => {
    setSelectedModific(modific);
    setIsModificFilterOpen(false);
  };

  return (
    <div className="promo">
      <div className="container">
        <div className="promo__c">
          <div className="promo__c-top">
            <div className="promo__c-title">
              <p className="txt-sans64">Здесь покупают запчасти</p>
            </div>
            <div className="promo__c-subtitle">
              <p className="txt-sans20">
                Arena Parts Company – крупный поставщик кузовных запчастей для
                автомобилей различных марок
              </p>
            </div>

            <Button
              text="Перейти в каталог"
              src={arrow}
              onClick={handleCatalogClick}
              data-open-menu="true"
            />
          </div>
          <div className="promo__c-info">
            <div className="promo__c-info-item">
              <p className="txt-sans42_bold">15+</p>
              <p className="txt-sans20">лет опыта</p>
            </div>
            <div className="promo__c-info-item">
              <p className="txt-sans42_bold">300 000+</p>
              <p className="txt-sans20">наименование запчастей</p>
            </div>
            <div className="promo__c-info-item">
              <p className="txt-sans42_bold">80+</p>
              <p className="txt-sans20">сотрудников</p>
            </div>
          </div>
          <div className="promo__c-btm">
            <div className="promo__c-options">
              <div className="promo__c-options-top">
                <button>
                  <p className="txt-sans20 active">По марке авто</p>
                </button>
                <div className="promo__c-options-line"></div>
                <button>
                  <p className="txt-sans20">По VIN/Госномеру</p>
                </button>
                <div className="promo__c-options-line"></div>
                <button>
                  <p className="txt-sans20">По номеру</p>
                </button>
              </div>
              <div className="promo__c-options-btm">
                {/* Фильтр по марке */}
                <div className="promo__c-option-box">
                  <button
                    className="promo__c-option"
                    onClick={toggleBrandFilter}
                  >
                    <p className="txt-sans16">
                      {selectedBrand || "Укажите марку"}
                    </p>
                    <div
                      className={
                        isBrandFilterOpen
                          ? "promo__c-option-icon open"
                          : "promo__c-option-icon"
                      }
                    >
                      <img alt="стрелка вниз" src={arrowDown} />
                    </div>
                  </button>

                  {isBrandFilterOpen && (
                    <div className="promo__c-filter">
                      <div className="promo__c-filter-box">
                        {Object.keys(carData).map((brand, index) => (
                          <button
                            key={index}
                            className="promo__c-filter-item"
                            onClick={() => selectBrand(brand)}
                          >
                            <p className="txt-sans16">{brand}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Фильтр по модели */}
                <div className="promo__c-option-box">
                  <button
                    className="promo__c-option"
                    onClick={toggleModelFilter}
                    disabled={!selectedBrand}
                  >
                    <p className="txt-sans16">
                      {selectedModel || "Выберите модель"}
                    </p>
                    <div
                      className={
                        isModelFilterOpen
                          ? "promo__c-option-icon open"
                          : "promo__c-option-icon"
                      }
                    >
                      <img alt="стрелка вниз" src={arrowDown} />
                    </div>
                  </button>

                  {isModelFilterOpen && selectedBrand && (
                    <div className="promo__c-filter">
                      <div className="promo__c-filter-box">
                        {carData[selectedBrand].models.map((model, index) => (
                          <button
                            key={index}
                            className="promo__c-filter-item"
                            onClick={() => selectModel(model)}
                          >
                            <p className="txt-sans16">{model}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Фильтр по году */}
                <div className="promo__c-option-box">
                  <button
                    className="promo__c-option"
                    onClick={toggleYearFilter}
                    disabled={!selectedBrand}
                  >
                    <p className="txt-sans16">
                      {selectedYear || "Выберите год"}
                    </p>
                    <div
                      className={
                        isYearFilterOpen
                          ? "promo__c-option-icon open"
                          : "promo__c-option-icon"
                      }
                    >
                      <img alt="стрелка вниз" src={arrowDown} />
                    </div>
                  </button>

                  {isYearFilterOpen && selectedBrand && (
                    <div className="promo__c-filter">
                      <div className="promo__c-filter-box">
                        {carData[selectedBrand].years.map((year, index) => (
                          <button
                            key={index}
                            className="promo__c-filter-item"
                            onClick={() => selectYear(year)}
                          >
                            <p className="txt-sans16">{year}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Фильтр по двигателю */}
                <div className="promo__c-option-box">
                  <button
                    className="promo__c-option"
                    onClick={toggleEngineFilter}
                    disabled={!selectedBrand}
                  >
                    <p className="txt-sans16">
                      {selectedEngine || "Укажите тип двигателя"}
                    </p>
                    <div
                      className={
                        isEngineFilterOpen
                          ? "promo__c-option-icon open"
                          : "promo__c-option-icon"
                      }
                    >
                      <img alt="стрелка вниз" src={arrowDown} />
                    </div>
                  </button>

                  {isEngineFilterOpen && selectedBrand && (
                    <div className="promo__c-filter">
                      <div className="promo__c-filter-box">
                        {carData[selectedBrand].engines.map((engine, index) => (
                          <button
                            key={index}
                            className="promo__c-filter-item"
                            onClick={() => selectEngine(engine)}
                          >
                            <p className="txt-sans16">{engine}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Фильтр по модификациям */}
                <div className="promo__c-option-box">
                  <button
                    className="promo__c-option"
                    onClick={toggleModificFilter}
                    disabled={!selectedBrand}
                  >
                    <p className="txt-sans16">
                      {selectedModific || "Выберите модификацию"}
                    </p>
                    <div
                      className={
                        isModificFilterOpen
                          ? "promo__c-option-icon open"
                          : "promo__c-option-icon"
                      }
                    >
                      <img alt="стрелка вниз" src={arrowDown} />
                    </div>
                  </button>

                  {isModificFilterOpen && selectedBrand && (
                    <div className="promo__c-filter">
                      <div className="promo__c-filter-box">
                        {carData[selectedBrand].modifications.map(
                          (modific, index) => (
                            <button
                              key={index}
                              className="promo__c-filter-item"
                              onClick={() => selectModific(modific)}
                            >
                              <p className="txt-sans16">{modific}</p>
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <button className="promo__c-search">
                  <p className="txt-sans16">найти</p>
                  <div className="promo__c-search-icon">
                    <img src={search} alt="иконка-поиска" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promo;
