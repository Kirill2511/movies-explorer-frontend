import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.css';
import Movie from '../Movie/Movie';

function MoviesList({
  moviesList,
  isSaved,
  handleMovieBtnClick,
  limit,
  isSavedMovie,
}) {
  const resultMovies = moviesList.slice(0, limit);
  return (
    <section className="movies-list">
      {resultMovies.map(film => (
        <Movie
          movieData={film}
          key={film.id}
          isSaved={isSaved}
          handleMovieBtnClick={handleMovieBtnClick}
          isSavedMovie={isSavedMovie}
        />
      ))}
    </section>
  );
}

MoviesList.propTypes = {
  moviesList: PropTypes.array,
  isSaved: PropTypes.bool,
  handleMovieBtnClick: PropTypes.func,
  limit: PropTypes.number,
  isSavedMovie: PropTypes.func,
};

export default MoviesList;
