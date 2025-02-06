import "./Footer.css";
import { Link } from "react-router-dom";
import iconYoutube from "../../images/icon-youtube.svg";
import iconVk from "../../images/icon-vk.svg";
import iconRating from "../../images/icon-rating.svg";
import cardSber from "../../images/card-sber.svg";
import cardVisa from "../../images/card-visa.svg";
import cardWorld from "../../images/card-world.svg";
import iconMaster from "../../images/master-card.png";
import logo from "../../images/logo-request.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__c">
          <nav className="footer__c-nav">
            <ul className="footer__c-list">
              <li className="footer__c-item">
                <Link className="footer__c-link txt-sans16" to="/about">
                  О нас
                </Link>
              </li>
              <li className="footer__c-item">
                <Link className="footer__c-link txt-sans16" to="/delivery">
                  Доставка
                </Link>
              </li>
              <li className="footer__c-item">
                <Link className="footer__c-link txt-sans16" to="#">
                  Оплата
                </Link>
              </li>
              <li className="footer__c-item left">
                <Link className="footer__c-link txt-sans16" to="/cooperation">
                  Гарантии и возврат
                </Link>
              </li>
            </ul>
            <ul className="footer__c-list right">
              <li className="footer__c-item right">
                <Link className="footer__c-link txt-sans16" to="#">
                  Политика конфиденциальности
                </Link>
              </li>
              <li className="footer__c-item">
                <Link className="footer__c-link txt-sans16" to="/contacts">
                  Контакты ARENA PARTS
                </Link>
              </li>
              <li className="footer__c-item">
                <Link className="footer__c-link txt-sans16" to="#">
                  Публичная оферта
                </Link>
              </li>
            </ul>
          </nav>
          <div className="footer__separator-box">
            <div className="footer__separator"></div>
          </div>
          <div className="footer__c-info">
            <div className="footer__c-row">
              <p className="txt-sans16">Мы в соцсетях</p>
              <div className="footer__c-row-icons">
                <Link to="#">
                  <img alt="ютуб" src={iconYoutube} />{" "}
                </Link>

                <Link to="#">
                  <img alt="вконтакте" src={iconVk} />{" "}
                </Link>
              </div>
            </div>
            <div className="footer__c-yandex">
              <Link className="txt-sans16_bold" to="#">
                Яндекс.Карты
              </Link>
              <div className="footer__c-yandex-rating">
                <p className="txt-sans16">Рейтинг в Яндекс</p>
                <img alt="рейтинг" src={iconRating} />
              </div>
            </div>
            <div className="footer__c-row">
              <p className="txt-sans16">К оплате принимаем</p>
              <div className="footer__c-row-icons">
                <Link to="#">
                  <img alt="ютуб" src={cardSber} />{" "}
                </Link>

                <Link to="#">
                  <img alt="вконтакте" src={cardVisa} />{" "}
                </Link>
                <Link to="#">
                  <img alt="ютуб" src={cardWorld} />{" "}
                </Link>

                <Link to="#">
                  <img alt="вконтакте" src={iconMaster} />{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__c-btm">
            <p className="txt-sans16">© 2024 ArenaParts. Все права защищены.</p>
            <div className="footer__c-logo">
              <img alt="логотип" src={logo} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
