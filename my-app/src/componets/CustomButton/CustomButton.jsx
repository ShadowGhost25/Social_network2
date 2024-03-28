import s from "./custombutton.module.css";

const CustomButton = ({ index, imageName, title, alt }) => {
  return (
    <div key={index} className={s.blokImg}>
      <img className={s.box} src={imageName} alt={alt} />
      <span className={s.input}>{title}</span>
    </div>
  );
};

export default CustomButton;
