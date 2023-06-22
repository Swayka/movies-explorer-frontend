import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { DESKTOP_WIDTH, BIG_DESKTOP_WIDTH, BIG_TABLET_WIDTH, MOBILE_WIDTH, LIST_MOVIE_BIG_DESKTOP_WIDTH, LIST_MOVIE_BIG_TABLET_WIDTH, LIST_MOVIE_TABLET_WIDTH, LIST_MOVIE_MOBILE_WIDTH, ADD_MOVIES_BIG_DESKTOP_WIDTH, ADD_MOVIES_BIG_TABLET_WIDTH, ADD_MOVIES_TABLET_WIDTH, ADD_MOVIES_MOBILE_WIDTH } from '../../../utils/constants';

function MoviesCardList({ isSavedMoviesPage, movies, savedMovies, onMovieSave, onMovieDelete }) {
  const [showedMovies, setShowedMovies] = React.useState(movies);
  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

  function getWindowWidth() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  function getMoreMovies() {
    if (windowWidth.innerWidth > DESKTOP_WIDTH) {
      setShowedMovies(movies.slice(0, showedMovies.length + ADD_MOVIES_BIG_DESKTOP_WIDTH))
    } else if (windowWidth.innerWidth < BIG_DESKTOP_WIDTH && windowWidth.innerWidth > BIG_TABLET_WIDTH) {
      setShowedMovies(movies.slice(0, showedMovies.length + ADD_MOVIES_BIG_TABLET_WIDTH))
    } else if (windowWidth.innerWidth < BIG_DESKTOP_WIDTH && windowWidth.innerWidth > MOBILE_WIDTH) {
      setShowedMovies(movies.slice(0, showedMovies.length + ADD_MOVIES_TABLET_WIDTH))
    } else {
      setShowedMovies(movies.slice(0, showedMovies.length + ADD_MOVIES_MOBILE_WIDTH))
    }
  }

  function checkSavedMovie(movies, movie) {
    return movies.find((item) => {
      return item.movieId === (movie.id || movie.movieId);
    });
  }

  React.useEffect(() => {
    function handleWindowResize() {
      setTimeout(function () {
        setWindowWidth(getWindowWidth());
      }, 500)
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  React.useEffect(() => {
    if (windowWidth.innerWidth > DESKTOP_WIDTH) {
      setShowedMovies(movies.slice(0, LIST_MOVIE_BIG_DESKTOP_WIDTH))
    } else if (windowWidth.innerWidth < BIG_DESKTOP_WIDTH && windowWidth.innerWidth > BIG_TABLET_WIDTH) {
      setShowedMovies(movies.slice(0, LIST_MOVIE_BIG_TABLET_WIDTH));
    } else if (windowWidth.innerWidth <= BIG_TABLET_WIDTH && windowWidth.innerWidth > MOBILE_WIDTH) {
      setShowedMovies(movies.slice(0, LIST_MOVIE_TABLET_WIDTH));
    } else if (windowWidth.innerWidth <= MOBILE_WIDTH) {
      setShowedMovies(movies.slice(0, LIST_MOVIE_MOBILE_WIDTH));
    }
    else {
      setShowedMovies(movies);
    }
  }, [windowWidth, movies])

  return (
    <section className={movies.length === 0 ? 'moviescardlist moviescardlist_none' : 'moviescardlist'}>
      <div className="moviescardlist__cards">
        {isSavedMoviesPage
          ? savedMovies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={isSavedMoviesPage ? movie.movieId : movie.id}
              isMovieSaved={checkSavedMovie(savedMovies, movie)}
              isSavedMoviesPage={isSavedMoviesPage}
              onMovieSave={onMovieSave}
              onMovieDelete={onMovieDelete}
            />
          ))
          : showedMovies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={isSavedMoviesPage ? movie.movieId : movie.id}
              isMovieSaved={checkSavedMovie(savedMovies, movie)}
              isSavedMoviesPage={isSavedMoviesPage}
              onMovieSave={onMovieSave}
              onMovieDelete={onMovieDelete}
            />
          ))}

      </div>
      {isSavedMoviesPage ? <div className='movies-section'></div> : <button className={movies.length <= showedMovies.length ? 'movies-section_none' : 'movies-section__button'} onClick={getMoreMovies}>Ещё</button>}
    </section>
  )
}

export default MoviesCardList;
