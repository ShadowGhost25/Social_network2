import s from "./headers.module.css";
import logo from "./img/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/login";
import Search from "../Search/Search";
import CustomButton from "../CustomButton/CustomButton";
import { buttonHeader } from "../../Route/route";
import Loading from "../Loading/Loading";
const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const { data, status } = useSelector((state) => state.login);
  const isLoadingHeader = status === "loaded";
  console.log(data);
  return (
    <>
      {!isLoadingHeader && window.localStorage.getItem("token")? (
        <Loading />
      ) : (
        <div className={s.header}>
          <div className={s.headerMain}>
            <div className={s.foto}>
              <Link to="/">
                <img src={logo} alt="no foto" />
              </Link>
            </div>
            <Search />
            <div className={s.menu}>
              {buttonHeader.map((obj, index) => {
                return (
                  <Link className={s.link} key={index} to={obj.url}>
                    <CustomButton
                      key={index}
                      typeStyle={obj.typeStyle}
                      imageName={obj.imageName}
                      centerImage={obj.centerImage}
                      size="full"
                    />
                  </Link>
                );
              })}
            </div>
            {isAuth ? (
              <Link className={s.tegA} to="/profile">
                <span>{data.login ? (data.login):(data.fullName)}</span>
                <div className={s.avaActive}></div>
              </Link>
            ) : (
              <Link to="/login">
                <div className={s.ava}></div>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
