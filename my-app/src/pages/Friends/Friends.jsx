import Header from "../../componets/Header/Header";
import s from "./friends.module.css";
import ava from "./img/ava.png";
import vector from "./img/Vector.png";
import down from "./img/Down.png";
import up from "./img/Up.png";

const Friends = () => {
    return (
        <>
            <Header />
            <div className={s.main}>
                <div className={s.mainBlog1}>
                    <div className={s.searchFriends}>
                        <button className={s.button}>Все друзья</button>
                        <button className={s.button}>Друзья онлайн <div className={s.ellips}></div></button>
                        <div className={s.searchBlog}>
                            <input className={s.search} style={{ color: "white" }} type="search" placeholder="Поиск" />
                        </div>
                    </div>
                    <div className={s.cardBlog}>
                        <div className={s.card}>
                            <div className={s.cardHeader}></div>
                            <img className={s.ava} src={ava} alt="" />
                            <div className={s.cardFooter}>
                                <h3 className={s.name}>Саша Тарасов1</h3>
                                <span>Пензенский колледж информационных и промышленных технологий (ИТ-колледж)</span>
                            </div>
                            <button className={s.button2}>Написать</button>
                        </div>
                        <div className={s.card}>
                            <div className={s.cardHeader}></div>
                            <img className={s.ava} src={ava} alt="" />
                            <div className={s.cardFooter}>
                                <h3 className={s.name}>Саша Тарасов2</h3>
                                <span>Пензенский колледж информационных и промышленных технологий (ИТ-колледж)</span>
                            </div>
                            <button className={s.button2}>Написать</button>
                        </div>
                        <div className={s.card}>
                            <div className={s.cardHeader}></div>
                            <img className={s.ava} src={ava} alt="" />
                            <div className={s.cardFooter}>
                                <h3 className={s.name}>Саша Тарасов3</h3>
                                <span>Пензенский колледж информационных и промышленных технологий (ИТ-колледж)</span>
                            </div>
                            <button className={s.button2}>Написать</button>
                        </div>
                        <div className={s.card}>
                            <div className={s.cardHeader}></div>
                            <img className={s.ava} src={ava} alt="" />
                            <div className={s.cardFooter}>
                                <h3 className={s.name}>Саша Тарасов4</h3>
                                <span>Пензенский колледж информационных и промышленных технологий (ИТ-колледж)</span>
                            </div>
                            <button className={s.button2}>Написать</button>
                        </div>
                    </div>
                </div>
                <div className={s.mainBlog2}>
                    <div className={s.parametersBlog}>
                        <h3 style={{ margin: "0px 0px 10px 0px" }}>Параметры</h3>
                        <button className={s.button3}>
                            <span className={s.text}>Выбрать город</span>
                            <div className={s.test}>
                                <img style={{ float: "right" }} src={vector} alt="" />
                            </div>
                        </button>
                        <h3 style={{ margin: "20px 0px 10px 0px" }}>Возраст</h3>
                        <div style={{ width: "100%", height: "31px" }}>
                            <div className={s.blogDown}>
                                <span style={{ float: "left" }}>От</span>
                                <img style={{ float: "right", marginTop: "2px" }} src={down} alt="" />
                            </div>
                            <div className={s.blogUp}>
                                <span style={{ float: "left" }}>До</span>
                                <img style={{ float: "right", marginTop: "2px" }} src={up} alt="" />
                            </div>
                        </div>
                        <div style={{ float: "left", textAlign: "left", height: "100%"}}>
                            <input type="radio" /> Мужчина <br />
                            <input type="radio" /> Девушка <br />
                            <input type="radio" /> Любой <br />
                        </div>
                        <h3 style={{ margin: "20px 0px 10px 0px" }}>Пол</h3>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Friends;