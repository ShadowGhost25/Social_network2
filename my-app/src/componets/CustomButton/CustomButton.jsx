import s from "./custombutton.module.css";

const CustomButton = ({ index, imageName, title, alt, rightImage=null, leftImage=null }) => {
  const StyleButton = ['Primary', 'Black', 'ather']

  return (
    <div key={index} className={s.blokImg}>
      {leftImage && <img className={s.box} src={imageName} alt={alt} />}
      <span className={s.input}>{title}</span>
      <img className={s.box} src={imageName} alt={alt} />
    </div>
  );
};

export default CustomButton;
