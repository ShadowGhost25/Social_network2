import s from "./custombutton.module.css";
import box from "../../pages/Profile/img/box.png";
import foto from "../../pages/Profile/img/foto.png";
import info from "../../pages/Profile/img/info.png";
import city from "../Options/img/Vector.png";
import like from "../Posts/img/like.png";
import share from "../Posts/img/share.png";
import comment from "../Posts/img/comment.png";
import up from "../Options/img/Up.png";
import down from "../Options/img/Down.png";

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
  size,
}) => {
  const buttonStyles = (typeStyle) => {
    switch (typeStyle) {
      case "primary":
        return s.profileButton;
      case "options":
        return s.buttonOptions;
      case "assessment":
        return s.buttonAssessment;
      case "navBar":
        return s.blokImg;
      default:
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
      case "like":
        return like;
      case "share":
        return share;
      case "up":
        return up;
      case "down":
        return down;
      case "comment":
        return comment;
      default:
    }
  };
  const sizeButton = () => {
    switch (size) {
      case "small":
        return s.sizeM;
      case "average":
        return s.sizeA;
      case "full":
        return s.sizeF;
      default:
    }
  };

  return (
    <button
      onClick={click}
      key={index}
      className={`${buttonStyles(typeStyle)} ${sizeButton(size)}`}
    >
      {leftImage && <img src={imageName} alt={imageName} />}
      {title && <span className={s.input}>{title}</span>}
      {rightBlock && <div className={s.ellips}></div>}
      {rightImage && <img className={s.city} src={imgName()} alt={imageName} />}
      {centerImage && <img src={imgName()} alt={imageName} />}
    </button>
  );
};

export default CustomButton;
