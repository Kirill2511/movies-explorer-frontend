import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.css';
import Movie from '../Movie/Movie';

function MoviesList({ moviesList, isSaved, handleMovieBtnClick }) {
  return (
    <ul className="movies-list">
      {moviesList.map((film) => (
        <li key={film.id}>
          <Movie
            movieData={film}
            isSaved={isSaved}
            handleMovieBtnClick={handleMovieBtnClick}
          />
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  moviesList: PropTypes.array,
  isSaved: PropTypes.bool,
  handleMovieBtnClick: PropTypes.func,
};

export default MoviesList;
