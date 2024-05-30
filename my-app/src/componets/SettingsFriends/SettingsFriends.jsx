import s from "./settingsfriends.module.css";
import img from "./img/ava.png";
import CustomButton from "../CustomButton/CustomButton";
const SettingsFriends = () => {
  return (
    <>
      <span className={s.text}>Запросы в друзья</span>
      <hr className={s.hr} />
      <div className={s.scrollableDiv}>
        <div className={s.displayNotification}>
          <img className={s.img} src={img} alt="no ava" />
          <span className={s.textName}>Илья Вавилин</span>
          <div className={s.positionButton}>
            <CustomButton
              size="button"
              centerImage={true}
              imageName="plus"
              typeStyle="primary"
            />
          </div>
        </div>
      </div>
      <hr className={s.hr} />
    </>
  );
};

export default SettingsFriends;
