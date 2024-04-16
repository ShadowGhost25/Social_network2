import Header from "../../componets/Header/Header";
import s from "./music.module.css";
import CustomButton from "../../componets/CustomButton/CustomButton";
import MusicPlay from "../../componets/MusicPlay/MusicPlay";
import MusicFriends from "../../componets/MusicFriends/MusicFriends";
import Search from "../../componets/Search/Search";
const Music = () => {
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
              <div className={s.musicMainBlog}>
                <MusicPlay />
                <MusicPlay />
              </div>
            </div>
            <div className={s.main2}>
              <div>
                <h3 className={s.h3}>Друзья</h3>
                <div className={s.positionSearch2}>
                  <Search />
                </div>
              </div>
              <MusicFriends />
              <MusicFriends />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
