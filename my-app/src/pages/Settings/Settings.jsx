import Header from "../../componets/Header/Header";
import s from "./settings.module.css";
import { buttonSettings } from "../../Route/route";
import { useSelector } from "react-redux";
import Loading from "../../componets/Loading/Loading";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SettingsProfile from "../../componets/SettingsProfile/SettingsProfile";
import SettingsNotifications from "../../componets/SettingsNotifications/SettingsNotifications";
import SettingsFriends from "../../componets/SettingsFriends/SettingsFriends";
import { fetchAuthMe, selectIsAuth } from "../../redux/slices/login";
import SettingsPassword from "../../componets/SettingsPassword/SettingsPassword";
import SettingsDelete from "../../componets/SettingsDelete/SettingsDelete";
const Settings = () => {
  const { data, status } = useSelector((state) => state.login);
  const urlSite = window.location.pathname;
  const isAuth = useSelector(selectIsAuth);
  const isSettingsLoading = status === "loaded";
  const navigate = useNavigate();
  const test = (event) => {
    const nameSettings = event.target.name;
    if (nameSettings === "Уведомления") {
      navigate("/settings/notifications");
    } else if (nameSettings === "Запросы в друзья") {
      navigate("/settings/friends");
    } else if (nameSettings === "Изменить пароль") {
      navigate("/settings/password");
    } else if (nameSettings === "Удалить аккаунт") {
      navigate("/settings/delete");
    } else if (nameSettings === "Настройки профиля") {
      navigate("/settings");
    }
  };
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  // const [title, setTitle] = React.useState('')
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
                  <button
                    name={title}
                    onClick={test}
                    key={title}
                    className={s.buttonSettings}
                  >
                    {title}
                  </button>
                );
              })}
            </div>
            <div className={s.block2}>
              {urlSite === "/settings" && <SettingsProfile />}
              {urlSite === "/settings/notifications" && (
                <SettingsNotifications />
              )}
              {urlSite === "/settings/friends" && <SettingsFriends />}
              {urlSite === "/settings/password" && <SettingsPassword />}
              {urlSite === "/settings/delete" && <SettingsDelete />}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Settings;
