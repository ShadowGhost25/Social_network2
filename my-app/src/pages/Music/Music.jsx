import Header from "../../componets/Header/Header";
import s from "./music.module.css";
import CustomButton from "../../componets/CustomButton/CustomButton";
import MusicPlay from "../../componets/MusicPlay/MusicPlay";
import MusicFriends from "../../componets/MusicFriends/MusicFriends";
import Search from "../../componets/Search/Search";
import axios from "../../axios";
import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

import { useState } from "react";

const Music = () => {
  const { data } = useSelector((state) => state.music);
  const inputRef = useRef("");
  const [isShuffled, setIsShuffled] = useState(false);
  const [musicList, setMusicList] = React.useState(data);
  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("musics", file);
      const { data } = await axios.post("/music", formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className={s.main}>
        <div className={s.musicMain}>
          <div className={s.mainBlock}>
            <div className={s.main1}>
              <h3 className={s.h3}>Моя музыка</h3>
              <div className={s.flexBlog}>
                <div
                  onClick={() => setMusicList(shuffleArray(musicList))}
                  className={s.displayBlock}
                >
                  <CustomButton
                    size="button"
                    typeStyle="primary"
                    imageName="vector"
                    centerImage={true}
                  />
                  <span className={s.mix}>Перемешать все</span>
                </div>
                <div>
                  <label className={s.displayBlock}>
                    <input
                      name="file"
                      className={s.inputFileBtn}
                      ref={inputRef}
                      onChange={handleChangeFile}
                      type="file"
                      accept=".mp3"
                    />
                    <CustomButton
                      size="button"
                      typeStyle="primary"
                      imageName="plus"
                      centerImage={true}
                    />
                    <span className={s.mix}>Добавить свою музыку</span>
                  </label>
                </div>
              </div>
              <span className={s.textmusic}>У вас пока нет муыки</span>
            </div>
            <div className={s.main2}>
              <div>
                <h3 className={s.h3}>Рекомендации</h3>
                <div className={s.positionSearch2}>
                  <Search />
                </div>
              </div>
              <MusicPlay data={musicList} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
