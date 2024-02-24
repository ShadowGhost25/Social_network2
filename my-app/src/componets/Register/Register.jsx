import s from './register.module.css'
import logo from '../Header/img/Logo.png'
import i from './img/i.png'
import { Link } from 'react-router-dom'
const Register = (props) => {
    return (
        <div className={s.login}>
            <div className={s.loginHistory}>
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
                            <h2>Регистрация</h2>
                            <input type="text" placeholder='Имя'/>
                            <br />
                            <input type="text" placeholder='Фамилия'/>
                            <br />
                            <input type="text" placeholder='Логин'/>
                            <br />
                            <input type="text" placeholder='Почта'/>
                            <br />
                            <input type="text" placeholder='Телефон'/>
                            <br />
                            <input type="password" placeholder='Пароль'/>
                            <br />
                            <input type="password" placeholder='Повторный пароль'/>
                            <br />
                            <button className={s.buttonRegister}>
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

export default Register