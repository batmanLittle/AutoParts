import "./Registr.css";
import DynamicForm from "../DynamicForm/DynamicForm";
import * as Yup from "yup";

function Registr({ handlelRegistrClose, handleLoginClick }) {
  const handleSubmit = (values) => {
    console.log("Login Form submitted", values);
  };

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "Введите ваш е-mail",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Придумайте пароль",
    },
  ];

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Некорректный email")
      .required("Email обязателен"),
    password: Yup.string()
      .min(6, "Пароль должен содержать минимум 6 символов")
      .max(20, "Пароль не может быть длиннее 20 символов")
      .required("Пароль обязателен"),
  });

  return (
    <div className="registr">
      <DynamicForm
        title={"Регистрация на сайте"}
        txtSumbit={"зарегистрироваться"}
        handleModalClose={handlelRegistrClose}
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        txtRight={"Войти"}
        btnRight={handleLoginClick}
      />
    </div>
  );
}

export default Registr;
