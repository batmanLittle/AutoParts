import "./Сooperation.css";
import iconDiscount from "../../images/icon-discount.svg";
import iconDocument from "../../images/icon-document.svg";
import iconWarehouse from "../../images/icon-warehouse.svg";
import iconGuarantee from "../../images/icon-guarantee.svg";
import iconPayment from "../../images/icon-payment.svg";
import iconDelivery from "../../images/icon-delivery.svg";
import Button from "../Button/Button";
import arrow from "../../images/icon-arrow.svg";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";

function Сooperation() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Введите ваше имя")
      .min(2, "Имя должно содержать хотя бы 2 символа"),
    phone: Yup.string()
      .required("Введите ваш телефон")
      .matches(/^\+7\d{10}$/, "Телефон должен быть в формате +7XXXXXXXXXX"),
    email: Yup.string()
      .email("Неверный формат email")
      .required("Введите email"),
  });

  const [buttonText, setButtonText] = useState(
    "отправить заявку на сотрудничество"
  );

  useEffect(() => {
    const updateButtonText = () => {
      if (window.innerWidth < 768) {
        setButtonText("Отправить заявку");
      } else {
        setButtonText("отправить заявку на сотрудничество");
      }
    };

    // Инициализация текста кнопки
    updateButtonText();

    // Обновляем текст при изменении ширины окна
    window.addEventListener("resize", updateButtonText);

    // Очистка события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", updateButtonText);
    };
  }, []);

  return (
    <div className="cooperation">
      <div className="container">
        <div className="cooperation__c">
          <div className="cooperation__c-top">
            <p className="txt-sans60">Преимущества сотрудничества с нами</p>
            <p className="txt-sans32">
              Становясь нашим оптовым клиентом, вы получаете множество
              уникальных преимуществ, которые помогут вам успешно развивать ваш
              бизнес.
            </p>
          </div>
          <div className="cooperation__c-center">
            <p className="txt-sans48">Мы готовы предложить:</p>
            <ul className="cooperation__list">
              <li className="cooperation__item">
                <div className="cooperation__item-top">
                  <img alt="скидка" src={iconDiscount} />
                  <p className="txt-sans32">Система бонусов и скидок</p>
                </div>
                <p className="txt-sans24">
                  Мы предлагаем гибкую систему скидок и бонусов для наших
                  партнеров, что позволяет значительно снизить ваши затраты и
                  увеличить маржу на продажу запчастей.
                </p>
              </li>
              <li className="cooperation__item">
                <div className="cooperation__item-top">
                  <img alt="скидка" src={iconDocument} />
                  <p className="txt-sans32">Удобный документооборот</p>
                </div>
                <p className="txt-sans24">
                  Мы обеспечиваем простой и прозрачный документооборот, что
                  позволяет вам сосредоточиться на продажах и обслуживании
                  клиентов, а не на бумажной работе.
                </p>
              </li>
              <li className="cooperation__item">
                <div className="cooperation__item-top">
                  <img alt="скидка" src={iconWarehouse} />
                  <p className="txt-sans32">Собственные складские мощности</p>
                </div>
                <p className="txt-sans24">
                  Наличие собственных складов гарантирует быструю обработку
                  заказов и минимальные сроки доставки. Вы всегда можете быть
                  уверены в наличии необходимых запчастей.
                </p>
              </li>
              <li className="cooperation__item">
                <div className="cooperation__item-top">
                  <img alt="скидка" src={iconGuarantee} />
                  <p className="txt-sans32">Гарантия на продукцию</p>
                </div>
                <p className="txt-sans24">
                  Мы предоставляем гарантию на все наши запчасти, что повышает
                  доверие ваших клиентов и способствует укреплению вашей
                  репутации на рынке.
                </p>
              </li>
              <li className="cooperation__item">
                <div className="cooperation__item-top">
                  <img alt="скидка" src={iconPayment} />
                  <p className="txt-sans32">Оплата по НДС</p>
                </div>
                <p className="txt-sans24">
                  Мы работаем с юридическими лицами и предлагаем возможность
                  оплаты по НДС, что делает сотрудничество с нами выгодным и
                  удобным для вашего бизнеса.
                </p>
              </li>
              <li className="cooperation__item">
                <div className="cooperation__item-top">
                  <img alt="скидка" src={iconDelivery} />
                  <p className="txt-sans32">Доставка по России и СНГ</p>
                </div>
                <p className="txt-sans24">
                  Мы обеспечиваем быструю и надежную доставку по всей территории
                  России и СНГ, что позволяет вам оперативно удовлетворять
                  потребности ваших клиентов.
                </p>
              </li>
            </ul>
          </div>
          <div className="cooperation__c-btm">
            <Formik
              initialValues={{ name: "", phone: "", email: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form className="cooperation__form">
                  <p className="txt-sans48">Начать сотрудничать уже сегодня</p>
                  <div className="cooperation__form-box">
                    <div className="cooperation__form-box">
                      <div className="cooperation__label">
                        <Field
                          className="cooperation__input txt-sans24"
                          placeholder="Ваше Имя"
                          name="name"
                          type="text"
                        />
                        <ErrorMessage
                          name="name"
                          component="span"
                          className="error-message txt-sans14"
                        />
                      </div>
                      <div className="cooperation__label">
                        <Field
                          className="cooperation__input txt-sans24"
                          placeholder="Ваш Телефон"
                          type="tel"
                          name="phone"
                        />
                        <ErrorMessage
                          name="phone"
                          component="span"
                          className="error-message txt-sans14"
                        />
                      </div>
                      <div className="cooperation__label">
                        <Field
                          className="cooperation__input txt-sans24"
                          placeholder="Ваш E-mail"
                          type="email"
                          name="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error-message txt-sans14"
                        />
                      </div>
                    </div>
                    <p className="txt-sans20">
                      Отправляя форму, вы подтверждаете свое согласие на
                      обработку персональных данных.
                    </p>
                  </div>
                  <div className="cooperation__btn">
                    <Button
                      src={arrow}
                      text={buttonText}
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Сooperation;
