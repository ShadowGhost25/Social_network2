import s from "./settingspassword.module.css";
const SettingsPassword = () => {
  return (
    <>
      <span className={s.text}>Изменить пароль</span>
      <hr className={s.hr} />
      <form className={s.colums}>
        <label className={s.label} htmlFor="fullName">
          Новый пароль
          <input
            // onChange={(e) => setTitle(e.target.value)}
            className={s.input}
            type="text"
            name="fullName"
            // value={title}
          />
        </label>
        <label className={s.label} htmlFor="surName">
          Повторить новый пароль
          <input
            className={s.input}
            type="text"
            name="surName"
            // value={data.surName}
          />
        </label>
        <button className={s.button}>Сохранить</button>
      </form>
    </>
  );
};

export default SettingsPassword;
