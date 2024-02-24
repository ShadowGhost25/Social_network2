import s from './History.module.css'
import plus from './img/Plus.png'
const History = () => {
    return (
        <div className={s.History}>
            <div className={s.blogHistory}>
                <img src={plus} alt="no foto" />
                <div className={s.text}>Создать историю</div>
            </div>
        </div>
    )
}

export default History