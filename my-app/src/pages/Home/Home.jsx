import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../componets/Header/Header";
import History from "../../componets/History/History";
import Posts from "../../componets/Posts/Posts";
import FriendsOnline from "../../componets/FriendsOnline/FriendsOnline";
import GroupNotification from "../../componets/GroupNotification/GroupNotification";
import CustomButton from "../../componets/CustomButton/CustomButton";
import Loading from "../../componets/Loading/Loading";
import foto from "./img/qwe.png";
import user from "./img/Vector.svg";
import s from "./home.module.css";

const Home = () => {
  const { data, status } = useSelector((state) => state.login);
  const isLoadingHome = status === "loaded";
  const navigate = useNavigate();
  const cliclProfile = () => {
    navigate("/profile");
  };
  const clicLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {!isLoadingHome && window.localStorage.getItem("token") ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className={s.main}>
            <div className={s.leftBlock}>
              {window.localStorage.getItem("token") ? (
                <>
                  <div className={s.background}></div>
                  <div className={s.homeImg}>
                    <img className={s.fotoProfile} src={foto} alt="me" />
                  </div>
                  <span className={s.name}>
                    {data.fullName} {data.surName}
                  </span>
                  <span className={s.status}>{data.status}</span>
                  <hr />
                  <span className={s.friends}>Друзья</span>
                  <span className={s.kolFriends}>14</span>
                  <hr />
                  <div className={s.displayButton}>
                    <CustomButton
                      click={cliclProfile}
                      title="Профиль"
                      typeStyle="primary"
                      size="small"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className={s.svg}>
                    <img src={user} alt="user" />
                  </div>
                  <span className={s.name}>Авторизоваться</span>
                  <hr />
                  <div className={s.displayButton}>
                    <CustomButton
                      click={clicLogin}
                      title="Войти"
                      typeStyle="primary"
                      size="small"
                    />
                  </div>
                </>
              )}
            </div>
            <div className={s.mainBlock}>
              <History />
              <div className={s.postsMain}>
                <Posts />
              </div>
            </div>
            <div className={s.rightBlock}>
              <FriendsOnline />
              <GroupNotification />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
