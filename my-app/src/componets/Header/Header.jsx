import s from './headers.module.css'
import logo from './img/Logo.png'
import ava from './img/Ava.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerMain}>
                <div className={s.foto}>
                    <Link to='/'>
                        <img  src={logo} alt="no foto" />
                    </Link>
                </div>
                    <div className={s.blogSearch}>
                        <input className={s.search} type="search" placeholder='Поиск...' />
                    </div>
                <div className={s.menu}>
                    <div className={s.navBar}>
                        <Link to='/'>
                            <div className={s.news}></div>
                        </Link>
                        <Link to='/message'>
                            <div className={s.message}></div>
                        </Link>
                        <Link to='/friends'>
                            <div className={s.friends}></div>
                        </Link>
                        <Link to='/group'>
                            <div className={s.group}></div>
                        </Link>
                        <Link to='/music'>
                            <div className={s.music}></div>
                        </Link>
                    </div>
                </div>
                <div className={s.avatarka}>
                    <Link to="/profile"> <img src={ava} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}
export default Header