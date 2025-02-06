import "./ProductCard.css";
import iconBasket from "../../images/icon-basket.svg";
import iconCheck from "../../images/checkmark.svg";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";

function ProductCard({ product }) {
  const { id, src, name, brand, number, price } = product;

  const { addToBasket, basket } = useBasket();
  const isInBasket = basket.some((item) => item.id === product.id);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  const handleAddToBasket = (e) => {
    e.stopPropagation();
    if (isInBasket) {
      navigate("/basket");
    } else {
      addToBasket(product);
    }
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className="product-card__top">
        <img alt="изображение товара" src={src} />
      </div>
      <div className="product-card__info">
        <div className="product-card__info-name">
          <p className="txt-sans18_bold">{name}</p>
        </div>
        <p className="txt-sans16">{brand}</p>
        <div className="product-card__info-number">
          <p className="txt-sans16">Оригинальный номер детали:</p>
          <p className="txt-sans18">{number}</p>
        </div>
        <div className="product-card__info-price">
          <p className="txt-sans24">{price}</p>
          <button
            className="product-card__info-btn"
            onClick={handleAddToBasket}
          >
            <img src={isInBasket ? iconCheck : iconBasket} alt="корзина" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
