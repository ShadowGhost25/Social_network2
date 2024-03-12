import { Link } from "react-router-dom";
import s from "./History.module.css";
import plus from "./img/Plus.png";
const History = () => {
  return (
    <div className={s.History}>
      <div className={s.blogHistory}>
        <Link style={{textDecoration: "none"}} to="/add-posts">
          <div className={s.whiteblog}>
            <img src={plus} alt="no foto" />
            <div className={s.text}>Создать пост</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default History;
