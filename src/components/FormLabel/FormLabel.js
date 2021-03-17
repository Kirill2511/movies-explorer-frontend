import React from 'react';
import PropTypes from 'prop-types';
import './FormLabel.css';

const FormLabel = ({ label, name, children }) => (
  <label className="form-label" htmlFor={name}>
    <span className="form-label__text">{label}</span>
    {children}
  </label>
);

FormLabel.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element,
  name: PropTypes.string,
};

export default FormLabel;
