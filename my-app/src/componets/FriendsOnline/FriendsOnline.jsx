import foto from "./img/qwe.png";
import s from "./friendsonline.module.css";
const FriendsOnline = () => {
  return (
    <div className={s.bacground}>
      <h3 className={s.h3}>Друзья онлайн </h3>
      <hr />
      <div className={s.positionBlock}>
        <img src={foto} alt="no img" />
        <div className={s.positionBlockName}>
          <span className={s.nameFriends}>Илья Вавилин</span>
          <div className={s.positionBlockStatus}>
            <span className={s.statusFriends}> Online </span>
            <div className={s.ellips}></div>
          </div>
        </div>
      </div>
    </div>
  );    
};

export default FriendsOnline;
