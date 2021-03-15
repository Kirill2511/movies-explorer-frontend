import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm({
  isShortFilm,
  handleCheckBox,
  handleSearchBtn,
  setSearchText,
  searchText,
}) {
  function handleSearchInput(event) {
    setSearchText(event.target.value);
  }
  function sortMovies(event) {
    event.preventDefault();
    handleSearchBtn(searchText);
    setSearchText('');
  }

  return (
    <>
      <form className="search-form" onSubmit={sortMovies}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          onChange={handleSearchInput}
          value={searchText}
          required
        />
        <button
          className="search-form__btn"
          type="submit"
          disabled={searchText.length < 1}
        >
          Найти
        </button>
      </form>
      <FilterCheckBox
        isShortFilm={isShortFilm}
        handleCheckBox={handleCheckBox}
      />
    </>
  );
}

SearchForm.propTypes = {
  isShortFilm: PropTypes.bool,
  handleCheckBox: PropTypes.func,
  onSubmit: PropTypes.func,
  handleSearchBtn: PropTypes.func,
  setSearchText: PropTypes.func,
  searchText: PropTypes.string,
};

export default SearchForm;
