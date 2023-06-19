import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isSavedMoviesPage, movies, savedMovies, onMovieSave, onMovieDelete }) {
  const [showedMovies, setShowedMovies] = React.useState(movies);
  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

  function getWindowWidth() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  function getMoreMovies() {
    if (windowWidth.innerWidth > 1279) {
      setShowedMovies(movies.slice(0, showedMovies.length + 4))
    } else if (windowWidth.innerWidth < 1280 && windowWidth.innerWidth > 989) {
      setShowedMovies(movies.slice(0, showedMovies.length + 3))
    } else if (windowWidth.innerWidth < 1280 && windowWidth.innerWidth > 639) {
      setShowedMovies(movies.slice(0, showedMovies.length + 2))
    } else {
      setShowedMovies(movies.slice(0, showedMovies.length + 5))
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
    if (windowWidth.innerWidth > 1279) {
      setShowedMovies(movies.slice(0, 16))
    } else if (windowWidth.innerWidth < 1280 && windowWidth.innerWidth > 989) {
      setShowedMovies(movies.slice(0, 9));
    } else if (windowWidth.innerWidth <= 989 && windowWidth.innerWidth > 639) {
      setShowedMovies(movies.slice(0, 8));
    } else if (windowWidth.innerWidth <= 639) {
      setShowedMovies(movies.slice(0, 5));
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
