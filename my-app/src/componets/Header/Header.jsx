import s from "./headers.module.css";
import logo from "./img/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/login";
const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <div className={s.header}>
      <div className={s.headerMain}>
        <div className={s.foto}>
          <Link to="/">
            <img src={logo} alt="no foto" />
          </Link>
        </div>
        <div className={s.blogSearch}>
          <input className={s.search} type="search" placeholder="Поиск..." />
        </div>
        <div className={s.menu}>
          <div className={s.navBar}>
            <Link to="/">
              <div className={s.news}></div>
            </Link>
            <Link to="/message">
              <div className={s.message}></div>
            </Link>
            <Link to="/friends">
              <div className={s.friends}></div>
            </Link>
            <Link to="/group">
              <div className={s.group}></div>
            </Link>
            <Link to="/music">
              <div className={s.music}></div>
            </Link>
            <Link to="/setings">
              <div className={s.setings}></div>
            </Link>
          </div>
        </div>
        <div className={s.avatarka}>
          {isAuth ? (
            <Link className={s.tegA} to="/profile">
                <span>Shadow</span>
                <div className={s.avaActive}></div>
            </Link>
          ) : (
            <Link to="/login">
              <div className={s.ava}></div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
