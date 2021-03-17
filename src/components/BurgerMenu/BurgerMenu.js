import './BurgerMenu.css';
import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import BurgerMenuImg from '../../images/icon__COLOR_icon-main.svg';

function BurgerMenu({ setsMobileMenuOpened }) {
  function openBurgerMenu() {
    setsMobileMenuOpened(true);
  }
  return (
    <button className="burger-menu" onClick={openBurgerMenu}>
      <SVG className="burger-menu__icon" src={BurgerMenuImg} />
    </button>
  );
}

BurgerMenu.propTypes = {
  setsMobileMenuOpened: PropTypes.func,
};

export default BurgerMenu;
