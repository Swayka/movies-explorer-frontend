import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { movies } from '../../utils/constants';
import Footer from "../Footer/Footer";

function Movies(props) {
  return (
    <section className="movies">
    <SearchForm />
    <div className="movies__line"></div>
    <MoviesCardList isSavedMovies={false} movies={movies} />
    <button className="movies__more-button" type="submit">Ещё</button>
    <Footer />
  </section>
  );
}

export default Movies;