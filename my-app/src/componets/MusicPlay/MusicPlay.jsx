import s from "./musicplay.module.css";
import icon from "../../pages/Music/img/icon.png";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
const MusicPlay = ({ data }) => {
  return (
    <>
      {data.map((arr) => {
        const nameWithoutExtension = arr.replace(".mp3", "");
        return (
          <div className={s.music}>
            <div className={s.marginBlock}>
              <h3 className={s.h3}> {nameWithoutExtension} </h3>
              <audio src={`http://localhost:3002/music/${arr}`}></audio>
              <CustomButton
                size="button"
                typeStyle="primary"
                imageName="plus"
                centerImage={true}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MusicPlay;
