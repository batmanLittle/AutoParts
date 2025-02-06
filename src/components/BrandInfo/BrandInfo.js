import "./BrandInfo.css";
import iconSaving from "../../images/icon-saving.svg";
import iconSelect from "../../images/icon-select.svg";
import iconConsult from "../../images/icon-consultation.svg";
import iconDelivery from "../../images/icon-delevery-black.svg";

function BrandInfo() {
  return (
    <div className="brand-info">
      <div className="container">
        <div className="brand-info__c">
          <div className="brand-info__c-box">
            <p className="txt-sans60">
              Официальный представитель JORDEN бренда на территории России
            </p>
            <div className="brand-info__c-mob-divider"></div>
            <p className="txt-sans20">
              Компания осуществляет прямые поставки с фабрик Китая и Тайваня
              автозапчастей на такие марки как Kia Hyundai Volkswagen Skoda
              Toyota Mazda Nissan BMW Ford Lada (ВАЗ) Renault Chevrolet
              SsangYong Peugeot. Ведётся полный контроль качества на всех этапах
              производства. Запчасти оперативно доставляются на склады в Москве
              благодаря грамотно отлаженной логистике
            </p>
          </div>
          <ul className="brand-info__c-list">
            <li className="brand-info__c-item">
              <div className="brand-info__c-item-top">
                <div className="brand-info__c-icon">
                  <img alt="экономия" src={iconSaving} />
                </div>
                <p className="txt-sans30_bold">Экономия</p>
              </div>
              <div className="brand-info__c-item-divider"></div>
              <div className="brand-info__c-item-btm">
                <p className="txt-sans20">
                  Cущественно сэкономить бюджет на покупке кузовных запчастей
                </p>
              </div>
            </li>
            <li className="brand-info__c-item">
              <div className="brand-info__c-item-top">
                <div className="brand-info__c-icon">
                  <img alt="экономия" src={iconSelect} />
                </div>
                <p className="txt-sans30_bold">Подбор</p>
              </div>
              <div className="brand-info__c-item-divider"></div>
              <div className="brand-info__c-item-btm">
                <p className="txt-sans20">
                  Подобрать оригинальные и неоригинальные запчасти для
                  автомобилей
                </p>
              </div>
            </li>
            <li className="brand-info__c-item">
              <div className="brand-info__c-item-top">
                <div className="brand-info__c-icon">
                  <img alt="экономия" src={iconConsult} />
                </div>
                <p className="txt-sans30_bold">Консультация</p>
              </div>
              <div className="brand-info__c-item-divider"></div>
              <div className="brand-info__c-item-btm">
                <p className="txt-sans20">
                  Получить грамотную консультацию специалиста
                </p>
              </div>
            </li>
            <li className="brand-info__c-item">
              <div className="brand-info__c-item-top">
                <div className="brand-info__c-icon">
                  <img alt="экономия" src={iconDelivery} />
                </div>
                <p className="txt-sans30_bold">Доставка</p>
              </div>
              <div className="brand-info__c-item-divider"></div>
              <div className="brand-info__c-item-btm">
                <p className="txt-sans20">
                  Забрать запчасти в одном из офисов или заказать доставку в
                  удобное для Вас место
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BrandInfo;
