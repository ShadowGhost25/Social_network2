import s from "./musicplay.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import axios from "../../axios";
import { fetchMusicMe } from "../../redux/slices/music";
const MusicPlay = ({ musicList }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.login);
  console.log(id);
  const addMusic = async (music) => {
    const obj = {
      music,
      id,
    };
    dispatch(fetchMusicMe(obj));
  };
  return (
    <>
      {musicList.map((arr) => {
        const nameWithoutExtension = arr.replace(".mp3", "");
        return (
          <div className={s.music}>
            <div className={s.marginBlock}>
              <h3 className={s.h3}> {nameWithoutExtension} </h3>
              <audio src={`http://localhost:3002/music/${arr}`}></audio>
              <CustomButton
                click={() => {
                  addMusic(arr);
                }}
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
