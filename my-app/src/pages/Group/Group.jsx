import GroupBlock from "../../componets/GroupBlock/GroupBlock";
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
                        <GroupBlock />
                        <GroupBlock />
                        <GroupBlock />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Group;
