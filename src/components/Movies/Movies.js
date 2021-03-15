import React from 'react';
import PropTypes from 'prop-types';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';
import Preloader from '../Preloader/Preloader';
import getNumberOfMovies from '../../utils/getNumberOfMovies';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';

function Movies({
  isSaved,
  handleMovieBtnClick,
  movies,
  isLoading,
  width,
  handleSearchBtn,
  cleanFilter,
  isSavedMovie,
  isSorted,
  setIsSorted,
}) {
  const [searchText, setSearchText] = React.useState('');
  const [isShortFilm, setIsShortFilm] = React.useState(false);
  const [limit, setLimit] = React.useState(getNumberOfMovies(width));
  const [step, setStep] = React.useState(0);

  React.useEffect(
    () => () => {
      cleanFilter();
    },
    [],
  );

  function handleCheckBox() {
    setIsSorted(true);
    setIsShortFilm(!isShortFilm);
  }

  function handleShowMoreBtn() {
    setLimit(limit + step);
  }

  function filterShortMovies(moviesArr) {
    return moviesArr.filter(movie =>
      isShortFilm ? movie.duration <= 40 : true,
    );
  }

  function handleFilterMovies() {
    setIsSorted(true);
    handleSearchBtn(searchText);
  }

  React.useEffect(() => {
    setStep(getNumberOfMovies(width));
  }, [width]);

  React.useEffect(() => {
    setLimit(getNumberOfMovies(width));
  }, [movies]);

  return (
    <main className="movies">
      <SearchForm
        isShortFilm={isShortFilm}
        handleCheckBox={handleCheckBox}
        handleSearchBtn={handleFilterMovies}
        setSearchText={setSearchText}
        searchText={searchText}
      />
      {isLoading && <Preloader />}
      {movies.length === 0 && isSaved && !isSorted && (
        <p className="movies__nothing-saved">
          Пока не сохранено ни одного фильма
        </p>
      )}
      {filterShortMovies(movies).length === 0 && isSorted && !isLoading && (
        <MoviesNotFound />
      )}
      {
        <MoviesList
          limit={limit}
          moviesList={filterShortMovies(movies)}
          isSaved={isSaved}
          handleMovieBtnClick={handleMovieBtnClick}
          isSavedMovie={isSavedMovie}
        />
      }
      {filterShortMovies(movies).length > limit && (
        <button className="movies__show-more" onClick={handleShowMoreBtn}>
          Еще
        </button>
      )}
    </main>
  );
}

Movies.propTypes = {
  isSaved: PropTypes.bool,
  handleMovieBtnClick: PropTypes.func,
  movies: PropTypes.array,
  getMovies: PropTypes.func,
  isLoading: PropTypes.bool,
  handleSearchBtn: PropTypes.func,
  width: PropTypes.number,
  filterMovies: PropTypes.func,
  cleanFilter: PropTypes.func,
  isSorted: PropTypes.bool,
  isSavedMovie: PropTypes.func,
  setIsSorted: PropTypes.func,
};

export default Movies;
