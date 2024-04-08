import CustomButton from "../CustomButton/CustomButton";
import s from "./settingsdelete.module.css";
const SettingsDelete = () => {
  return (
    <>
      <span className={s.text}>Удалить аккаунт</span>
      <hr className={s.hr} />
      <form className={s.colums}>
        <label className={s.label} htmlFor="fullName">
          Почта
          <input
            // onChange={(e) => setTitle(e.target.value)}
            className={s.input}
            type="text"
            name="fullName"
            // value={title}
          />
        </label>
        <label className={s.label} htmlFor="surName">
          Пароль
          <input
            className={s.input}
            type="text"
            name="surName"
            // value={data.surName}
          />
        </label>
        <div className={s.positionButton}>
          <CustomButton title="Удалить" typeStyle="primary" size="small"/>
        </div>
      </form>
    </>
  );
};

export default SettingsDelete;
