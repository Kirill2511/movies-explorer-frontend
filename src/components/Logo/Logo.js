import React from 'react';
import './Logo.css';
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoImg from '../../images/logo.svg';

const Logo = ({ place }) => (
  <Link to="/" className={`logo logo_place_${place}`}>
    <SVG className="logo__image" src={logoImg} />
  </Link>
);

Logo.propTypes = {
  place: PropTypes.string,
};

export default Logo;
