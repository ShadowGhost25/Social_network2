import s from "./login.module.css";
import logo from "../../componets/Header/img/Logo.png";
import i from "./img/i.png";
import { Link, Navigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchLogin, selectIsAuth } from "../../redux/slices/login";
const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchLogin(values));
    if (!data.payload) {
        alert('Неудалось авторизоваться')
    }    
    if (data.payload) {
        window.localStorage.setItem('token', data.payload.token)
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Авторизация</h2>
              <input
                {...register("email", { required: "Укажите почту" })}
                className={s.input}
                type="email"
                placeholder="Почта"
              />
              <br />
              <input
                {...register("password", { required: "Укажите пароль" })}
                className={s.input}
                type="password"
                placeholder="Пароль"
              />
              <br />
              <button type="submit" className={s.buttonLogin}>
                Войти
              </button>
              <div>
                <Link className={s.register} to="/register">
                  Зарегистрироваться
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
