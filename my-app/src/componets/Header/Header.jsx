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
  let urlSite = window.location.pathname;

  return (
    <>
      {!isLoadingHeader && window.localStorage.getItem("token") ? (
        <Loading />
      ) : (
        <div className={s.header}>
          <div className={s.headerMain}>
            <div className={s.foto}>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className={s.blockSearch}>
              <Search />
            </div>
            <div className={s.menu}>
              {buttonHeader.map((obj, index) => {
                return (
                  <Link className={s.link} key={index} to={obj.url}>
                    <CustomButton
                      key={index}
                      url={obj.url}
                      pathName={urlSite}
                      typeStyle={obj.typeStyle}
                      imageName={obj.imageName}
                      centerImage={obj.centerImage}
                      size="full"
                    />
                  </Link>
                );
              })}
              {isAuth ? (
                <Link className={s.link} to="/profile">
                  <CustomButton
                    typeStyle="navBar"
                    url="/profile"
                    pathName={urlSite}
                    centerImage={true}
                    imageName="me"
                    size="full"
                  />
                </Link>
              ) : (
                <Link className={s.link} to="/login">
                  <CustomButton
                    typeStyle="navBar"
                    url="/login"
                    pathName={urlSite}
                    centerImage={true}
                    imageName="user"
                    size="full"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
