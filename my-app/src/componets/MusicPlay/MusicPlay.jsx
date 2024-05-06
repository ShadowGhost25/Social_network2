import s from "./musicplay.module.css";
import icon from "../../pages/Music/img/icon.png";
import { useSelector } from "react-redux";
import { useState } from "react";
const MusicPlay = () => {
  const { data } = useSelector((state) => state.music);
  
  return (
    <>
      {data.map((arr) => {
        return (
          <div className={s.music}>
            <div>
              <audio
                controls
                src={`http://localhost:3002/music/${arr}`}
              ></audio>
              <img src={icon} alt="avatar" />
              <div className={s.marginBlock}>
                <h3 className={s.h3}> Старый я </h3>
                <span>Заточка</span>
              </div>
              <div className={s.positionTime}>
                <h4 className={s.h4}>3:21</h4>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MusicPlay;
