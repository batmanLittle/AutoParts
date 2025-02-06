import "./ProductPage.css";
import ProductDetails from "../ProductDetails/ProductDetails";
import Popular from "../Popular/Popular";

function ProductPage({ handleCatalogClick }) {
  return (
    <div className="product-page">
      <ProductDetails />
      <Popular
        text={"Популярные товары"}
        handleCatalogClick={handleCatalogClick}
        btnText={"в каталог"}
      />
    </div>
  );
}

export default ProductPage;
