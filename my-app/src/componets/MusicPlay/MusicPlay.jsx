import s from "./musicplay.module.css";
import icon from "../../pages/Music/img/icon.png";
const MusicPlay = () => {
  return (
    <div className={s.music}>
      <img src={icon} alt="avatar" />
      <div className={s.marginBlock}>
        <h3 className={s.h3}> Старый я </h3>
        <span>Заточка</span>
      </div>
      <div className={s.positionTime}>
        <h4 className={s.h4}>3:21</h4>
      </div>
    </div>
  );
};

export default MusicPlay;
