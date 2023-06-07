import Header from "../Header/Header";
import { Route, Routes } from 'react-router-dom';
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

const App = () => {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login title="Рады видеть!" name="login" submitValue="Войти" question="Ещё не зарегистрированы?" link="Регистрация"/>} />
        <Route path="/signup" element={<Register title="Добро пожаловать!" name="register" labelName="Имя" submitValue="Зарегистрироваться" question="Уже зарегистрированы?" link="Войти" />} />
        <Route path="/profile" element={<Profile title="Привет, Виталий!" submitValue="Редактировать" exitBtn="Выйти из аккаунта" username="Виталий" useremail="pochta@yandex.ru"/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <BurgerMenu />
    </div>
  );
};

export default App;
