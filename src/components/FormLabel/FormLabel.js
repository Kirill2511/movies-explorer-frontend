import React from 'react';
import PropTypes from 'prop-types';
import './FormLabel.css';

const FormLabel = ({ label, children }) => (
  <label className="form-label">
    <span className="form-label__text">{label}</span>
    {children}
  </label>
);

FormLabel.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element,
};

export default FormLabel;
