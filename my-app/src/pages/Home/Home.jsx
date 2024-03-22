import { useSelector } from "react-redux";
import Header from "../../componets/Header/Header";
import History from "../../componets/History/History";
import foto from "./img/qwe.png";
import s from "./home.module.css";
import React from "react";
import Posts from "./../../componets/Posts/Posts";

const Home = () => {
  const { data } = useSelector((state) => state.login);
  // console.log(data);
  return (
    <>
      <Header />
      <div className={s.main}>
        <div className={s.leftBlock}>
          <div className={s.background}></div>
          <img className={s.fotoProfile} src={foto} alt="" />
          <span className={s.name}>Илья Вавилин</span>
          <span className={s.status}>Статус</span>
          <hr />
          <span className={s.friends}>Друзья</span>
          <span className={s.kolFriends}>14</span>
          <hr />
          <button className={s.profileButton}> Профиль</button>
        </div>
        <div className={s.mainBlock}>
          <History />
          <div style={{ marginTop: "30px" }}>
            <Posts />
          </div>
        </div>
        <div className={s.rightBlock}>
          <div style={{ background: "white" }}>
            <h3
              style={{
                margin: "0px",
                padding: "16px 0px",
                textAlign: "center",
              }}
            >
              Друзья онлайн{" "}
            </h3>
            <hr />
            <div style={{ display: "flex", padding: "10px" }}>
              <img width={"60px"} src={foto} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className={s.nameFriends}>Илья Вавилин</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <span className={s.statusFriends}> Online </span>
                  <div className={s.ellips}></div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", padding: "10px" }}>
              <img width={"60px"} src={foto} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className={s.nameFriends}>Илья Вавилин</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <span className={s.statusFriends}> Online</span>{" "}
                  <div className={s.ellips}></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: "white" }}>
            <h3
              style={{
                margin: "30px 0px 0px",
                padding: "16px 0px",
                textAlign: "center",
              }}
            >
              Уведомления от групп
            </h3>
            <hr />
            <div style={{ display: "flex", padding: "10px" }}>
              <img width={"60px"} src={foto} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className={s.nameFriends}>One Piece</span>
                  <span className={s.notifications}> +1 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
