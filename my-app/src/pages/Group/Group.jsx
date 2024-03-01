import Header from "../../componets/Header/Header";
import s from "./group.module.css"

const Group = () => {
    return (
        <>
            <Header />
            <div className={s.main}>
                <div className={s.mainBlog}>
                    <input className={s.search} type="search" placeholder="Поиск" />
                    <h3 style={{fontSize: "26px" }}>Ваши сообщества</h3>
                    <div className={s.mainGroup}>
                        <div className={s.group}>
                            <div className={s.backgroundGroup}></div>
                            <div style={{ padding: "0px 10px 5px" }}>
                                <h3 style={{ margin: "8px 0px", fontSize: "26px" }}>One Piece</h3>
                                <span style={{ display: "block", fontSize: "18px" }}>157 тыс. участников</span>
                                <span style={{ display: "block", fontSize: "18px" }}>35+ публикаций в день</span>
                            </div>
                        </div>
                        <div className={s.group}>
                            <div className={s.backgroundGroup}></div>
                            <div style={{ padding: "0px 10px 5px" }}>
                                <h3 style={{ margin: "8px 0px", fontSize: "26px" }}>One Piece</h3>
                                <span style={{ display: "block", fontSize: "18px" }}>157 тыс. участников</span>
                                <span style={{ display: "block", fontSize: "18px" }}>35+ публикаций в день</span>
                            </div>
                        </div>
                        <div className={s.group}>
                            <div className={s.backgroundGroup}></div>
                            <div style={{ padding: "0px 10px 5px" }}>
                                <h3 style={{ margin: "8px 0px", fontSize: "26px" }}>One Piece</h3>
                                <span style={{ display: "block", fontSize: "18px" }}>157 тыс. участников</span>
                                <span style={{ display: "block", fontSize: "18px" }}>35+ публикаций в день</span>
                            </div>
                        </div>
                        <div className={s.group}>
                            <div className={s.backgroundGroup}></div>
                            <div style={{ padding: "0px 10px 5px" }}>
                                <h3 style={{ margin: "8px 0px", fontSize: "26px" }}>One Piece</h3>
                                <span style={{ display: "block", fontSize: "18px" }}>157 тыс. участников</span>
                                <span style={{ display: "block", fontSize: "18px" }}>35+ публикаций в день</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Group;
