import React from 'react';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import AccountLink from '../Navigation/Navigation';

function Header({ setsMobileMenuOpened }) {
  const history = useHistory();
  function openAccount() {
    history.push('/profile');
  }
  return (
    <header className="header">
      {/* TODO: Временно */}
      <nav className="header__nav">
        <Logo place={'header'}/>
      </nav>
      <nav className="header__nav">
        <Link className="header__link header__link_type_movies" to="/movies">Фильмы</Link>
        <Link className="header__link header__link_type_movies" to="/saved-movies">Сохраненные фильмы</Link>
        <Link className="header__link header__link_type_signup" to="/signup">Регистрация</Link>
        <Link className="header__link header__link_type_signin" to="/signin">Войти</Link>
        <AccountLink openAccount={openAccount} place={'header'}/>
        <BurgerMenu setsMobileMenuOpened={setsMobileMenuOpened}/>
      </nav>
    </header>
  );
}

Header.propTypes = {
  setsMobileMenuOpened: PropTypes.func,
};

export default Header;
