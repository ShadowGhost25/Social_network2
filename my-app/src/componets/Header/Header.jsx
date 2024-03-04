import s from './headers.module.css'
import logo from './img/Logo.png'
import ava from './img/Ava.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.foto}>
                <Link to='/'>
                    <img style={{margin: "0px 10px"}} src={logo} alt="no foto" />
                </Link>
            </div>
            <div className={s.blogSearch}>
                <input className={s.search} type="search" placeholder='Поиск...' />
            </div>
            <div className={s.menu}>
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
            <div className={s.avatarka}>
                <Link to="/profile"> <img style={{margin: "0px 10px"}} src={ava} alt="" /></Link>
            </div>
        </div>
    )
}
export default Header