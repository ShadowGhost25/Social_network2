import s from './headers.module.css'
import logo from './img/Logo.png'
import menuOne from './img/News.png'
import menuTwo from './img/Messages.png'
import menuThree from './img/Friends.png'
import menuFour from './img/Groups.png'
import menuFive from './img/Music.png'
import menuSix from './img/Settings.png'
import ava from './img/Ava.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.foto}>
                <img src={logo} alt="no foto" />
            </div>
            <div className={s.blogSearch}>
                <input className={s.search} type="search" placeholder='Поиск' />
            </div>
            <div className={s.menu}>
                <div className={s.blogMenu}>
                    <img src={menuOne} alt="no img" />
                </div>
                <div className={s.blogMenu}>
                    <img src={menuTwo} alt="no img" />
                </div>
                <div className={s.blogMenu}>
                    <img src={menuThree} alt="no img" />
                </div>
                <div className={s.blogMenu}>
                    <img src={menuFour} alt="no img" />
                </div>
                <div className={s.blogMenu}>
                    <img src={menuFive} alt="no img" />
                </div>
                <div className={s.blogMenu}>
                    <img src={menuSix} alt="no img" />
                </div>
            </div>
            <div className={s.avatarka}>
                <Link to="/profile"> <img src={ava} alt="" /></Link>
            </div>
        </div>
    )
}
export default Header