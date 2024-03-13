import { useParams } from "react-router-dom";
import GroupBlock from "../../componets/GroupBlock/GroupBlock";
import Header from "../../componets/Header/Header";
import History from "../../componets/History/History";
import s from "./group.module.css";

const Group = () => {
  return (
    <>
      <Header />
      <History />
      <div className={s.main}>
        <div className={s.mainBlog}>
          <input className={s.search} type="search" placeholder="Поиск" />
          <h3 style={{ fontSize: "26px" }}>Ваши сообщества</h3>
          <div className={s.mainGroup}>
            <GroupBlock />
          </div>
        </div>
      </div>
    </>
  );
};

export default Group;
