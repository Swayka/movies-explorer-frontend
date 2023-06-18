import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import moviesApi from '../../utils/MoviesApi';
import InfoMessagePopup from '../InfoMessagePopup/InfoMessagePopup';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const App = () => {

  const [movies, setMovies] = React.useState([]);
  const [seachedMovies, setSeachedMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [popupMessage, setPopupMessage] = React.useState('');

  const location = useLocation().pathname;

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [seachedSavedMovies, setSeachedSavedMovies] = React.useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const [isCheckedSavedMovies, setIsCheckedSavedMovies] = React.useState(false);
  const [notFoundSavedMovies, setNotFoundSavedMovies] = React.useState(false);

  const navigate = useNavigate();



  function closePopup() {
    setIsPopupOpen(!isPopupOpen);
    setPopupMessage('');
  };



  function handleSubmitGetMovies({ request }) {
    if (movies.length === 0) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then(movies => {
          setMovies(movies);
          seachMovies(request, movies);
        })
        .catch(() => {
          setPopupMessage('Во время запроса произошла ошибка.');
          setIsPopupOpen(true);
        })
        .finally(() => {
          setIsLoading(false);
        })
    } else {
      seachMovies(request, movies);
    }
  }


  function filterMovies(request, movies) {
    return movies.filter(movie => movie.nameRU.toLowerCase().trim().includes(request.toLowerCase().trim()));
  }

  function filterCheckboxMovies(movies) {
    return movies.filter(movie => movie.duration < 40);
  }

  function seachMovies(request, movies) {
    if (request.trim().length === 0) {
      setPopupMessage('Введите запрос');
      setIsPopupOpen(true);
      return;
    }

    const listFilms = filterMovies(request, movies);
    if (listFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setSeachedMovies(listFilms);
      setFoundMovies(listFilms);
      localStorage.setItem('searchedText', request);
      localStorage.setItem('movies', JSON.stringify(listFilms));
      return;
    }

    localStorage.setItem('searchedText', request);
    localStorage.setItem('checkboxMovies', isChecked);

    setSeachedMovies(listFilms);

    const listCheckboxFilms = filterCheckboxMovies(listFilms);

    setFoundMovies(isChecked ? listCheckboxFilms : listFilms);

    localStorage.setItem('movies', JSON.stringify(isChecked ? listCheckboxFilms : listFilms));

    if (isChecked && listCheckboxFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setNotFound(true);
    }
  }

  function handleCheckboxMovies() {
    const listCheckboxFilms = filterCheckboxMovies(seachedMovies);
    setIsChecked(!isChecked);
    if (!isChecked) {
      if (notFound || (listCheckboxFilms.length === 0)) {
        setPopupMessage('Ничего не найдено');
        setIsPopupOpen(true);
      }
      setFoundMovies(listCheckboxFilms);
      setNotFound(false);
    } else {
      if (seachedMovies.length === 0) {
        setPopupMessage('Ничего не найдено');
        setIsPopupOpen(true);
      }
      setFoundMovies(seachedMovies);
    }
    localStorage.setItem('checkboxMovies', !isChecked);
  }

  React.useEffect(() => {
    if (localStorage.getItem('movies')) {
      setSeachedMovies(JSON.parse(localStorage.getItem('movies')));
      if (localStorage.getItem('checkboxMovies') === 'true') {
        setFoundMovies(filterCheckboxMovies(JSON.parse(localStorage.getItem('movies'))));
      } else {
        setFoundMovies(JSON.parse(localStorage.getItem('movies')));
      }
    }
  }, [location]);


  function handleMovieLike(movie) {
    const isLiked = savedMovies.some(item => item.movieId === movie.id);
    function getSavedMovie() {
      let savedMovie;
      savedMovies.forEach((item) => {
        if (item.movieId === movie.id) {
          savedMovie = item;
        } else {
          return;
        }
      });
      return savedMovie;
    }

    if (isLiked) {
      mainApi.deleteMovieItem(getSavedMovie()._id)
        .then((movie) => {
          setSavedMovies(savedMovies.filter(item => movie._id !== item._id));
          setFoundSavedMovies(savedMovies.filter(item => movie._id !== item._id));
        })
        .catch((err) => {
          setPopupMessage(err);
          setIsPopupOpen(true);
        })
    } else {
      mainApi.changeLikeMovieStatus(movie)
        .then((newSavedMovie) => {
          setSavedMovies([newSavedMovie, ...savedMovies]);
          setFoundSavedMovies([newSavedMovie, ...savedMovies]);
        })
        .catch((err) => {
          setPopupMessage(err);
          setIsPopupOpen(true);
        })
    }
  }

  function deleteMovieItem(movie) {
    mainApi.deleteMovieItem(movie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item => movie._id !== item._id));
        setFoundSavedMovies(savedMovies.filter(item => movie._id !== item._id));
      })
      .catch((err) => {
        setPopupMessage(err);
        setIsPopupOpen(true);
      });
  }

  function handleSubmitSavedMovies({ request }) {
    seachSavedMovies(request, savedMovies);
  }

  function seachSavedMovies(request, movies) {
    if (request.trim().length === 0) {
      setPopupMessage('Введите запрос');
      setIsPopupOpen(true);
      return;
    }

    const listFilms = filterMovies(request, movies);
    if (listFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setSeachedSavedMovies(listFilms);
      setFoundSavedMovies(listFilms);
      return;
    }

    setSeachedSavedMovies(listFilms);

    const listCheckboxFilms = filterCheckboxMovies(listFilms);

    setFoundSavedMovies(
      isCheckedSavedMovies ? listCheckboxFilms : listFilms
    );

    if (isCheckedSavedMovies && listCheckboxFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setNotFoundSavedMovies(true);
    }
  }

  function handleCheckboxSavedMovies() {
    const listCheckboxFilms = filterCheckboxMovies(seachedSavedMovies);
    setIsCheckedSavedMovies(!isCheckedSavedMovies);
    if (!isCheckedSavedMovies) {
      if (notFoundSavedMovies || (listCheckboxFilms.length === 0 && savedMovies.length !== 0)) {
        setPopupMessage('Ничего не найдено');
        setIsPopupOpen(true);
      }
      setFoundSavedMovies(listCheckboxFilms);
      setNotFoundSavedMovies(false);
    } else {
      if (seachedSavedMovies.length === 0) {
        setPopupMessage('Ничего не найдено');
        setIsPopupOpen(true);
      }
      setFoundSavedMovies(seachedSavedMovies);
    }
  }


  function handleRegister({ name, email, password }) {
    auth.register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        setPopupMessage(err);
        setIsPopupOpen(true);
      })
  }

  function handleLogin(userData) {
    auth.authorize(userData.email, userData.password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate('/movies')

        }
      })
      .catch((err) => {
        setPopupMessage(err);
        setIsPopupOpen(true);
      })
  }

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
          navigate(location);
        }
      })
        .catch((err) => {
          setPopupMessage(err);
          setIsPopupOpen(true);
        })
    }
  }

  React.useEffect(() => {
    checkToken();
  }, []);


  function onSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/');
    setFoundMovies([]);
  }


  function handleUpdateUser({ name, email }) {
    mainApi.updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        setPopupMessage(err);
        setIsPopupOpen(true);
      })
  }


  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      Promise.all([mainApi.getUserInfo(), mainApi.getInitialMovies()])
        .then(([user, movies]) => {
          setCurrentUser(user);
          setSavedMovies(movies);
          setFoundSavedMovies(movies);
          setSeachedSavedMovies(movies);
        })
        .catch((err) => {
          setPopupMessage(err);
          setIsPopupOpen(true);
        })
    }
  }, [loggedIn]);




  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/signin"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/signup"
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onSignOut={onSignOut}
                onUpdateUser={handleUpdateUser}
              />}
          />
          <Route path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                movies={foundMovies}
                savedMovies={savedMovies}
                handleSubmitForm={handleSubmitGetMovies}
                handleCheckbox={handleCheckboxMovies}
                isChecked={isChecked}
                isLoading={isLoading}
                onMovieSave={handleMovieLike}
                setIsChecked={setIsChecked}
              />}
          />
          <Route path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={foundSavedMovies}
                handleSubmitForm={handleSubmitSavedMovies}
                handleCheckbox={handleCheckboxSavedMovies}
                isChecked={isCheckedSavedMovies}
                onMovieDelete={deleteMovieItem}
                setIsChecked={setIsChecked}
              />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <InfoMessagePopup message={popupMessage} isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
