import "./Categories.css";
import { Link, useParams } from "react-router-dom";
import {
  carBodyParts,
  doorsAndAccessories,
  bodyTrimAndAccents,
  supportSystems,
} from "../../utils/constants";

function Categories() {
  const { category } = useParams();

  const categoryNames = {
    parts: "Запчасти для ТО",
    body_and_components: "Кузов и составляющие",
    engine: "Двигатель",
    suspension: "Подвеска",
    lighting: "Освещение",
    cooling_and_heating: "Охлаждение, отопление",
  };

  const subcategories = {
    parts: carBodyParts,
    body_and_components: [
      ...carBodyParts,
      ...doorsAndAccessories,
      ...bodyTrimAndAccents,
      ...supportSystems,
    ],
    engine: [...carBodyParts, ...bodyTrimAndAccents],
    suspension: [
      ...doorsAndAccessories,
      ...bodyTrimAndAccents,
      ...supportSystems,
    ],
    lighting: [...doorsAndAccessories, ...bodyTrimAndAccents, ...carBodyParts],
    cooling_and_heating: [...doorsAndAccessories, ...carBodyParts],
  };

  const selectedSubcategories = subcategories[category];

  return (
    <div className="categories">
      <div className="container">
        <div className="categories__c">
          <div className="categories__c-title">
            <p className="txt-sans60">{categoryNames[category]}</p>
          </div>
          <div className="categories__list">
            {selectedSubcategories.map((subcategory, index) => (
              <Link
                to={`/category/${category}/${subcategory.name}`}
                key={index}
                className="categories__item"
              >
                <img alt={subcategory.name} src={subcategory.image} />
                <p className="txt-sans20_bold">{subcategory.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
