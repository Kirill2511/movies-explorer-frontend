import React from 'react';
import PropTypes from 'prop-types';
import './FilterCheckBox.css';

function FilterCheckBox({ isShortFilm, handleCheckBox }) {
  const labelActiveSelector = isShortFilm ? 'filter-checkbox__label_active' : '';
  return (
    <div className="filter-checkbox">
      <label className={`filter-checkbox__label ${labelActiveSelector}`} htmlFor="filtercheckbox">
        <input className="filter-checkbox__input" type="checkbox" checked={isShortFilm} onChange={handleCheckBox} id="filtercheckbox"/>
      </label>
      <span className="filter-checkbox__text">
        Короткометражки
      </span>
  </div>
  );
}

FilterCheckBox.propTypes = {
  isShortFilm: PropTypes.bool,
  handleCheckBox: PropTypes.func,
};

export default FilterCheckBox;
