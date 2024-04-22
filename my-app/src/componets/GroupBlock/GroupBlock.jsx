import s from "./groupblock.module.css";
import { useNavigate } from "react-router-dom";
const GroupBlock = ({ id, title }) => {
  const navigate = useNavigate();
  const onClickGroup = (id) => {
    navigate(`/group/${id}`);
  };
  return (
    <div
      key={id}
      className={s.group}
      onClick={() => {
        onClickGroup(id);
      }}
    >
      <div className={s.backgroundGroup}></div>
      <div className={s.displayBlock}>
        <h3 className={s.h3}>{title}</h3>
        <span className={s.participant}>157 тыс. участников</span>
        <span className={s.participant}>35+ публикаций в день</span>
      </div>
    </div>
  );
};

export default GroupBlock;
