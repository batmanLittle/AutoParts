import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Brands from "../Brands/Brands";
import BrandInfo from "../BrandInfo/BrandInfo";
import Popular from "../Popular/Popular";
import Support from "../Support/Support";
import Footer from "../Footer/Footer";
import ProductPage from "../ProductPage/ProductPage";
import React, { useState, useEffect } from "react";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Delivery from "../Delivery/Delivery";
import Basket from "../Basket/Basket";
import Categories from "../Categories/Categories";
import NavMenu from "../NavMenu/NavMenu";
import ProductList from "../ProductList/ProductList";
import Cooperation from "../Сooperation/Сooperation";
import PartSelect from "../PartSelect/PartSelect";
import { BasketProvider } from "../../contexts/BasketContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCatalogClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/"]');

    links.forEach((link) => {
      link.addEventListener("click", () => {
        window.scrollTo(0, 0);
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <BasketProvider>
      <div className="app">
        <Header
          handleCatalogClick={handleCatalogClick}
          isModalOpen={isModalOpen}
          handleClose={handleClose}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Promo handleCatalogClick={handleCatalogClick} />
                <Brands />
                <PartSelect handleCatalogClick={handleCatalogClick} />
                <BrandInfo />
                <Popular
                  text={"Популярные товары"}
                  handleCatalogClick={handleCatalogClick}
                  btnText={"в каталог"}
                />
                <Support />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <ProductPage handleCatalogClick={handleCatalogClick} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <Contacts />
              </>
            }
          />
          <Route
            path="/delivery"
            element={
              <>
                <Delivery />
              </>
            }
          />
          <Route
            path="/basket"
            element={
              <>
                <Basket handleCatalogClick={handleCatalogClick} />
                <Popular
                  text={"Может пригодиться"}
                  handleCatalogClick={handleCatalogClick}
                  btnText={"в каталог"}
                />
              </>
            }
          />
          <Route
            path="/category/:category/"
            element={
              <>
                <NavMenu handleCatalogClick={handleCatalogClick} />
                <Categories />
                <Popular
                  text={"Популярное"}
                  handleCatalogClick={handleCatalogClick}
                  btnText={"в каталог"}
                />
              </>
            }
          />
          <Route
            path="/category/:category/:subcategory"
            element={
              <>
                <NavMenu handleCatalogClick={handleCatalogClick} />
                <ProductList />
              </>
            }
          />
          <Route
            path="/cooperation"
            element={
              <>
                <Cooperation />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BasketProvider>
  );
}

export default App;
