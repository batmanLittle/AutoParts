import "./About.css";
import imgBig from "../../images/image-about.png";
import img1 from "../../images/image-about1.png";
import img2 from "../../images/image-about2.png";
import img3 from "../../images/image-about3.png";
import img4 from "../../images/image-about4.png";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about__c">
          <div className="about__c-block about__top">
            <div className="about__left">
              <ul className="about__top-list">
                <li className="about__top-item">
                  <p className="txt-sans20_bold">JORDEN</p>
                  <p className="txt-sans18">
                    Сертификат международного образца ISS 9001. Продукция
                    одобрена и российским ГОСТ РОСТЕСТ
                  </p>
                </li>
                <li className="about__top-item">
                  <p className="txt-sans20_bold">ИП</p>
                  <p className="txt-sans18">
                    Парамзин Дмитрий Николаевич ИНН 682600103175
                  </p>
                </li>
                <li className="about__top-item">
                  <p className="txt-sans20_bold">ОГРНИП</p>
                  <p className="txt-sans18">317682000042486</p>
                </li>
                <li className="about__top-item">
                  <p className="txt-sans20_bold">ОКПО</p>
                  <p className="txt-sans18">0124347975</p>
                </li>
                <li className="about__top-item">
                  <p className="txt-sans20_bold">р/с</p>
                  <p className="txt-sans18">
                    40802810600000069441 в ПАО «ПРОМСВЯЗЬБАНК» г. Москва
                  </p>
                </li>
                <li className="about__top-item">
                  <p className="txt-sans20_bold">к/с</p>
                  <p className="txt-sans18">30101810400000000555</p>
                </li>
                <li className="about__top-item">
                  <p className="txt-sans20_bold">БИК</p>
                  <p className="txt-sans18">044525555</p>
                </li>
              </ul>
            </div>
            <div className="about__right">
              <div className="about__right-box">
                <div className="about__right-info">
                  <p className="txt-sans60">О нас</p>
                  <div className="about__right-text">
                    <p className="txt-sans20">
                      Интернет-магазин «ARENA PARTS ЗАПЧАСТИ 24/7» создан
                      специально для того, что бы Вы смогли удобно и без лишних
                      хлопот найти нужные запчасти для ремонта своего
                      автомобиля. Мы заботимся о том, чтобы ассортимент магазина
                      был всегда актуальным, цены доступными, а сервис лучшим.{" "}
                    </p>
                    <p className="txt-sans20">
                      Для всех постоянных клиентов мы делаем скидки, а для
                      оптовых покупателей у нас особые условия сотрудничества.
                    </p>
                    <p className="txt-sans20">
                      Зная весь процесс подбора запчастей для ремонта Вашего
                      автомобиля, мы предлагаем большой выбор кузовных запчастей
                      в наличии на наших складах, все виды оплат, удобное
                      получение заказа, доставку по всей стране, быстрый поиск
                      на сайте и помощь менеджера.
                    </p>
                  </div>
                </div>
                <div className="about__right-img">
                  <img src={imgBig} alt="фото компании" />
                </div>
              </div>
            </div>
          </div>
          <div className="about__c-block-btm">
            <div className="about__c-block">
              <div className="about__left">
                <p className="txt-sans42">Мы рады предложить вам:</p>
              </div>
              <div className="about__right">
                <ul className="about__btm-list">
                  <li className="about__btm-item">
                    <p className="txt-sans20">
                      Отличное качество за разумные деньги
                    </p>
                  </li>
                  <li className="about__btm-item">
                    <p className="txt-sans20">100% ГАРАНТИЮ НА ЗАПЧАСТИ</p>
                  </li>
                  <li className="about__btm-item">
                    <p className="txt-sans20">
                      Обмен и возврат в течении 14 рабочих дней
                    </p>
                  </li>
                  <li className="about__btm-item border">
                    <p className="txt-sans20">
                      Онлайн покупку, быструю доставку, лучшую цену и сервис
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="about__photo-gallery">
              <div>
                <img alt="фото компании" src={img1} />
              </div>
              <div>
                <img alt="фото компании" src={img2} />
              </div>
              <div>
                <img alt="фото компании" src={img3} />
              </div>
              <div>
                <img alt="фото компании" src={img4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
