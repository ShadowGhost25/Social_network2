import React from "react";
import GroupBlock from "../../componets/GroupBlock/GroupBlock";
import Header from "../../componets/Header/Header";
import History from "../../componets/History/History";
import s from "./group.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroup } from "../../redux/slices/group";
import Loading from "../../componets/Loading/Loading";

const Group = () => {
  const dispatch = useDispatch();
  const { group } = useSelector((state) => state.group);
  const { id } = useSelector((state) => state.login);
  const isGroupLoading = group.status === "loaded";
  React.useEffect(() => {
    dispatch(fetchGroup());
  }, []);
  return (
    <>
      {!isGroupLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className={s.main}>
            <div className={s.mainDisplay}>
              <History />
              <div className={s.mainBlog}>
                <input className={s.search} type="search" placeholder="Поиск" />
                {window.localStorage.getItem("token")  ? (
                  <h3 style={{ fontSize: "25px" }}>Мои группы</h3>
                ) : (
                  <></>
                )}

                <div className={s.mainGroup}>
                  {group.items.map((obj) =>
                    obj.user._id === id &&
                    window.localStorage.getItem("token") ? (
                      <GroupBlock
                        key={obj._id}
                        id={obj._id}
                        title={obj.title}
                      />
                    ) : (
                      <></>
                    )
                  )}
                </div>
                <h3 style={{ fontSize: "25px" }}>Рекомендуемые группы</h3>
                <div className={s.mainGroup}>
                  {group.items.map((obj) =>
                    obj.user._id === id ? (
                      <></>
                    ) : (
                      <GroupBlock
                        key={obj._id}
                        id={obj._id}
                        title={obj.title}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Group;
