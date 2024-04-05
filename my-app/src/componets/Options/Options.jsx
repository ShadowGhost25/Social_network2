import s from "./options.module.css";
import city from "./img/Vector.png";
import up from "./img/Up.png";
import down from "./img/Down.png";
import CustomButton from "../CustomButton/CustomButton";
const Options = () => {
  return (
    <div className={s.parametersBlog}>
      <h3 className={s.h3}>Параметры</h3>
      <CustomButton
        title="Выбрать город"
        typeStyle="options"
        imageName="city"
        rightImage={true}
      />
      <h3 className={s.age}>Возраст</h3>
      <div className={s.positionUpDown}>
        <CustomButton title="От" typeStyle="blog" size="auto" />
        <button className={s.blogDown}>
          <span className={s.from}>От</span>
          <img className={s.imgDown} src={down} alt="" />
        </button>
        <CustomButton title="До" />
        <div className={s.blogUp}>
          <span className={s.before}>До</span>
          <img className={s.up} src={up} alt="" />
        </div>
      </div>
      <h3 className={s.floor}>Пол</h3>
      <div className={s.displayFloor}>
        <input type="radio" /> Мужчина <br />
        <input type="radio" /> Девушка <br />
        <input type="radio" /> Любой <br />
      </div>
    </div>
  );
};

export default Options;
