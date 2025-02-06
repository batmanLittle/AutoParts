import "./DynamicForm.css";
import iconClose from "../../images/icon-close.svg";
import Button from "../Button/Button";
import arrow from "../../images/icon-arrow.svg";
import { Formik, Field, Form, ErrorMessage } from "formik";

function DynamicForm({
  handleModalClose,
  fields,
  validationSchema,
  onSubmit,
  title,
  txtSumbit,
  txtLeft,
  txtRight,
  btnLeft,
  btnRight,
}) {
  return (
    <div className="dynamic-form">
      <div className="dynamic-form__wrapper">
        <div className="dynamic-form__c">
          <button className="dynamic-form__c-close" onClick={handleModalClose}>
            <img alt="иконка-закрытия" src={iconClose} />
          </button>
          <Formik
            initialValues={fields.reduce((acc, field) => {
              acc[field.name] = "";
              return acc;
            }, {})}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              onSubmit(values);
              resetForm();
              // handleModalClose();
            }}
          >
            <Form className="dynamic-form__block" noValidate>
              <p className="txt-sans42">{title}</p>
              <div className="dynamic-form__box">
                <div className="dynamic-form__inputs">
                  {fields.map((field, index) => (
                    <div className="dynamic-form__label" key={index}>
                      <Field
                        name={field.name}
                        type={field.type}
                        className="dynamic-form__input txt-sans16"
                        placeholder={field.placeholder}
                      />
                      <ErrorMessage
                        name={field.name}
                        component="span"
                        className="error-message"
                      />
                    </div>
                  ))}
                </div>
                <Button src={arrow} text={txtSumbit} type="submit" />
              </div>
              <div className="dynamic-form__btm">
                {btnLeft && (
                  <button
                    type="button"
                    onClick={btnLeft}
                    className="txt-sans16"
                  >
                    {txtLeft}
                  </button>
                )}
                <button
                  type="button"
                  onClick={btnRight}
                  className={`txt-sans18_bold blue ${
                    !btnLeft ? "center-button" : ""
                  }`}
                >
                  {txtRight}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default DynamicForm;
