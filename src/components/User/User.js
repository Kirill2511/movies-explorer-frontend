import React from 'react';
import PropTypes from 'prop-types';
import './User.css';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import HaveAccount from '../HaveAccount/HaveAccount';

function User({ title, children }) {
  const location = useLocation();
  return (
    <div className="user">
      <div className="user-container">
        <Logo place="user"/>
        <h3 className="user__title">{title}</h3>
        {children}
        {location.pathname === '/signup' && <HaveAccount text={'Уже зарегистрированы?'} to={'/signin'} linkText={'Войти'}/>}
        {location.pathname === '/signin' && <HaveAccount text={'Ещё не зарегистрированы?'} to={'/signup'} linkText={'Регистрация'}/>}
      </div>
    </div>
  );
}

User.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default User;
