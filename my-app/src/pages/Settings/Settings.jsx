import Header from "../../componets/Header/Header";
import s from "./settings.module.css";
import { buttonSettings } from "../../Route/route";
import { useSelector } from "react-redux";
import Loading from "../../componets/Loading/Loading";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SettingsProfile from "../../componets/SettingsProfile/SettingsProfile";
import SettingsNotifications from "../../componets/SettingsNotifications/SettingsNotifications";
const Settings = () => {
  const { data, status } = useSelector((state) => state.login);
  const urlSite = window.location.pathname;
  console.log(urlSite)
  const isSettingsLoading = status === "loaded";
  const navigate = useNavigate()
  const test = (event) => {
    const nameSettings = event.target.name
    if (nameSettings === "Уведомления") {
      navigate('/settings/notifications')
    } else if (nameSettings === "Запросы в друзья") {
      navigate('/settings/friends')
    } else if (nameSettings === "Изменить пароь") {
      navigate('/settings/password')
    } else if (nameSettings === "Удалить аккаунт") {
      navigate('/settings/delete')
    } else if (nameSettings === "Настройки профиля") {
      navigate('/settings')
    }

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
                  <button name={title} onClick={test} key={title} className={s.buttonSettings}>
                    {title}
                  </button>
                );
              })}
            </div>
            <div className={s.block2}>

              {urlSite === "/settings" && <SettingsProfile />}
              {urlSite === "/settings/notifications" && <SettingsNotifications />}
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Settings;
