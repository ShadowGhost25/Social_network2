import s from "./register.module.css";
import logo from "../../componets/Header/img/Logo.png";
import i from "./img/i.png";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchRegister } from "../../redux/slices/register";
import { selectIsAuth } from "../../redux/slices/login";
import React from "react";
const Register = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: "Ilya",
      surName: "Vavilin",
      login: "Shadow",
      email: "ilyushavavi@gmail.com",
      phone: "+79968011887",
      password: "12345",
    },
    mode: "onChange",
  });

  const onClickRegister = async (values) => {
    const data = await dispatch(fetchRegister(values));
    console.log('values => ', values)
    if (!data.payload) {
      alert("Неудалось зарегистрироваться");
    }
    if (data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.login}>
      <div className={s.loginHistory}>
        <div className={s.test}>
          <img className={s.logo} src={logo} alt="no logo" />
          <div>
            <h1>Недавние входы</h1>
            <p>Нажмите на изображение или добавьте аккаунты.</p>
            <Link to="/">
              <div className={s.blogAuth}>
                <img className={s.imgI} src={i} alt="" />
                <p className={s.name}>Илья</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={s.formLogin}>
          <div>
            <form onSubmit={handleSubmit(onClickRegister)}>
              <h2>Регистрация</h2>
              <input
                {...register("fullName", { required: "Укажите Имя" })}
                className={s.input}
                type="text"
                placeholder="Имя"
              />
              <br />
              <input
                {...register("Surname", { required: "Укажите Имя" })}
                className={s.input}
                type="text"
                placeholder="Фамилия"
              /> */}
              {/* <br />
              <input
                {...register("Login", { required: "Укажите Имя" })}
                className={s.input}
                type="text"
                placeholder="Логин"
              /> */}
              <br />
              <input
                {...register("email", { required: "Укажите Имя" })}
                className={s.input}
                type="text"
                placeholder="Почта"
              />
              {/* <br />
              <input
                {...register("phone", { required: "Укажите Имя" })}
                className={s.input}
                type="text"
                placeholder="Телефон"
              /> */}
              <br />
              <input
                {...register("password", { required: "Укажите Имя" })}
                className={s.input}
                type="password"
                placeholder="Пароль"
              />
              <br />
              <br />
              <button type="submit" className={s.buttonRegister}>Войти</button>
              <div>
                <Link className={s.autho} to="/login">
                  Авторизоваться
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
