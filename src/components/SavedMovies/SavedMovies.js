import SearchForm from '../../components/Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { savedmovies } from '../../utils/constants';
import Footer from '../Footer/Footer';

function SavedMovies(props) {

  return (
    <section className="savedmovies">
      <SearchForm />
      <div className="savedmovies__line"></div>
      <MoviesCardList movies={savedmovies} />
      <Footer />
    </section>
  )
}

export default SavedMovies; 