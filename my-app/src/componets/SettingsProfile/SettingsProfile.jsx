import s from "./settingsprofile.module.css";
const SettingsProfile = () => {
  return (
    <>
      <span className={s.text}>Настройки профиля</span>
      <hr className={s.hr} />
      <form className={s.colums}>
        <label className={s.label} htmlFor="fullName">
          Имя
          <input
            // onChange={(e) => setTitle(e.target.value)}
            className={s.input}
            type="text"
            name="fullName"
            // value={title}
          />
        </label>
        <label className={s.label} htmlFor="surName">
          Фамилия
          <input
            className={s.input}
            type="text"
            name="surName"
            // value={data.surName}
          />
        </label>
        <label className={s.label} htmlFor="email">
          Почта
          <input
            className={s.input}
            type="text"
            name="email"
            // value={data.email}
          />
        </label>
        <label className={s.label} htmlFor="phone">
          Телефон
          <input
            className={s.input}
            type="text"
            name="phone"
            // value={data.phone}
          />
        </label>
        <label className={s.label} htmlFor="status">
          Статус
          <input
            className={s.input}
            type="text"
            name="status"
            // value={data.status}
          />
        </label>
        <button className={s.button}>Сохранить</button>
      </form>
    </>
  );
};

export default SettingsProfile;
