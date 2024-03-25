import React, { useState } from "react";
import Header from "../Header/Header";
import s from "./profile.module.css";
import vector from "./img/Vector.png";
import i1 from "./img/i1.png";
import vector2 from "./img/Vector2.png";
import fotografi from "./img/Fotografi.png";
import alex from "./img/alex.png";
import ellipse from "./img/Ellipse 6.png";
import Posts from "../Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/login";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { fetchPosts } from "../../redux/slices/posts";
const Profile = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const { status, data } = useSelector((state) => state.login);
  const isProfileLoading = status === "loaded";
  // console.log(data);
  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти.")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {!isProfileLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <div className={s.profileMain}>
            <div className={s.headerProfile}>
              <div className={s.blogAva}>
                <button className={s.buttonProfile}>
                  <span className={s.textH3}>Изменить обложку</span>{" "}
                  <img src={vector} alt="no foto" />
                </button>
              </div>
              <div className={s.blogAva2}>
                <img className={s.i1} src={i1} alt="no img" />
                <button className={s.buttonProfile}>
                  <span className={s.textH3}>Редактировать профиль</span>{" "}
                  <img src={vector} alt="no foto" />
                </button>
                <span className={s.fio}>
                  {data.fullName} {data.surName}
                </span>
                <span className={s.status}>{data.status}</span>
                <button className={s.buttonFoter}>
                  <img className={s.vector2} src={vector2} alt="no img" />
                  Подробнее...
                </button>
                <button type="submit" onClick={onClickLogout}>
                  Выйти
                </button>
              </div>
            </div>
            <div className={s.main}>
              <div className={s.main1}>
                <div className={s.mainFoto}>
                  <h3 className={s.h3Foto}>Bce фото</h3>
                  <img className={s.fotografi} src={fotografi} alt="no img" />
                </div>
                <div className={s.mainFriends}>
                  <h3 className={s.h3Foto}>Друзья онлайн</h3>
                  <hr />
                  <div className={s.friends}>
                    <img className={s.test} src={alex} alt="no img" />
                    <span className={s.friendsName}>Саша</span>
                    <img className={s.ellipse} src={ellipse} alt="no img" />
                  </div>
                  <div className={s.friends}>
                    <img className={s.test} src={alex} alt="no img" />
                    <span className={s.friendsName}>Саша</span>
                    <img className={s.ellipse} src={ellipse} alt="no img" />
                  </div>
                  <div className={s.friends}>
                    <img className={s.test} src={alex} alt="no img" />
                    <span className={s.friendsName}>Саша</span>
                    <img className={s.ellipse} src={ellipse} alt="no img" />
                  </div>
                </div>
              </div>
              <div className={s.main2}>
                <Posts />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
