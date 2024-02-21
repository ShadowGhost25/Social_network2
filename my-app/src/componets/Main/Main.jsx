import s from './main.module.css'
import plus from './img/Plus.png'
const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.blogHistory}>
                <img src={plus} alt="no foto" />
                <div className={s.text}>Создать историю</div>
            </div>
        </div>
    )
}

export default Main