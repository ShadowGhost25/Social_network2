import s from "./settingsnotifications.module.css";
import img from "./img/ava.png";
const SettingsNotifications = () => {
  return (
    <>
      <span className={s.text}>Уведомления</span>
      <hr className={s.hr} />
      <div className={s.scrollableDiv}>
        <div className={s.displayNotification}>
          <img className={s.img} src={img} alt="no ava" />
          <div className={s.textInfo}>
            <span className={s.textName}>
              Илья Вавилин <span className={s.com}>Прокоментировал вас</span>
            </span>
            <span className={s.textTime}>2 минуты назад</span>
          </div>
        </div>
        <hr className={s.hr} />
        <div className={s.displayNotification}>
          <img className={s.img} src={img} alt="no ava" />
          <div className={s.textInfo}>
            <span className={s.textName}>
              Илья Вавилин <span className={s.com}>Прокоментировал вас</span>
            </span>
            <span className={s.textTime}>2 минуты назад</span>
          </div>
        </div>
        <hr className={s.hr} />
        <div className={s.displayNotification}>
          <img className={s.img} src={img} alt="no ava" />
          <div className={s.textInfo}>
            <span className={s.textName}>
              Илья Вавилин <span className={s.com}>Прокоментировал вас</span>
            </span>
            <span className={s.textTime}>2 минуты назад</span>
          </div>
        </div>
        <hr className={s.hr} />
        <div className={s.displayNotification}>
          <img className={s.img} src={img} alt="no ava" />
          <div className={s.textInfo}>
            <span className={s.textName}>
              Илья Вавилин <span className={s.com}>Прокоментировал вас</span>
            </span>
            <span className={s.textTime}>2 минуты назад</span>
          </div>
        </div>
        <hr className={s.hr} />
        <div className={s.displayNotification}>
          <img className={s.img} src={img} alt="no ava" />
          <div className={s.textInfo}>
            <span className={s.textName}>
              Илья Вавилин <span className={s.com}>Прокоментировал вас</span>
            </span>
            <span className={s.textTime}>2 минуты назад</span>
          </div>
        </div>
        <hr className={s.hr} />
        <div className={s.displayNotification}>
          <img className={s.img} src={img} alt="no ava" />
          <div className={s.textInfo}>
            <span className={s.textName}>
              Илья Вавилин <span className={s.com}>Прокоментировал вас</span>
            </span>
            <span className={s.textTime}>2 минуты назад</span>
          </div>
        </div>
        <hr className={s.hr} />
        <div className={s.displayNotification}>
          <img className={s.img} src={img} alt="no ava" />
          <div className={s.textInfo}>
            <span className={s.textName}>
              Илья Вавилин <span className={s.com}>Прокоментировал вас</span>
            </span>
            <span className={s.textTime}>2 минуты назад</span>
          </div>
        </div>
        <hr className={s.hr} />
      </div>
    </>
  );
};

export default SettingsNotifications;
