import s from './login.module.css'
import logo from '../Header/img/Logo.png'
import i from './img/i.png'
import { Link } from 'react-router-dom'
const Login = (props) => {
    return (
        <div className={s.login}>
            <div className={s.loginMain}>
                <div className={s.test}>
                    <img className={s.logo} src={logo} alt="no logo" />
                    <div>
                        <h1>Недавние входы</h1>
                        <p>Нажмите на изображение или добавьте аккаунты.</p>
                        <div className={s.blogAuth}>
                            <img className={s.imgI} src={i} alt="" />
                            <text>
                                Илья
                            </text>
                        </div>
                    </div>
                </div>
                <div className={s.formLogin}>
                    <div>
                        <form action="">
                            <h2>Авторизация</h2>
                            <input type="email" placeholder='Почта'/>
                            <br />
                            <input type="password" placeholder='Пароль'/>
                            <br />
                            <button>
                                Войти
                            </button>
                            <Link href=""></Link>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login