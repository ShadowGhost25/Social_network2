import { useSelector } from "react-redux";
import s from "./groupblock.module.css";
import { useNavigate } from "react-router-dom";
const GroupBlock = () => {
  const { group } = useSelector((state) => state.group);
  const navigate = useNavigate()
  const onClickGroup = (id) =>{
    navigate(`/group/${id}/edit`)   
  }
  return (
    <>
      {group.items.map((obj, index) => {
        return (
          <div
            key={obj._id}
            className={s.group}
            onClick={() => {
              onClickGroup(obj._id);
            }}
          >
            <div className={s.backgroundGroup}></div>
            <div style={{ padding: "0px 10px 5px" }}>
              <h3 style={{ margin: "8px 0px", fontSize: "26px" }}>
                {obj.title}
              </h3>
              <span style={{ display: "block", fontSize: "18px" }}>
                157 тыс. участников
              </span>
              <span style={{ display: "block", fontSize: "18px" }}>
                35+ публикаций в день
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GroupBlock;
