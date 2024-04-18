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
import { selectIsAuth } from "../../redux/slices/login";
import SettingsPassword from "../../componets/SettingsPassword/SettingsPassword";
import SettingsDelete from "../../componets/SettingsDelete/SettingsDelete";
import CustomButton from "../../componets/CustomButton/CustomButton";
const Settings = () => {
  const { status } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const urlSite = window.location.pathname;
  const isSettingsLoading = status === "loaded";

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  const test = (event) => {
    if (event === "Уведомления") {
      navigate("/settings/notifications");
    } else if (event === "Запросы в друзья") {
      navigate("/settings/friends");
    } else if (event === "Изменить пароль") {
      navigate("/settings/password");
    } else if (event === "Удалить аккаунт") {
      navigate("/settings/delete");
    } else if (event === "Настройки профиля") {
      navigate("/settings");
    }
  };
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {!isSettingsLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className={s.main}>
            <div className={s.block1}>
              {buttonSettings.map((obj, index) => {
                return (
                  <CustomButton
                    key={index}
                    title={obj.title}
                    click={() => {
                      test(obj.title);
                    }}
                    typeStyle={obj.typeStyle}
                  />
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
