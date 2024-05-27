import s from "./groupnotification.module.css";
import i from "../../pages/Profile/img/i.webp";
import ellipse from "../../pages/Profile/img/Ellipse 6.png";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/login";

const GroupNotification = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className={s.main3}>
      <h3 className={s.h3Foto}>Новые уведомления групп</h3>
      <hr />
      {!isAuth ? (
        <div className={s.style}>У вас нет групп :(</div>
      ) : (
        <>
          {" "}
          <div className={s.friends}>
            <img className={s.test} src={i} alt="no img" />
            <span className={s.friendsName}>One Piece</span>
            <img className={s.ellipse} src={ellipse} alt="no img" />
          </div>
        </>
      )}
    </div>
  );
};

export default GroupNotification;
