import "./Header.css";
import React, { useState, useEffect } from "react";
import logo from "../../images/icon-logo.png";
import catalog from "../../images/icon-catalog.svg";
import catalogMob from "../../images/icon-catalog-mob.svg";
import iconCloseBlue from "../../images/icon-close-blue.svg";
import phone from "../../images/icon-phone.svg";
import search from "../../images/icon-search.svg";
import basket from "../../images/icon-basket.svg";
import user from "../../images/icon-user.svg";
import { Link } from "react-router-dom";
import CatalogMenu from "../CatalogMenu/CatalogMenu";
import Login from "../Login/Login";
import Registr from "../Registr/Registr";
import Password from "../Password/Password";

function Header({ handleCatalogClick, isModalOpen, handleClose }) {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegistrOpen, setIsModalRegistrOpen] = useState(false);
  const [isModalPasswordOpen, setIsModalPasswordOpen] = useState(false);

  const handlelPasswordClick = () => {
    setIsModalPasswordOpen(true);
    handleLoginClose();
    handlelRegistrClose();
  };

  const handlelPasswordClose = () => {
    setIsModalPasswordOpen(false);
  };

  const handlelRegistrClick = () => {
    setIsModalRegistrOpen(true);
    handleLoginClose();
    handlelPasswordClose();
  };

  const handlelRegistrClose = () => {
    setIsModalRegistrOpen(false);
  };

  const handleLoginClick = () => {
    setIsModalLoginOpen(true);
    handlelRegistrClose();
    handlelPasswordClose();
  };

  const handleLoginClose = () => {
    setIsModalLoginOpen(false);
  };

  useEffect(() => {
    if (isModalLoginOpen || isModalRegistrOpen || isModalPasswordOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalLoginOpen, isModalRegistrOpen, isModalPasswordOpen]);

  return (
    <div className={`header ${isModalOpen ? "modal" : ""}`}>
      {isModalPasswordOpen && (
        <Password handlelPasswordClose={handlelPasswordClose} />
      )}
      {isModalRegistrOpen && (
        <Registr
          handlelRegistrClose={handlelRegistrClose}
          handleLoginClick={handleLoginClick}
        />
      )}
      {isModalLoginOpen && (
        <Login
          handleLoginClose={handleLoginClose}
          handlelRegistrClick={handlelRegistrClick}
          handlelPasswordClick={handlelPasswordClick}
        />
      )}
      <div className="container">
        <div className="header__c">
          <div className="header__c-left">
            <Link className="header__c-logo" to="/">
              <img src={logo} alt="Логотип" />
            </Link>
            <button
              className="header__c-catalog"
              onClick={handleCatalogClick}
              data-open-menu="true"
            >
              <div className="header__c-catalog-text">
                <p className="txt-sank16">Каталог</p>
              </div>

              <div className="header__c-catalog-icon">
                <img src={isModalOpen ? iconCloseBlue : catalog} alt="Меню" />
              </div>
            </button>
          </div>
          <div className="header__c-center">
            <nav className="header__c-menu">
              <Link className="txt-sans20" to="/about">
                О нас
              </Link>
              <Link className="txt-sans20" to="/delivery">
                Доставка и оплата
              </Link>
              <Link className="txt-sans20" to="/contacts">
                Контакты
              </Link>
            </nav>
          </div>
          <div className="header__c-right">
            <div className="header__c-num-box">
              <div className="header__c-num-icon">
                <img src={phone} alt="телефон" />
              </div>
              <p className="txt-sans20_bold">8 (499) 110-07-28</p>
            </div>
            <div className="header__c-options">
              <button className="header__c-option">
                <img src={search} alt="иконка-поиска" />
              </button>
              <Link className="header__c-option" to="/basket">
                <img src={basket} alt="иконка-корзины" />
              </Link>
              <button
                className="header__c-option"
                onClick={handleLoginClick}
                data-open-menu="true"
              >
                <img src={user} alt="иконка-пользователя" />
              </button>
            </div>
          </div>
          <button
            className="header__c-catalog-mob"
            onClick={handleCatalogClick}
            data-open-menu="true"
          >
            <img
              src={isModalOpen ? iconCloseBlue : catalogMob}
              alt="иконка-меню"
            />
          </button>
        </div>
      </div>
      {isModalOpen && <CatalogMenu handleClose={handleClose} />}
    </div>
  );
}

export default Header;
