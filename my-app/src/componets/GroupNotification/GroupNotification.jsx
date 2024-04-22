import s from "./groupnotification.module.css";
import i from "../../pages/Profile/img/i.webp";
import ellipse from "../../pages/Profile/img/Ellipse 6.png";
const GroupNotification = () => {
  return (
    <div className={s.main3}>
      <h3 className={s.h3Foto}>Новые уведомления групп</h3>
      <hr />
      <div className={s.friends}>
        <img className={s.test} src={i} alt="no img" />
        <span className={s.friendsName}>One Piece</span>
        <img className={s.ellipse} src={ellipse} alt="no img" />
      </div>
    </div>
  );
};

export default GroupNotification;
