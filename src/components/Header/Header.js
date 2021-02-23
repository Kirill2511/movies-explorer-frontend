import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../images/logo.svg';


function Header({ valueTitle, valueButtons}) {
  return (
    <header className="header">
      <div className="header__content">
        <Logo className="header__logo" />
        <div className="header__profile">
          <button type="button" className="header__title">{valueTitle}</button>
          <button type="button" className="header__button">{valueButtons}</button>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  valueButtons: 'Войти',
  valueTitle: 'Регистрация'
}

Header.propTypes = {
  valueTitle: PropTypes.string,
  valueButtons: PropTypes.string
}

export default Header;
