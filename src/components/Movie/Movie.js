import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import SVG from 'react-inlinesvg';
import likeImg from '../../images/icon__COLOR_invisible.svg';
import deleteImg from '../../images/icon__COLOR_icon-delete.svg';
import formatDuration from '../../utils/formatDuration';

function Movie({ isSaved, movieData, handleMovieBtnClick, isSavedMovie }) {
  const yaApiUrl = 'https://api.nomoreparties.co';
  let likeActiveSelector;
  if (!isSaved) {
    likeActiveSelector = isSavedMovie(movieData) ? 'movie__like_active' : '';
  }
  const movieSelector = isSaved ? 'movie_type_saved' : '';
  const movieCoverSrc = movieData.image
    ? `${yaApiUrl}${movieData.image.url}`
    : '';
  function handleMovieClick() {
    handleMovieBtnClick(movieData);
  }
  return (
    <article className={`movie ${movieSelector}`}>
      <a
        className="student__link"
        href={movieData.trailerLink}
        target="_blank"
        rel="noreferrer"
        title={`Открыть трейлер фильма "${movieData.nameRU}" на youtube.com`}
      >
        <img
          className="movie__cover"
          src={movieCoverSrc}
          alt={movieData.nameRU}
        />
      </a>
      <div className="movie__info">
        <h5 className="movie__title">{movieData.nameRU}</h5>
        <button className={'movie__btn'} onClick={handleMovieClick}>
          {isSaved ? (
            <SVG className="movie__delete" src={deleteImg} />
          ) : (
            <SVG
              className={`movie__like ${likeActiveSelector}`}
              src={likeImg}
            />
          )}
        </button>
        <p className="movie__duration">{formatDuration(movieData.duration)}</p>
      </div>
    </article>
  );
}

Movie.propTypes = {
  movieData: PropTypes.object,
  isSaved: PropTypes.bool,
  handleMovieBtnClick: PropTypes.func,
  isSavedMovie: PropTypes.func,
};

export default Movie;
