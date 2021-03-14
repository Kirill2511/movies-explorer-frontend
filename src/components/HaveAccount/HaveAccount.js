import React from 'react';
import PropTypes from 'prop-types';
import './HaveAccount.css';
import { Link } from 'react-router-dom';

const HaveAccount = ({ text, to, linkText }) => (
    <p className="have-account">
      {`${text} `}
      <Link to={to} className="have-account__link">{linkText}</Link>
    </p>
);

HaveAccount.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  linkText: PropTypes.string,
};

export default HaveAccount;
