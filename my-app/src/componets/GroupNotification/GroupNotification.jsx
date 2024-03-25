import s from "./groupnotification.module.css";
import foto from "./img/qwe.png";
const GroupNotification = () => {
  return (
    <div className={s.bacground}>
      <h3 className={s.h3}>Уведомления от групп</h3>
      <hr />
      <div className={s.positionBlock}>
        <img src={foto} alt="no img" />
        <div className={s.positionBlockName}>
          <span className={s.nameFriends}>One Piece</span>
          <span className={s.notifications}> +1 </span>
        </div>
      </div>
    </div>
  );
};

export default GroupNotification;
