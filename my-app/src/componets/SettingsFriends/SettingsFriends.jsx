import s from "./settingsfriends.module.css";
import img from "./img/ava.png";
import plus from "./img/plus.png";
const SettingsFriends = () => {
  return (
    <>
      <span className={s.text}>Запросы в друзья</span>
      <hr className={s.hr} />
      <div className={s.scrollableDiv}>
        <div className={s.displayNotification}>
          <img className={s.img} src={img} alt="no ava" />
          <span className={s.textName}>Илья Вавилин</span>
          <button className={s.plus}>
            <img className={s.imgPlus} src={plus} alt="no img plus" />
          </button>
        </div>
      </div>
      <hr className={s.hr} />
    </>
  );
};

export default SettingsFriends;
