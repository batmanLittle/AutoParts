import "./NavMenu.css";
import { useParams, NavLink } from "react-router-dom";

function NavMenu({ handleCatalogClick }) {
  // Объект с отображаемыми строками для категорий
  const categoryNames = {
    parts: "Запчасти для ТО",
    body_and_components: "Кузов и составляющие",
    engine: "Двигатель",
    suspension: "Подвеска",
    lighting: "Освещение",
    cooling_and_heating: "Охлаждение, отопление",
  };

  const { category, subcategory } = useParams();

  return (
    <nav className="nav-menu">
      <div className="container">
        <div className="nav-menu__c">
          <button
            onClick={handleCatalogClick}
            className="txt-sans14"
            data-open-menu="true"
          >
            Каталог
          </button>
          <p className="txt-sans14">/</p>

          {category && (
            <>
              <NavLink to={`/category/${category}`} className="txt-sans14" end>
                {categoryNames[category] || category}{" "}
              </NavLink>
            </>
          )}

          {subcategory && (
            <>
              <p className="txt-sans14">/</p>
              <NavLink
                to={`/category/${category}/${subcategory}`}
                className="txt-sans14"
                end
              >
                {subcategory.replace("_", " ")}
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
