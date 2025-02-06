import "./Popular.css";
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import arrow from "../../images/icon-arrow.svg";
import { productData } from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useBasket } from "../../contexts/BasketContext";

function Popular({ handleCatalogClick, text, btnText }) {
  const { addToBasket, basket } = useBasket();

  // Функция для случайной сортировки массива
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Состояние для хранения случайно перемешанных данных
  const [shuffledProductData, setShuffledProductData] = useState([]);

  // Используем useEffect, чтобы перемешать массив только при первом рендере
  useEffect(() => {
    const shuffledData = shuffleArray([...productData]);
    setShuffledProductData(shuffledData);
  }, []);

  return (
    <div className="popular">
      <div className="container">
        <div className="popular__c">
          <div className="popular__c-top">
            <p className="txt-sans60">{text}</p>
            <Button
              text={btnText}
              src={arrow}
              onClick={handleCatalogClick}
              data-open-menu="true"
            />
          </div>
          <div className="popular-swiper">
            <div className="popular-swiper__c">
              <Swiper
                className="popular__c-list"
                slidesPerView={2.07}
                initialSlide={0}
                breakpoints={{
                  769: {
                    slidesPerView: 4.8,
                  },
                }}
              >
                {shuffledProductData.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard
                      src={product.src}
                      name={product.name}
                      brand={product.brand}
                      number={product.number}
                      price={product.price}
                      id={product.id}
                      addToBasket={addToBasket}
                      basket={basket}
                      product={product}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
