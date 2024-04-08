import Header from "../../componets/Header/Header";
import s from "./music.module.css";
import down from "./img/Down.png";
import icon from "./img/icon.png";
import alex from "./img/alex.png";
import CustomButton from "../../componets/CustomButton/CustomButton";
const Music = () => {
  return (
    <>
      <Header />
      <div className={s.main}>
        <div className={s.musicMain}>
          <div className={s.positionButton}>
            <h3>Моя музыка</h3>
            <CustomButton title="Главная" typeStyle="primary" size="small" />
          </div>
          <input className={s.search} type="search" placeholder="Поиск..." />
          <h3 className={s.h3}>Треки</h3>
          <div>
            <div className={s.flexBlog}>
              <button className={s.button}></button>
              <span className={s.mix}>Перемешать все</span>
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
                <div className={s.musicBlog}>
                  <div className={s.music}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={icon} alt="no img" />
                    </div>
                    <div style={{ margin: "5px 10px 0px" }}>
                      <h3 style={{ margin: "2px" }}> Старый я </h3>
                      <span style={{ margin: "auto 0px" }}>Заточка</span>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <h4>3:21</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <h3>Друзья</h3>
            </div>

            <div
              style={{ border: "0", marginLeft: "10px" }}
              className={s.musicBlog}
            >
              <div className={s.music}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={alex} alt="no img" />
                </div>
                <div style={{ margin: "5px 10px 0px" }}>
                  <h3 style={{ margin: "2px" }}> Саша </h3>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <h4 style={{ margin: "7px 0px 0px", textAlign: "right" }}>
                    586
                  </h4>
                  <span>Аудиозаписи</span>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Music;
