import Header from "../../componets/Header/Header";
import s from "./music.module.css";
import down from "./img/Down.png";
import icon from "./img/icon.png";
import alex from "./img/alex.png"
const Music = () => {
    return (
        <>
            <Header />
            <div className={s.main}>
                <div className={s.musicMain}>
                    <h3>Моя музыка</h3>
                    <input className={s.search} type="search" placeholder="Поиск..." />
                    <h3>Треки</h3>
                    <div className={s.flexBlog}>
                        <button className={s.button}></button>
                        <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                            Перемешать все
                        </span>
                        <div className={s.blogDown}>
                            <span>По умолчанию</span>
                            <div>
                                <img style={{ marginLeft: "7px", display: "block" }} src={down} alt="" />
                            </div>
                        </div>
                        <div>
                            <h3 style={{ marginLeft: "15px" }}>Друзья</h3>
                        </div>
                    </div>
                    <div className={s.musicMainBlog}>
                        <div className={s.musicBlog}>
                            <div className={s.music}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img src={icon} alt="" />
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
                        <div style={{border: "0", marginLeft: "10px"}} className={s.musicBlog}>
                            <div className={s.music}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img src={alex} alt="" />
                                </div>
                                <div style={{ margin: "5px 10px 0px" }}>
                                    <h3 style={{ margin: "2px" }}> Саша </h3>
                                </div>
                                <div style={{ marginLeft: "auto" }}>
                                    <h4 style={{margin: "7px 0px 0px", textAlign: "right"}}>586</h4>
                                    <span>Аудиозаписи</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Music;