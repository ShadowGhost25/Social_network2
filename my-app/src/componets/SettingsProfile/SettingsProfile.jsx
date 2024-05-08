import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import s from "./settingsprofile.module.css";
import axios from "../../axios";
const SettingsProfile = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [surName, setSurName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [status, setStatus] = React.useState("");
  
  const onSubmit = async () => {
    try {
      setLoading(true);
      const fields = {
        fullName,
        surName,
        email,
        phone,
        status,
      };
      await axios.patch(`/settings`, fields);
    } catch (error) {
      alert(error.response.data[0].msg);
    }
  };
  React.useEffect(() => {
    axios.get(`/me`).then(({ data }) => {
      setFullName(data.fullName);
      setSurName(data.surName);
      setEmail(data.email);
      setPhone(data.phone);
      setStatus(data.status);
    }).catch((error) =>{
      console.warn(error)
    })
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
            onChange={(e) => setSurName(e.target.value)}
          />
        </label>
        <label className={s.label} htmlFor="phone">
          Телефон
          <input
            className={s.input}
            type="number"
            name="phone"
            value={phone}
            onChange={(e) => setSurName(e.target.value)}
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
          <CustomButton click={onSubmit} title="Сохранить" size="small" typeStyle="primary" />
        </div>
      </div>
    </>
  );
};

export default SettingsProfile;
