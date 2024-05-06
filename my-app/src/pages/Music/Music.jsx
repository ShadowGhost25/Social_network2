import Header from "../../componets/Header/Header";
import s from "./music.module.css";
import CustomButton from "../../componets/CustomButton/CustomButton";
import MusicPlay from "../../componets/MusicPlay/MusicPlay";
import MusicFriends from "../../componets/MusicFriends/MusicFriends";
import Search from "../../componets/Search/Search";
import axios from '../../axios';
import { useRef } from "react";


const Music = () => {
  const inputRef = useRef("");
  console.log(inputRef)
  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("musics", file);
      const { data } = await axios.post("/music", formData);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <div className={s.main}>
        <div className={s.musicMain}>
          <div className={s.positionButton}>
            <h3 className={s.h3}>Моя музыка</h3>
            <CustomButton title="Главная" typeStyle="primary" size="small" />
          </div>
          <div className={s.positionSearch}>
            <Search />
          </div>
          <label className={s.inputFile}>
            <input
              name="file"
              className={s.inputFileBtn}
              ref={inputRef}
              onChange={handleChangeFile}
              type="file"
              accept=".mp3"
            />
            <span className={s.inputFileBtn}>Выберите файл</span>
          </label>
          <div className={s.mainBlock}>
            <div className={s.main1}>
              <h3 className={s.h3}>Треки</h3>
              <div className={s.flexBlog}>
                <div className={s.displayBlock}>
                  <CustomButton
                    size="button"
                    typeStyle="primary"
                    imageName="vector"
                    centerImage={true}
                  />
                  <span className={s.mix}>Перемешать все</span>
                </div>
                <CustomButton
                  title="По умолчанию"
                  size="average"
                  typeStyle="primary"
                  rightImage={true}
                  position="left"
                  imageName="down"
                />
              </div>

              <MusicPlay />
            </div>
            <div className={s.main2}>
              <div>
                <h3 className={s.h3}>Друзья</h3>
                <div className={s.positionSearch2}>
                  <Search />
                </div>
              </div>
              <MusicFriends />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
