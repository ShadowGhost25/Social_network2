import s from "./login.module.css";
import logo from "../../componets/Header/img/Logo.png";
import i from "./img/i.png";
import { Link, Navigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  fetchAuthMe,
  fetchLogin,
  selectIsAuth,
} from "../../redux/slices/login";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchLogin(values));
    if (!data.payload) {
      toast.error("Не удалось авторизоваться", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    if (data.payload) {
      window.localStorage.setItem("token", data.payload.token);
      dispatch(fetchAuthMe());
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
            <div className={s.display}>
              <Link to="/">
                <div className={s.blogAuth}>
                  <img className={s.imgI} src={i} alt="no img" />
                  <p className={s.name}>Илья</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={s.formLogin}>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Авторизация</h2>
              <input
                {...register("email", { required: "Укажите почту" })}
                className={`${s.input} ${errors.password && s.inputWithError}`}
                type="email"
                placeholder={errors.email ? errors.email.message : "Почта"}
              />
              <br />
              <input
                {...register("password", { required: "Укажите пароль" })}
                className={`${s.input} ${errors.email && s.inputWithError}`}
                type="password"
                placeholder={
                  errors.password ? errors.password.message : "Пароль"
                }
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
