import s from "./custombutton.module.css";
import box from "../../pages/Profile/img/box.png";
import foto from "../../pages/Profile/img/foto.png";
import info from "../../pages/Profile/img/info.png";
import city from "../Options/img/Vector.png";

const CustomButton = ({
  click,
  index,
  imageName,
  title,
  typeStyle,
  centerImage,
  rightImage,
  leftImage,
  rightBlock,
  onClickLogout,
  size,
}) => {
  let buttonContent;

  const buttonStyles = (typeStyle) => {
    switch (typeStyle) {
      case "primary":
        return s.profileButton;
      case "friends":
        return s.buttonFriends;
      case "options":
        return s.buttonOptions;
      case "navBar":
        return s.blokImg;
    }
  };
  const imgName = () => {
    switch (imageName) {
      case "box":
        return box;
      case "foto":
        return foto;
      case "info":
        return info;
      case "city":
        return city;
    }
  };
  const sizeButton = () => {
    switch (size) {
      case "box":
        return s.;
      case "foto":
        return foto;
      case "info":
        return info;
      case "city":
        return city;
    }
  };

  return (
    <button
      onClick={click}
      key={index}
      className={`${buttonStyles(typeStyle)} ${size}`}
    >
      {leftImage && <img src={imageName} alt={imageName} />}
      <span className={s.input}>{title}</span>
      {rightBlock && <div className={s.ellips}></div>}
      {rightImage && <img className={s.city} src={imgName()} alt={imageName} />}
      {centerImage && <img src={imgName()} alt={imageName} />}
    </button>
  );
};

export default CustomButton;
