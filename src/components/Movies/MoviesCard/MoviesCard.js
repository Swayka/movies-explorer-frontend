function MoviesCard({ movie, isMovieSaved, isSavedMoviesPage, onMovieSave, onMovieDelete }) {
  const hours = Math.floor(movie.duration / 60);
  const minutes = Math.floor(movie.duration - (hours * 60));

  function handleMovieSave() {
    onMovieSave(movie);
  };

  function handleMovieDelete() {
    onMovieDelete(movie);
  };

  return (
    <li className="moviescard">
      <a href={movie.trailerLink} className='card__link' target='_blank' rel='noreferrer'>
        <img className="moviescard__image" src={isSavedMoviesPage ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`} alt={`${movie.nameRU}`} />
      </a>
      <div className="moviescard__info" >
        <h4 className="moviescard__name">{movie.nameRU}</h4>

        {isSavedMoviesPage ? <button className='moviescard__delete-movie' type='button' onClick={handleMovieDelete} />
          : <button className={!isMovieSaved ? 'moviescard__save-button' : 'moviescard__save-button_active'} type='button' onClick={handleMovieSave}></button>}
      </div>
      <p className="moviescard__duration">{`${hours}ч${minutes}м`}</p>
    </li>
  )
}

export default MoviesCard;