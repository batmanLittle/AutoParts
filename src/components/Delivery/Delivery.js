import "./Delivery.css";

function Delivery() {
  return (
    <div className="delivery">
      <div className="container">
        <div className="delivery__c">
          <div className="delivery__c-block">
            <div className="delivery__c-left">
              <p className="txt-sans60">Способы получения заказа:</p>
            </div>
            <div className="delivery__c-right">
              <ul className="delivery__c-list">
                <li className="delivery__c-item">
                  <p className="txt-sans20">Самовывоз со склада</p>
                </li>
                <li className="delivery__c-item">
                  <p className="txt-sans20">
                    Курьерская доставка по городу и региону
                  </p>
                </li>
                <li className="delivery__c-item">
                  <p className="txt-sans20">
                    Отправка через транспортные компании по всей стране
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="delivery__c-block">
            <div className="delivery__c-left">
              <div className="delivery__c-box">
                <p className="txt-sans16">
                  Ближайший пункт выдачи и время получения заказа в вашем городе
                  может сообщить менеджер во время звонка для подтверждения
                  заказа. Оплата осуществляется наличным или безналичным
                  способом. (Пункт выдачи заказов в городе Москва: ул.
                  Талалихина 41 строение 2 рядом с метро Волгоградский пр.)
                </p>
              </div>
            </div>
            <div className="delivery__c-right">
              <div className="delivery__c-box">
                <p className="txt-sans16">
                  Москва и Московская область: доставка осуществляется на
                  следующий день после её оформления или по желанию клиента.
                  Время доставки с 10 утра до 20 часов вечера, семь дней в
                  неделю. Оплата осуществляется наличными или банковской картой
                  по факту получения.
                </p>
                <div>
                  <p className="txt-sans16">Тарифы доставки:</p>
                  <ul className="delivery__c-list-txt">
                    <li>
                      <p className="txt-sans16">
                        по городу Москва в пределах МКАД 700 рублей (оплата по
                        факту)
                      </p>
                    </li>
                    <li>
                      <p className="txt-sans16">
                        за МКАД 700 руб. +50 руб. за км (доставка оплачивается
                        заранее онлайн, а сам заказ по факту получения)
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="delivery__c-btm">
            <div className="delivery__c-block-btm">
              <div className="delivery__c-left">
                <p className="txt-sans42">Курьерская доставка</p>
              </div>
              <div className="delivery__c-right delivery__c-right-btm">
                <p className="txt-sans18">
                  Общее: Оформив заказ в нашем интернет-магазине, Вы сможете
                  заказать доставку курьером на свой адрес и оплатить товар при
                  получении после его осмотра. В редких случаях оплата
                  производится онлайн до получения, если заказ доставляется
                  через сервисы такси. Допускается проверять внешний вид товара
                  при его получении.
                </p>
                <p className="txt-sans18">
                  Мы гарантируем обмен и возврат запчастей в течении 14 рабочих
                  дней.
                </p>
                <p className="txt-sans18">
                  Сразу после оформления Вами заказа на сайте, наш менеджер
                  свяжется с Вами и согласует дату и место доставки, рассчитает
                  её стоимость и сообщит способ оплаты. В день доставки, курьер
                  заранее позвонит Вам и уточнит возможность получения заказа.
                  Условия доставки через курьера могут отличаться в зависимости
                  от города, где находится филиал компании.
                </p>
              </div>
            </div>
            <div className="delivery__c-block-btm">
              <div className="delivery__c-left">
                <p className="txt-sans42">
                  Отправка через транспортные компании
                </p>
              </div>
              <div className="delivery__c-right delivery__c-right-btm">
                <p className="txt-sans18">
                  Доставка заказов по России осуществляется через разные
                  транспортные компании: ДЕЛОВЫЕ ЛИНИИ, ПЭК, КИТ, ЭНЕРГИЯ или
                  курьерскую службу CDEK и прочие службы доставки. Стоимость
                  доставки и сроки Вы можете самостоятельно уточнить в выбранной
                  Вами транспортной компании. До транспортной компании мы
                  доставим Ваш заказ по стандартному тарифу города, в котором
                  находится филиал компании.
                </p>
                <p className="txt-sans18">
                  Прочие способы доставки рассчитываются индивидуально и зависят
                  от суммы заказа и удалённости покупателя
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
