import React from "react";
import GroupBlock from "../../componets/GroupBlock/GroupBlock";
import Header from "../../componets/Header/Header";
import History from "../../componets/History/History";
import s from "./group.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroup } from "../../redux/slices/group";
import Loading from "../../componets/Loading/Loading";
import Search from "../../componets/Search/Search";

const Group = () => {
  const dispatch = useDispatch();
  const { group } = useSelector((state) => state.group);
  // console.log(group)
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
                <div className={s.positionSearch}>
                <Search />
                </div>
                {window.localStorage.getItem("token")  ? (
                  <h3 className={s.h3}>Мои группы</h3>
                ) : (
                  <></>
                )}

                <div className={s.mainGroup}>
                  {console.log(group)}
                  {group.items.map((obj) =>
                    obj.user._id === id &&
                    window.localStorage.getItem("token") && (
                      <GroupBlock
                        key={obj._id}
                        id={obj._id}
                        title={obj.title}
                      />
                    )
                  )}
                </div>
                <h3 className={s.h3}>Рекомендуемые группы</h3>
                <div className={s.mainGroup}>
                  {group.items.map((obj) =>
                    obj.user._id !== id  && (
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
