import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {

  const [isSaved, setIsSaved] = useState(true);
  const location = useLocation().pathname;
  const isMovies = location === '/movies';
  const saveButtonClassName = isMovies ? (`moviescard__save-button ${isSaved ? '' : 'moviescard__save-button_active'}`) : ('moviescard__delete-movie');

  function handleSave() {
    if (isSaved) {
      setIsSaved(false);
    } else {
      setIsSaved(true);
    }
  }

  return (
    <li className="moviescard">
      <img className="moviescard__image" alt="фото" src={props.movieLink} />

      <div className="moviescard__info" >
        <h4 className="moviescard__name">{props.movieName}</h4>
        <button className={saveButtonClassName} type="button" onClick={handleSave}></button>
      </div>
      <p className="moviescard__duration">{props.movieDuration}</p>
    </li>
  )
}

export default MoviesCard;