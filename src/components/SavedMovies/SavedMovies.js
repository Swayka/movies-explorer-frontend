import SearchForm from '../../components/Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Header from "../Header/Header";

import Footer from '../Footer/Footer';

function SavedMovies({ loggedIn, savedMovies, handleSubmitForm, handleCheckbox, isChecked, onMovieDelete, setIsChecked}) {

  return (
    <section className="savedmovies">
      <Header loggedIn={loggedIn} />
      <SearchForm handleSubmitForm={handleSubmitForm} handleCheckbox={handleCheckbox} isChecked={isChecked} setIsChecked={setIsChecked} />
      <div className="savedmovies__line"></div>
      <MoviesCardList isSavedMoviesPage={true} movies={savedMovies} savedMovies={savedMovies} onMovieDelete={onMovieDelete} />
      <Footer />
    </section>
  )
}

export default SavedMovies; 