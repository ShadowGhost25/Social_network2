import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import s from "./settingsprofile.module.css";
import axios from "../../axios";
import { fetchSettings } from "../../redux/slices/settings";
import { Navigate, useNavigate } from "react-router-dom";
const SettingsProfile = () => {
  const { id } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [surName, setSurName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [status, setStatus] = React.useState("");
  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      setLoading(true);
      const fields = {
        id,
        fullName,
        surName,
        email,
        phone,
        status,
      };
      const data = {
        fields,
        id,
      };
      navigate("/profile");
      dispatch(fetchSettings(data));
    } catch (error) {
      alert(error.response.data[0].msg);
    }
  };
  React.useEffect(() => {
    axios
      .get(`/me`)
      .then(({ data }) => {
        setFullName(data.fullName);
        setSurName(data.surName);
        setEmail(data.email);
        setPhone(data.phone);
        setStatus(data.status);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);
  return (
    <>
      <span className={s.text}>Настройки профиля</span>
      <hr className={s.hr} />
      <div className={s.colums}>
        <label className={s.label} htmlFor="fullName">
          Имя
          <input
            className={s.input}
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label className={s.label} htmlFor="surName">
          Фамилия
          <input
            className={s.input}
            type="text"
            name="surName"
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
          />
        </label>
        <label className={s.label} htmlFor="email">
          Почта
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={s.label} htmlFor="phone">
          Телефон
          <input
            className={s.input}
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label className={s.label} htmlFor="status">
          Статус
          <input
            className={s.input}
            type="text"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <div className={s.positionButton}>
          <CustomButton
            click={onSubmit}
            title="Сохранить"
            size="small"
            typeStyle="primary"
          />
        </div>
      </div>
    </>
  );
};

export default SettingsProfile;
