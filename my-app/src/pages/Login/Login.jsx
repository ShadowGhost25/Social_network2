import s from './login.module.css'
import logo from '../../componets/Header/img/Logo.png'
import i from './img/i.png'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
const Login = () => {
    // const dispatch = useDispatch()

    // const handleSubmit = useForm({
    //     defaultValues:{
    //         email: 'test2@gmail.com',
    //         password: '12345',
    //     },
    //     mode: 'onChange'
    // })

    // const onSubmit = async (values) =>{
    //     const data = await dispatch
    // }
    return (
        <div className={s.login}>
            <div className={s.loginHistory}>
                <div className={s.test}>
                    <img className={s.logo} src={logo} alt="no logo" />
                    <div>
                        <h1>Недавние входы</h1>
                        <p>Нажмите на изображение или добавьте аккаунты.</p>
                        <Link to="/">
                            <div className={s.blogAuth}>
                                <img className={s.imgI} src={i} alt="" />
                                <text>
                                    Илья
                                </text>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={s.formLogin}>
                    <div>
                        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                        <h2>Авторизация</h2>
                        <input className={s.input} type="email" placeholder='Почта' />
                        <br />
                        <input className={s.input} type="password" placeholder='Пароль' />
                        <br />
                        <button className={s.buttonLogin}>
                            Войти
                        </button>
                        <div>
                            <Link className={s.register} to='/register'>Зарегистрироваться</Link>
                        </div>
                        {/* </form>  */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login