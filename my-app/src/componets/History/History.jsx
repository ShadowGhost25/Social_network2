import { Link } from "react-router-dom";
import s from "./History.module.css";
import plus from "./img/Plus.png";
const History = () => {
  const url = window.location.pathname;
  return (
    <Link to={url === "/" ? "/add-posts" : "/add-group"}>
      <div className={s.History}>
        <div className={s.blogHistory}>
          <div className={s.whiteblog}>
            <img src={plus} alt="no foto" />
            <div className={s.text}>
              {url === "/" ? "Создать пост" : "Создать группу"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default History;
