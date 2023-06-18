import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader"
import Header from "../Header/Header";

function Movies({ loggedIn, movies, savedMovies, handleSubmitForm, handleCheckbox, isChecked, isLoading, onMovieSave, setIsChecked }) {
  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm handleSubmitForm={handleSubmitForm} handleCheckbox={handleCheckbox} isChecked={isChecked} setIsChecked={setIsChecked} />
      <div className="movies__line"></div>
      {isLoading ? <Preloader /> : <MoviesCardList isSavedMoviesPage={false} movies={movies} savedMovies={savedMovies} onMovieSave={onMovieSave} />}
      <Footer />
    </section>
  );
}

export default Movies;