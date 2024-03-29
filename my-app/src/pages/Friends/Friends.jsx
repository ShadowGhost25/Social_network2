import Header from "../../componets/Header/Header";
import s from "./friends.module.css";
import FriendsBLock from "../../componets/FriendsBlock/FriendsBlock";
import Options from "../../componets/Options/Options";

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
                        <input className={s.search} type="search" placeholder="Поиск" />
                        </div>
                    </div>
                    <div className={s.cardBlog}>
                        <FriendsBLock />
                    </div>
                </div>
                <div className={s.mainBlog2}>
                   <Options />
                </div>
            </div >
        </>
    );
}

export default Friends;