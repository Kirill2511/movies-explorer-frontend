import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm({ isShortFilm, handleCheckBox }) {
  return (
    <>
    <form className="search-form">
      <input className="search-form__input" type="text" placeholder="Фильм"/>
      <button className="search-form__btn" type="submit">Найти</button>
    </form>
    <FilterCheckBox isShortFilm={isShortFilm} handleCheckBox={handleCheckBox}/>
    </>
  );
}

SearchForm.propTypes = {
  isShortFilm: PropTypes.bool,
  handleCheckBox: PropTypes.func,
};

export default SearchForm;
