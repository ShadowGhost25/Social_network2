import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { fetchDeleteMusicMe } from "../../redux/slices/music";
import s from "./MusicPlayMe.module.css";
import Loading from "../Loading/Loading";
import { useState } from "react";

const MusicPlayMe = () => {
  const dispatch = useDispatch();
  const { data, id } = useSelector((state) => state.login);
  const deleteMusic = async (music) => {
    const obj = {
      music,
      id,
    };
    if (window.confirm("Вы действительно хотите удалить музыку ?")) {
      dispatch(fetchDeleteMusicMe(obj));
      window.location.reload();
    }
  };
  return (
    <>
      {data === null ? (
        <Loading />
      ) : (
        <>
          {data.music.map((arr, index) => {
            const nameWithoutExtension = arr.replace(".mp3", "");
            return (
              <div key={index} className={s.music}>
                <div className={s.marginBlock}>
                  <div className={s.activeText}> {nameWithoutExtension} </div>
                  <audio src={`http://localhost:3002/music/${arr}`}></audio>
                  <CustomButton
                    click={() => {
                      deleteMusic(arr);
                    }}
                    size="button"
                    typeStyle="primary"
                    imageName="cross"
                    centerImage={true}
                  />
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default MusicPlayMe;
