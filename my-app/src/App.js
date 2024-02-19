import Header from "./componets/Header/Header";
import Main from "./componets/Main/Main";
import s from './app.module.css'

function App() {
  return (
    <div className={s}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
