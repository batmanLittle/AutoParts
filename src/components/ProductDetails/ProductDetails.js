import "./ProductDetails.css";
// import productImg from "../../images/img-product-det.png";
import React, { useState } from "react";
import { productData } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("delivery");
  const [productTab, setProductTab] = useState("characteristics");

  const { id } = useParams();

  const { addToBasket, basket } = useBasket();

  const product = productData.find((p) => p.id === id);

  const isInBasket = basket.some((item) => item.id === product.id);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const handleTabChange = (tab) => {
    setProductTab(tab);
  };

  //Добавление в корзину
  const handleAddToBasket = () => {
    if (isInBasket) {
      navigate("/basket");
    } else {
      addToBasket(product);
    }
  };

  return (
    <div className="product-details">
      <div className="container">
        <div className="product-details__c">
          <div className="product-details__c-block">
            <div className="product-details__c-bl-left">
              <div className="product-details__c-img-gallery">
                <div className="product-details__c-img-big">
                  <img alt="изображение товара" src={product.src} />
                </div>
                <div className="product-details__c-img-small">
                  <img alt="изображение товара" src={product.src} />
                  <img alt="изображение товара" src={product.src} />
                  <img alt="изображение товара" src={product.src} />
                </div>
              </div>
              <div className="product-details__delivery-box">
                <div className="product-details__delivery-opts">
                  <p className="txt-sans32">Варианты доставки</p>

                  <div className="product-details__delivery-tabs">
                    <button
                      onClick={() => handleTabClick("delivery")}
                      className={`product-details__delivery-tab ${
                        selectedTab === "delivery" ? "active" : ""
                      }`}
                    >
                      <p className="txt-sans16">Доставка</p>
                    </button>
                    <button
                      onClick={() => handleTabClick("pickup")}
                      className={`product-details__delivery-tab ${
                        selectedTab === "pickup" ? "active" : ""
                      }`}
                    >
                      <p className="txt-sans16">Самовывоз</p>
                    </button>
                  </div>
                </div>
                <div className="product-details__delivery-tab_c">
                  {selectedTab === "delivery" && (
                    <ul className="product-details__delivery-list">
                      <li>
                        <p className="txt-sans18">
                          Курьером до двери по Москве
                        </p>
                      </li>
                      <li className="product-details__delivery-separator"></li>
                      <li>
                        {" "}
                        <p className="txt-sans18">Почтой по всей России</p>
                      </li>
                    </ul>
                  )}
                  {selectedTab === "pickup" && (
                    <ul className="product-details__delivery-list">
                      <li>
                        {" "}
                        <p className="txt-sans18">Самовывоз из магазина</p>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="product-details__c-bl-right">
              <div className="product-details__r-name">
                <p className="txt-sans42">{product.name}</p>
              </div>
              <div className="product-details__r-box">
                <p className="txt-sans20_bold">Характеристики:</p>
                <table>
                  <tbody className="product-details__r-table">
                    <tr className="product-details__r-row">
                      <td className="txt-sans16 product-details__r-label">
                        Марка:
                      </td>
                      <td className="txt-sans18 product-details__r-value">
                        {product.brand}
                      </td>
                    </tr>
                    <tr className="product-details__r-row">
                      <td className=" txt-sans16 product-details__r-label">
                        Модельный год:
                      </td>
                      <td className="txt-sans18 product-details__r-value">
                        {product.year}
                      </td>
                    </tr>
                    <tr className="product-details__r-row">
                      <td className="txt-sans16 product-details__r-label">
                        Материал:
                      </td>
                      <td className="txt-sans18 product-details__r-value">
                        {product.material}
                      </td>
                    </tr>
                    <tr className="product-details__r-row">
                      <td className=" txt-sans16 product-details__r-label">
                        Оригинальный номер детали:
                      </td>
                      <td className="txt-sans18 product-details__r-value">
                        {product.number}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="product-details__r-btm">
                <div className="product-details__r-price">
                  <p className="txt-sans42">{product.price}</p>
                </div>
                <div className="product-details__r-btns">
                  <button className="product-details__r-btn blue">
                    <p className="txt-sans16 white">купить в один клик</p>
                  </button>
                  <button
                    className={`product-details__r-btn ${
                      isInBasket ? "active" : ""
                    }`}
                    onClick={handleAddToBasket}
                  >
                    <p className="txt-sans16">
                      {isInBasket ? "в корзине" : "добавить в корзину"}
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-details__info">
            <div className="product-details__info-opts">
              <button
                className={`product-details__info-opt ${
                  productTab === "characteristics" ? "active" : ""
                }`}
                onClick={() => handleTabChange("characteristics")}
              >
                <p className="txt-sans20">Характеристики</p>
              </button>
              <button
                className={`product-details__info-opt ${
                  productTab === "manufacturer" ? "active" : ""
                }`}
                onClick={() => handleTabChange("manufacturer")}
              >
                <p className="txt-sans20">Производитель</p>
              </button>
              <button
                className={`product-details__info-opt ${
                  productTab === "originalNumber" ? "active" : ""
                }`}
                onClick={() => handleTabChange("originalNumber")}
              >
                <p className="txt-sans20">Оригинальные номера</p>
              </button>
            </div>
            <div className="product-details__info-c">
              {productTab === "characteristics" && (
                <div className="product-details__info-box">
                  <p className="txt-sans20_bold">Характеристики:</p>
                  <table>
                    <tbody className="product-details__info-table">
                      <tr className="product-details__info-row">
                        <td className="txt-sans16 product-details__info-label">
                          Марка:
                        </td>
                        <td className="txt-sans18 product-details__info-value">
                          {product.brand}
                        </td>
                      </tr>
                      <tr className="product-details__info-row">
                        <td className=" txt-sans16 product-details__info-label">
                          Модельный год:
                        </td>
                        <td className="txt-sans18 product-details__info-value">
                          {product.year}
                        </td>
                      </tr>
                      <tr className="product-details__info-row">
                        <td className="txt-sans16 product-details__info-label">
                          Материал:
                        </td>
                        <td className="txt-sans18 product-details__info-value">
                          {product.material}
                        </td>
                      </tr>
                      <tr className="product-details__info-row">
                        <td className=" txt-sans16 product-details__info-label">
                          Оригинальный номер детали:
                        </td>
                        <td className="txt-sans18 product-details__info-value">
                          {product.number}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {productTab === "manufacturer" && (
                <div className="product-details__info-box">
                  <p className="txt-sans20_bold">Производитель:</p>
                  <table>
                    <tbody className="product-details__info-table">
                      <tr className="product-details__info-row">
                        <td className="txt-sans16 product-details__info-label">
                          Производитель:
                        </td>
                        <td className="txt-sans18 product-details__info-value">
                          {product.manufacturer}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {productTab === "originalNumber" && (
                <div className="product-details__info-box">
                  <p className="txt-sans20_bold">Оригинальные номера:</p>
                  <table>
                    <tbody className="product-details__info-table">
                      <tr className="product-details__info-row">
                        <td className="txt-sans16 product-details__info-label">
                          {product.brand}:
                        </td>
                        <td className="txt-sans18 product-details__info-value">
                          {product.number}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <div className="product-details__c-desc">
              <p className="txt-sans20_bold">Описание:</p>
              <p className="txt-sans18">{product.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
