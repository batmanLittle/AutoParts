import "./Password.css";
import DynamicForm from "../DynamicForm/DynamicForm";
import * as Yup from "yup";

function Password({ handlelPasswordClose }) {
  const handleSubmit = (values) => {
    console.log("Login Form submitted", values);
  };

  const fields = [
    {
      name: "oldPassword",
      type: "password",
      placeholder: "Старый пароль",
    },
    {
      name: "newPassword",
      type: "password",
      placeholder: "Новый пароль",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Повторите новый пароль",
    },
  ];

  const validationSchema = Yup.object({
    oldPassword: Yup.string()
      .min(6, "Старый пароль должен содержать минимум 6 символов")
      .max(20, "Старый пароль не может быть длиннее 20 символов")
      .required("Старый пароль обязателен"),

    newPassword: Yup.string()
      .min(6, "Новый пароль должен содержать минимум 6 символов")
      .max(20, "Новый пароль не может быть длиннее 20 символов")
      .required("Новый пароль обязателен"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Пароли должны совпадать") // Проверка, что новый и подтвержденный пароли совпадают
      .required("Повторите новый пароль"),
  });

  return (
    <div className="password">
      <DynamicForm
        title={"Изменить пароль"}
        txtSumbit={"сохранить"}
        handleModalClose={handlelPasswordClose}
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Password;
