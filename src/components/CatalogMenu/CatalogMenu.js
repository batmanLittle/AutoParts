import "./CatalogMenu.css";
import iconClose from "../../images/icon-close.svg";
import iconArrow from "../../images/icon-arrow-rght-blue.svg";
import iconArrowGrey from "../../images/icon-arr-gray.svg";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  carBodyParts,
  doorsAndAccessories,
  bodyTrimAndAccents,
  supportSystems,
} from "../../utils/constants";

function CatalogMenu({ handleClose }) {
  const [showAll, setShowAll] = useState({
    carBodyParts: false,
    doorsAndAccessories: false,
    bodyTrimAndAccents: false,
    supportSystems: false,
  });
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(
    "body_and_components"
  );
  const menuRef = useRef(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowAll({
      carBodyParts: false,
      doorsAndAccessories: false,
      bodyTrimAndAccents: false,
      supportSystems: false,
    });
    navigate(`/category/${category}`);
  };

  // Функция для переключения отображения всех элементов
  const toggleShowAll = (category) => {
    setShowAll((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isCatalogItem = event.target.closest(".catalog-menu__c-item");
      const isCatalogButton = event.target.closest('[data-open-menu="true"]');

      if (
        !menuRef.current.contains(event.target) &&
        !isCatalogItem &&
        !isCatalogButton
      ) {
        handleClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClose]);

  useEffect(() => {
    const categoryLinks = document.querySelectorAll(
      ".catalog-menu__category-list li"
    );

    categoryLinks.forEach((link) => {
      link.addEventListener("click", () => {
        window.scrollTo(0, 0);
      });
    });

    return () => {
      categoryLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="catalog-menu" ref={menuRef}>
      <div className="container">
        <div className="catalog-menu__c">
          <div className="catalog-menu__c-top">
            <button className="catalog-menu__c-close" onClick={handleClose}>
              <img alt="Закрыть" src={iconClose} />
            </button>
          </div>
          <div className="catalog-menu__c-block">
            <div className="catalog-menu__c-left">
              <nav className="catalog-menu__nav">
                <ul className="catalog-menu__list">
                  <li
                    onClick={() => handleCategoryClick("parts")}
                    className={`catalog-menu__c-item ${
                      selectedCategory === "parts" ? "selected" : ""
                    }`}
                  >
                    <button className="txt-sans20_bold">Запчасти для ТО</button>
                    <img src={iconArrow} alt="стрелка вправо" />
                  </li>

                  <li
                    className={`catalog-menu__c-item ${
                      selectedCategory === "body_and_components"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleCategoryClick("body_and_components")}
                  >
                    <button className="txt-sans20_bold">
                      Кузов и составляющие
                    </button>
                    <img src={iconArrow} alt="стрелка вправо" />
                  </li>

                  <li
                    className={`catalog-menu__c-item ${
                      selectedCategory === "engine" ? "selected" : ""
                    }`}
                    onClick={() => handleCategoryClick("engine")}
                  >
                    <button className="txt-sans20_bold">Двигатель</button>
                    <img src={iconArrow} alt="стрелка вправо" />
                  </li>

                  <li
                    className={`catalog-menu__c-item ${
                      selectedCategory === "suspension" ? "selected" : ""
                    }`}
                    onClick={() => handleCategoryClick("suspension")}
                  >
                    <button className="txt-sans20_bold">Подвеска</button>
                    <img src={iconArrow} alt="стрелка вправо" />
                  </li>

                  <li
                    className={`catalog-menu__c-item ${
                      selectedCategory === "lighting" ? "selected" : ""
                    }`}
                    onClick={() => handleCategoryClick("lighting")}
                  >
                    <button className="txt-sans20_bold">Освещение</button>
                    <img src={iconArrow} alt="стрелка вправо" />
                  </li>

                  <li
                    className={`catalog-menu__c-item ${
                      selectedCategory === "cooling_and_heating"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleCategoryClick("cooling_and_heating")}
                  >
                    <button className="txt-sans20_bold">
                      Охлаждение, отопление
                    </button>
                    <img src={iconArrow} alt="стрелка вправо" />
                  </li>

                  <li className="catalog-menu__c-item">
                    <div className="txt-sans20_bold">Оригинальный каталог</div>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="catalog-menu__c-right">
              {/* Кузов и составляющие */}
              {selectedCategory === "body_and_components" && (
                <div className="catalog-menu__category">
                  <div className="catalog-menu__category-title">
                    <p className="txt-sans42">Кузов и составляющие</p>
                  </div>
                  <div className="catalog-menu__category-block">
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Детали кузова</p>
                      <ul className="catalog-menu__category-list">
                        {carBodyParts
                          .slice(
                            0,
                            showAll.carBodyParts ? carBodyParts.length : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                className="txt-sans20"
                                to={`/category/body_and_components/${part.name}`}
                                onClick={handleClose}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                carBodyParts.length > 7 ? "flex" : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.carBodyParts ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("carBodyParts")}
                          >
                            <p className="txt-sans20">
                              {showAll.carBodyParts ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Двери и аксессуары</p>
                      <ul className="catalog-menu__category-list">
                        {doorsAndAccessories
                          .slice(
                            0,
                            showAll.doorsAndAccessories
                              ? doorsAndAccessories.length
                              : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/body_and_components/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                doorsAndAccessories.length > 7
                                  ? "flex"
                                  : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.doorsAndAccessories ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("doorsAndAccessories")}
                          >
                            <p className="txt-sans20">
                              {showAll.doorsAndAccessories ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Обвес и обрамление</p>
                      <ul className="catalog-menu__category-list">
                        {bodyTrimAndAccents
                          .slice(
                            0,
                            showAll.bodyTrimAndAccents
                              ? bodyTrimAndAccents.length
                              : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/body_and_components/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                bodyTrimAndAccents.length > 7 ? "flex" : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.bodyTrimAndAccents ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("bodyTrimAndAccents")}
                          >
                            <p className="txt-sans20">
                              {showAll.bodyTrimAndAccents ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Системы поддержки</p>
                      <ul className="catalog-menu__category-list">
                        {supportSystems
                          .slice(
                            0,
                            showAll.supportSystems ? supportSystems.length : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/body_and_components/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                supportSystems.length > 7 ? "flex" : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.supportSystems ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("supportSystems")}
                          >
                            <p className="txt-sans20">
                              {showAll.supportSystems ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {/* Запчасти для ТО */}
              {selectedCategory === "parts" && (
                <div className="catalog-menu__category">
                  <div className="catalog-menu__category-title">
                    <p className="txt-sans42">Запчасти для ТО</p>
                  </div>
                  <div className="catalog-menu__category-block">
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Детали кузова</p>
                      <ul className="catalog-menu__category-list">
                        {carBodyParts
                          .slice(
                            0,
                            showAll.carBodyParts ? carBodyParts.length : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/parts/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                carBodyParts.length > 7 ? "flex" : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.carBodyParts ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("carBodyParts")}
                          >
                            <p className="txt-sans20">
                              {showAll.carBodyParts ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Двигатель */}
              {selectedCategory === "engine" && (
                <div className="catalog-menu__category">
                  <div className="catalog-menu__category-title">
                    <p className="txt-sans42">Двигатель</p>
                  </div>
                  <div className="catalog-menu__category-block">
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Детали кузова</p>
                      <ul className="catalog-menu__category-list">
                        {carBodyParts
                          .slice(
                            0,
                            showAll.carBodyParts ? carBodyParts.length : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/engine/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                carBodyParts.length > 7 ? "flex" : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.carBodyParts ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("carBodyParts")}
                          >
                            <p className="txt-sans20">
                              {showAll.carBodyParts ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Обвес и обрамление</p>
                      <ul className="catalog-menu__category-list">
                        {bodyTrimAndAccents
                          .slice(
                            0,
                            showAll.bodyTrimAndAccents
                              ? bodyTrimAndAccents.length
                              : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/engine/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                bodyTrimAndAccents.length > 7 ? "flex" : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.bodyTrimAndAccents ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("bodyTrimAndAccents")}
                          >
                            <p className="txt-sans20">
                              {showAll.bodyTrimAndAccents ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {/* Подвеска */}
              {selectedCategory === "suspension" && (
                <div className="catalog-menu__category">
                  <div className="catalog-menu__category-title">
                    <p className="txt-sans42">Подвеска</p>
                  </div>
                  <div className="catalog-menu__category-block">
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Двери и аксессуары</p>
                      <ul className="catalog-menu__category-list">
                        {doorsAndAccessories
                          .slice(
                            0,
                            showAll.doorsAndAccessories
                              ? doorsAndAccessories.length
                              : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/suspension/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                doorsAndAccessories.length > 7
                                  ? "flex"
                                  : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.doorsAndAccessories ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("doorsAndAccessories")}
                          >
                            <p className="txt-sans20">
                              {showAll.doorsAndAccessories ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Обвес и обрамление</p>
                      <ul className="catalog-menu__category-list">
                        {bodyTrimAndAccents
                          .slice(
                            0,
                            showAll.bodyTrimAndAccents
                              ? bodyTrimAndAccents.length
                              : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/suspension/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                bodyTrimAndAccents.length > 7 ? "flex" : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.bodyTrimAndAccents ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("bodyTrimAndAccents")}
                          >
                            <p className="txt-sans20">
                              {showAll.bodyTrimAndAccents ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Системы поддержки</p>
                      <ul className="catalog-menu__category-list">
                        {supportSystems
                          .slice(
                            0,
                            showAll.supportSystems ? supportSystems.length : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/suspension/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                supportSystems.length > 7 ? "flex" : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.supportSystems ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("supportSystems")}
                          >
                            <p className="txt-sans20">
                              {showAll.supportSystems ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {/* Освещение*/}
              {selectedCategory === "lighting" && (
                <div className="catalog-menu__category">
                  <div className="catalog-menu__category-title">
                    <p className="txt-sans42">Освещение</p>
                  </div>
                  <div className="catalog-menu__category-block">
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Двери и аксессуары</p>
                      <ul className="catalog-menu__category-list">
                        {doorsAndAccessories
                          .slice(
                            0,
                            showAll.doorsAndAccessories
                              ? doorsAndAccessories.length
                              : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/lighting/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                doorsAndAccessories.length > 7
                                  ? "flex"
                                  : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.doorsAndAccessories ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("doorsAndAccessories")}
                          >
                            <p className="txt-sans20">
                              {showAll.doorsAndAccessories ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Обвес и обрамление</p>
                      <ul className="catalog-menu__category-list">
                        {bodyTrimAndAccents
                          .slice(
                            0,
                            showAll.bodyTrimAndAccents
                              ? bodyTrimAndAccents.length
                              : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/lighting/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                bodyTrimAndAccents.length > 7 ? "flex" : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.bodyTrimAndAccents ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("bodyTrimAndAccents")}
                          >
                            <p className="txt-sans20">
                              {showAll.bodyTrimAndAccents ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Детали кузова</p>
                      <ul className="catalog-menu__category-list">
                        {carBodyParts
                          .slice(
                            0,
                            showAll.carBodyParts ? carBodyParts.length : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/lighting/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                carBodyParts.length > 7 ? "flex" : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.carBodyParts ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("carBodyParts")}
                          >
                            <p className="txt-sans20">
                              {showAll.carBodyParts ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {/* Охлаждение, отопление*/}
              {selectedCategory === "cooling_and_heating" && (
                <div className="catalog-menu__category">
                  <div className="catalog-menu__category-title">
                    <p className="txt-sans42">Охлаждение, отопление</p>
                  </div>
                  <div className="catalog-menu__category-block">
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Двери и аксессуары</p>
                      <ul className="catalog-menu__category-list">
                        {doorsAndAccessories
                          .slice(
                            0,
                            showAll.doorsAndAccessories
                              ? doorsAndAccessories.length
                              : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/cooling_and_heating/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                doorsAndAccessories.length > 7
                                  ? "flex"
                                  : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.doorsAndAccessories ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("doorsAndAccessories")}
                          >
                            <p className="txt-sans20">
                              {showAll.doorsAndAccessories ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="catalog-menu__category-box">
                      <p className="txt-sans20_bold">Детали кузова</p>
                      <ul className="catalog-menu__category-list">
                        {carBodyParts
                          .slice(
                            0,
                            showAll.carBodyParts ? carBodyParts.length : 7
                          )
                          .map((part, index) => (
                            <li key={index}>
                              <Link
                                onClick={handleClose}
                                className="txt-sans20"
                                to={`/category/cooling_and_heating/${part.name}`}
                              >
                                {part.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <button
                            style={{
                              display:
                                carBodyParts.length > 7 ? "flex" : "none",
                            }}
                            className={`catalog-menu__category-btn ${
                              showAll.carBodyParts ? "open" : ""
                            }`}
                            onClick={() => toggleShowAll("carBodyParts")}
                          >
                            <p className="txt-sans20">
                              {showAll.carBodyParts ? "Скрыть" : "Еще"}
                            </p>
                            <div>
                              <img alt="стрелка вниз" src={iconArrowGrey} />
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogMenu;
