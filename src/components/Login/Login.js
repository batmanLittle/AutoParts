import "./Login.css";
import DynamicForm from "../DynamicForm/DynamicForm";
import * as Yup from "yup";

function Login({
  handleLoginClose,
  handlelRegistrClick,
  handlelPasswordClick,
}) {
  const handleSubmit = (values) => {
    console.log("Login Form submitted", values);
  };

  const fields = [
    {
      name: "login",
      type: "text",
      placeholder: "Логин",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Пароль",
    },
  ];

  const validationSchema = Yup.object({
    login: Yup.string()
      .min(5, "Логин должен содержать минимум 5 символов")
      .max(20, "Логин не может быть длиннее 20 символов")
      .required("Логин обязателен"),
    password: Yup.string()
      .min(6, "Пароль должен содержать минимум 6 символов")
      .max(20, "Пароль не может быть длиннее 20 символов")
      .required("Пароль обязателен"),
  });
  return (
    <div className="login">
      <DynamicForm
        title={"Вход в личный кабинет"}
        txtSumbit={"войти"}
        txtLeft={"Забыли пароль?"}
        txtRight={"Регистрация"}
        handleModalClose={handleLoginClose}
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        btnRight={handlelRegistrClick}
        btnLeft={handlelPasswordClick}
      />
    </div>
  );
}

export default Login;
