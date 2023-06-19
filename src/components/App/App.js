import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import InfoMessagePopup from '../InfoMessagePopup/InfoMessagePopup';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';


const App = () => {
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [popupMessage, setPopupMessage] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = React.useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const [isCheckedSavedMovies, setIsCheckedSavedMovies] = React.useState(false);
  const [notFoundSavedMovies, setNotFoundSavedMovies] = React.useState(false);

  const location = useLocation().pathname;
  const navigate = useNavigate();

  function handleRegister({ name, email, password }) {
    auth.registration(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        setPopupMessage(err);
        setIsPopupOpen(true);
      })
  }

  function handleLogin(userData) {
    auth.login(userData.email, userData.password)
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

  function closePopup() {
    setIsPopupOpen(!isPopupOpen);
    setPopupMessage('');
  };

  function searchMovies(request, movies) {
    if (request.trim().length === 0) {
      setPopupMessage('Введите запрос');
      setIsPopupOpen(true);
      return;
    }

    const listFilms = searchingMovies(request, movies);
    if (listFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setSearchedMovies(listFilms);
      setFoundMovies(listFilms);
      localStorage.setItem('searchedText', request);
      localStorage.setItem('movies', JSON.stringify(listFilms));
      return;
    }
    localStorage.setItem('searchedText', request);
    localStorage.setItem('checkboxMovies', isChecked);

    setSearchedMovies(listFilms);

    const listCheckboxFilms = filterShortMovies(listFilms);

    setFoundMovies(isChecked ? listCheckboxFilms : listFilms);

    localStorage.setItem('movies', JSON.stringify(isChecked ? listCheckboxFilms : listFilms));

    if (isChecked && listCheckboxFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setNotFound(true);
    }
  }

 
    function handleGetMovies({ request }) {
      if (movies.length === 0) {
        setIsLoading(true);
        moviesApi.getMovies()
          .then(movies => {
            setMovies(movies);
            searchMovies(request, movies);
          })
          .catch(() => {
            setPopupMessage('Произошла ошибка.');
            setIsPopupOpen(true);
          })
          .finally(() => {
            setIsLoading(false);
          })
      } else {
        searchMovies(request, movies);
      }
    }


  function searchingMovies(request, movies) {
    const searchRequest = request.toLowerCase().trim();
    return movies.filter(movie => movie.nameRU.toLowerCase().includes(searchRequest));
  }


  function filterShortMovies(movies) {
    return movies.filter(movie => movie.duration < 40);
  }




  function toggleCheckboxMovies() {
    const listCheckboxFilms = filterShortMovies(searchedMovies);
    setIsChecked(!isChecked);
    if (!isChecked) {
      if (notFound || (listCheckboxFilms.length === 0)) {
        setPopupMessage('Ничего не найдено');
        setIsPopupOpen(true);
      }
      setFoundMovies(listCheckboxFilms);
      setNotFound(false);
    } else {
      if (searchedMovies.length === 0) {
        setPopupMessage('Ничего не найдено');
        setIsPopupOpen(true);
      }
      setFoundMovies(searchedMovies);
    }
    localStorage.setItem('checkboxMovies', !isChecked);
  }

  React.useEffect(() => {
    if (localStorage.getItem('movies')) {
      setSearchedMovies(JSON.parse(localStorage.getItem('movies')));
      if (localStorage.getItem('checkboxMovies') === 'true') {
        setFoundMovies(filterShortMovies(JSON.parse(localStorage.getItem('movies'))));
      } else {
        setFoundMovies(JSON.parse(localStorage.getItem('movies')));
      }
    }
  }, [location]);


  function toggleLikeMovie(movie) {
    const isLiked = savedMovies.some(item => item.movieId === movie.id);
  
    const getSavedMovie = () => savedMovies.find(item => item.movieId === movie.id);
  
    if (isLiked) {
      mainApi.deleteMovie(getSavedMovie()._id)
        .then(() => {
          setSavedMovies(savedMovies.filter(item => item.movieId !== movie.id));
          setFoundSavedMovies(foundSavedMovies.filter(item => item.movieId !== movie.id));
        })
        .catch(err => {
          setPopupMessage(err);
          setIsPopupOpen(true);
        });
    } else {
      mainApi.toggleLikeMovie(movie)
        .then(newSavedMovie => {
          setSavedMovies([newSavedMovie, ...savedMovies]);
          setFoundSavedMovies([newSavedMovie, ...foundSavedMovies]);
        })
        .catch(err => {
          setPopupMessage(err);
          setIsPopupOpen(true);
        });
    }
  }
  

  function deleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item => movie._id !== item._id));
        setFoundSavedMovies(savedMovies.filter(item => movie._id !== item._id));
      })
      .catch((err) => {
        setPopupMessage(err);
        setIsPopupOpen(true);
      });
  }

  function handleSaveMovie({ request }) {
    searchSavedMovies(request, savedMovies);
  }

  function searchSavedMovies(request, movies) {
    if (request.trim().length === 0) {
      setPopupMessage('Введите запрос');
      setIsPopupOpen(true);
      return;
    }

    const listFilms = searchingMovies(request, movies);
    if (listFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setSearchedSavedMovies(listFilms);
      setFoundSavedMovies(listFilms);
      return;
    }

    setSearchedSavedMovies(listFilms);

    const listCheckboxFilms = filterShortMovies(listFilms);

    setFoundSavedMovies(
      isCheckedSavedMovies ? listCheckboxFilms : listFilms
    );

    if (isCheckedSavedMovies && listCheckboxFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setNotFoundSavedMovies(true);
    }
  }

  function toggleCheckboxSavedMovies() {
    const updatedCheckedSavedMovies = !isCheckedSavedMovies;
    setIsCheckedSavedMovies(updatedCheckedSavedMovies);

    const listCheckboxFilms = updatedCheckedSavedMovies
      ? filterShortMovies(savedMovies)
      : savedMovies;
  
    setFoundSavedMovies(listCheckboxFilms);
  
    if (updatedCheckedSavedMovies && listCheckboxFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
    }
  }
  
  
  


  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getUser(jwt).then((res) => {
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


  function signOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/');
    setFoundMovies([]);
  }


  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([user, movies]) => {
          setCurrentUser(user);
          setSavedMovies(movies);
          setFoundSavedMovies(movies);
          setSearchedSavedMovies(movies);
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
                onSignOut={signOut}
                onUpdateUser={handleUpdateUser}
              />}
          />
          <Route path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                movies={foundMovies}
                onMovieSave={toggleLikeMovie}
                setIsChecked={setIsChecked}
                savedMovies={savedMovies}
                handleSubmitForm={handleGetMovies}
                handleCheckbox={toggleCheckboxMovies}
                isChecked={isChecked}
                isLoading={isLoading}
              />}
          />
          <Route path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={foundSavedMovies}
                handleSubmitForm={handleSaveMovie}
                handleCheckbox={toggleCheckboxSavedMovies}
                isChecked={isCheckedSavedMovies}
                onMovieDelete={deleteMovie}
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