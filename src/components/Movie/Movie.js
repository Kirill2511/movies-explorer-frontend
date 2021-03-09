import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import SVG from 'react-inlinesvg';
import likeImg from '../../images/icon__COLOR_invisible.svg';
import deleteImg from '../../images/icon__COLOR_icon-main.svg';

function Movie({ movieData, isSaved, handleMovieBtnClick }) {
  const {
    link,
    title,
    duration,
    saved,
  } = movieData;
  const likeActiveSelector = saved ? 'movie__like_active' : '';
  const movieSelector = isSaved ? 'movie_type_saved' : '';
  return (
    <article className={`movie ${movieSelector}`}>
      <img className="movie__cover" src={link} alt={title}/>
      <div className="movie__info">
        <h5 className="movie__title">{title}</h5>
        <button className={'movie__btn'} onClick={handleMovieBtnClick}>
          { isSaved
            ? <SVG className="movie__delete" src={deleteImg}/>
            : <SVG className={`movie__like ${likeActiveSelector}`} src={likeImg}/>
          }
        </button>
        <div className="movie__break"></div>
        <p className="movie__duration">{duration}</p>
      </div>
    </article>
  );
}

Movie.propTypes = {
  movieData: PropTypes.object,
  isSaved: PropTypes.bool,
  handleMovieBtnClick: PropTypes.func,
};

export default Movie;
