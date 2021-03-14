import './PageNotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="page-not-found">
    <h3 className="page-not-found__title">404</h3>
    <p className="page-not-found__subtitle">Страница не найдена</p>
    <Link to="/" className="page-not-found__back-btn">Назад</Link>
  </div>
);

export default PageNotFound;
