import React, { createContext, useState, useContext } from "react";

// Создаем контекст для корзины
const BasketContext = createContext();

// Хук для использования контекста
export const useBasket = () => {
  return useContext(BasketContext);
};

// Провайдер для корзины
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  // Функция для добавления товара в корзину или увеличения его количества
  const addToBasket = (product) => {
    const existingProduct = basket.find((item) => item.id === product.id);

    if (existingProduct) {
      setBasket(
        basket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Увеличиваем количество
            : item
        )
      );
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]); // Добавляем товар с количеством 1
    }
  };

  // Функция для удаления товара из корзины
  const removeFromBasket = (productId) => {
    setBasket(basket.filter((product) => product.id !== productId));
  };

  // Функция для уменьшения количества товара
  const decreaseQuantity = (productId) => {
    setBasket(
      basket.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Функция для увеличения количества товара
  const increaseQuantity = (productId) => {
    setBasket(
      basket.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Функция для очистки корзины
  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        increaseQuantity,
        decreaseQuantity,
        clearBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
