import s from "./register.module.css";
import logo from "../../componets/Header/img/Logo.png";
import i from "./img/i.png";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchRegister } from "../../redux/slices/register";
import { selectIsAuth } from "../../redux/slices/login";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = (props) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onClickRegister = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (data.payload.response === undefined) {
      window.localStorage.setItem("token", data.payload.token);
      window.location.reload();
    } else {
      toast.error(data.payload.response.data[0].msg, {
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
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.login}>
      <div className={s.loginHistory}>
        <div className={s.test}>
          <img className={s.logo} src={logo} alt="no logo" />
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
        <div className={s.formLogin}>
          <div>
            <form onSubmit={handleSubmit(onClickRegister)}>
              <h2>Регистрация</h2>
              <input
                {...register("fullName", { required: "Укажите Имя" })}
                className={`${s.input} ${errors.fullName && s.inputWithError}`}
                type="text"
                placeholder={errors.fullName ? errors.fullName.message : "Имя"}
              />

              <br />
              <input
                {...register("surName", { required: "Укажите Фамилию" })}
                className={`${s.input} ${errors.surName && s.inputWithError}`}
                type="text"
                placeholder={
                  errors.surName ? errors.surName.message : "Фамилия"
                }
              />
              <br />
              <input
                {...register("Login", { required: "Укажите Логин" })}
                className={`${s.input} ${errors.Login && s.inputWithError}`}
                type="text"
                placeholder={errors.Login ? errors.Login.message : "Логин"}
              />
              <br />
              <input
                {...register("email", { required: "Укажите Почту" })}
                className={`${s.input} ${errors.email && s.inputWithError}`}
                type="email"
                placeholder={errors.email ? errors.email.message : "Почта"}
              />
              <br />
              <input
                {...register("phone", { required: "Укажите Телефон" })}
                className={`${s.input} ${errors.phone && s.inputWithError}`}
                type="phone"
                placeholder={errors.phone ? errors.phone.message : "Телефон"}
              />
              <br />
              <input
                {...register("password", { required: "Укажите Пароль" })}
                className={`${s.input} ${errors.password && s.inputWithError}`}
                type="password"
                placeholder={
                  errors.password ? errors.password.message : "Пароль"
                }
              />
              <br />
              <br />
              <button type="submit" className={s.buttonRegister}>
                Войти
              </button>
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
