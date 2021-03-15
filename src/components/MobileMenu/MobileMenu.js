import './MobileMenu.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MobileLink from '../MobileLink/MobileLink';
import AccountLink from '../Navigation/Navigation';

function MobileMenu({ setsMobileMenuOpened, isMobileMenuOpened }) {
  const history = useHistory();
  const mobileMenuActiveSelector = isMobileMenuOpened
    ? 'mobile-menu_active'
    : '';
  function closeMobileMenu() {
    setsMobileMenuOpened(false);
  }
  function openAccount() {
    history.push('/profile');
    closeMobileMenu();
  }
  return (
    <div className={`mobile-menu ${mobileMenuActiveSelector}`}>
      <nav className="mobile-menu__navigation">
        <button className="mobile-menu__close-btn" onClick={closeMobileMenu} />
        <MobileLink
          setsMobileMenuOpened={setsMobileMenuOpened}
          path="/"
          linkText="Главная"
        />
        <MobileLink
          setsMobileMenuOpened={setsMobileMenuOpened}
          path="/movies"
          linkText="Фильмы"
        />
        <MobileLink
          setsMobileMenuOpened={setsMobileMenuOpened}
          path="/saved-movies"
          linkText="Сохраненные фильмы"
        />
        <AccountLink openAccount={openAccount} place={'mobile-menu'} />
      </nav>
    </div>
  );
}

MobileMenu.propTypes = {
  setsMobileMenuOpened: PropTypes.func,
  isMobileMenuOpened: PropTypes.bool,
};

export default MobileMenu;
