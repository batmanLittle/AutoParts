import "./Basket.css";
import iconBasket from "../../images/icon-basket-grey.svg";
import Button from "../Button/Button";
import arrow from "../../images/icon-arrow.svg";
import iconBasketDelete from "../../images/icon-basket-delete.svg";
import iconOptDelete from "../../images/icon-close.svg";
import { useBasket } from "../../contexts/BasketContext";

function Basket({ handleCatalogClick }) {
  const {
    basket,
    removeFromBasket,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
  } = useBasket();

  return (
    <>
      {basket.length === 0 ? (
        <div className="basket-empty">
          <div className="container">
            <div className="basket-empty__c">
              <div className="basket-empty__c-top">
                <div className="basket-empty__c-top-img">
                  <img alt="корзина" src={iconBasket} />
                </div>
                <p className="txt-sans42">Ваша корзина пуста</p>
                <p className="txt-sans18">
                  Добавьте товары и они отобразятся на этой странице
                </p>
              </div>
              <div className="basket-empty__c-btm">
                <Button
                  text="в каталог"
                  src={arrow}
                  onClick={handleCatalogClick}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="basket">
          <div className="container">
            <div className="basket__c">
              <div className="basket__c-left">
                <div className="basket__c-top">
                  <p className="txt-sans60">Корзина</p>
                  <button className="basket__c-delete" onClick={clearBasket}>
                    <img alt="очистить корзину" src={iconBasketDelete} />
                    <p className="txt-sans18_bold">Очистить корзину</p>
                  </button>
                </div>
                <ul className="basket__list">
                  {basket.map((product) => (
                    <li className="basket__item" key={product.id}>
                      <div className="basket__dtls">
                        <div className="basket__dtls-img">
                          <img alt="изображение товара" src={product.src} />
                        </div>
                        <div className="basket__dtls-info">
                          <p className="txt-sans18">{product.name}</p>
                          <div className="basket__dtls-box">
                            <div className="basket__dtls-clm">
                              <p className="txt-sans16">Марка:</p>
                              <p className="txt-sans18">{product.brand}</p>
                            </div>
                            <div className="basket__dtls-clm num">
                              <p className="txt-sans16">
                                Оригинальный номер детали:
                              </p>
                              <p className="txt-sans18">{product.number}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basket__opts">
                        <div className="basket__opt">
                          <button
                            className="basket__opt-counter"
                            onClick={() => decreaseQuantity(product.id)}
                          >
                            <p>-</p>
                          </button>
                          <p className="txt-sans20">{product.quantity}</p>
                          <button
                            className="basket__opt-counter"
                            onClick={() => increaseQuantity(product.id)}
                          >
                            <p>+</p>
                          </button>
                        </div>
                        <div className="basket__opts-price">
                          <p className="txt-sans24">{product.price}</p>
                        </div>
                        <button
                          className="basket__opts-delete"
                          onClick={() => removeFromBasket(product.id)}
                        >
                          <img src={iconOptDelete} alt="удалиить товар" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="basket__c-right">
                <div className="basket__summary">
                  <div className="basket__summary-row">
                    <p className="txt-sans20">Товаров в корзине:</p>
                    <p className="txt-sans20">
                      {
                        // Подсчитываем суммарное количество товаров в корзине
                        basket.reduce(
                          (total, product) => total + product.quantity,
                          0
                        )
                      }
                    </p>
                  </div>
                  <div className="basket__summary-row">
                    <p className="txt-sans20_bold">Итого:</p>
                    <p className="txt-sans32">
                      {
                        // Подсчитываем итоговую стоимость всех товаров в корзине
                        basket.reduce(
                          (total, product) =>
                            total +
                            parseFloat(
                              product.price.replace("₽", "").replace(" ", "")
                            ) *
                              product.quantity,
                          0
                        )
                      }{" "}
                      ₽
                    </p>
                  </div>
                  <button className="basket__summary-btn">
                    <p className="txt-sans16">перейти к Оформлению</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Basket;
