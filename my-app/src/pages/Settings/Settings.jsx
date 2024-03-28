import Header from "../../componets/Header/Header";
import s from "./settings.module.css";
import { buttonSettings } from "../../Route/route";
import { useSelector } from "react-redux";
import Loading from "../../componets/Loading/Loading";
const Settings = () => {
  const { data, status } = useSelector((state) => state.login);
  const isSettingsLoading = status === "loaded";
  console.log(data);
  return (
    <>
      {!isSettingsLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className={s.main}>
            <div className={s.block1}>
              {buttonSettings.map(({ title }) => {
                return (
                  <button key={title} className={s.buttonSettings}>
                    {title}
                  </button>
                );
              })}
            </div>
            <div className={s.block2}>
              <span className={s.text}>Настройки профиля</span>
              <hr className={s.hr} />
                <form className={s.colums}>
                  <label className={s.label} htmlFor="fullName">
                    Имя
                    <input
                      className={s.input}
                      type="text"
                      name="fullName"
                      value={data.fullName}
                    />
                  </label>
                  <label className={s.label} htmlFor="surName">
                    Фамилия
                    <input
                      className={s.input}
                      type="text"
                      name="surName"
                      value={data.surName}
                    />
                  </label>
                  <label className={s.label} htmlFor="email">
                    Почта
                    <input
                      className={s.input}
                      type="text"
                      name="email"
                      value={data.email}
                    />
                  </label>
                  <label className={s.label} htmlFor="phone">
                    Телефон
                    <input
                      className={s.input}
                      type="text"
                      name="phone"
                      value={data.phone}
                    />
                  </label>
                  <label className={s.label} htmlFor="status">
                    Статус
                    <input
                      className={s.input}
                      type="text"
                      name="status"
                      value={data.status}
                    />
                  </label>
                </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Settings;
