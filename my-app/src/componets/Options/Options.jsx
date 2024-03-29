import s from "./options.module.css";
import city from "./img/Vector.png";
import up from "./img/Up.png";
import down from "./img/Down.png";
const Options = () => {
  return (
    <div className={s.parametersBlog}>
      <h3 className={s.h3}>Параметры</h3>
      <button className={s.button3}>
        <span className={s.text}>Выбрать город</span>
        <div className={s.test}>
          <img className={s.city} src={city} alt="no img city" />
        </div>
      </button>
      <h3 className={s.age}>Возраст</h3>
      <div>
        <div className={s.blogDown}>
          <span className={s.from}>От</span>
          <img className={s.imgDown} src={down} alt="" />
        </div>
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
