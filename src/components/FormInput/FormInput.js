import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.css';

function FormInput({
  type,
  value,
  handleNameInput,
  isValid,
}) {
  const inputErrorSelector = isValid ? 'form-input_invalid' : '';
  return (
  <input className={`form-input ${inputErrorSelector}`} type={type} value={value || ''} onChange={handleNameInput}/>
  );
}

FormInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  handleNameInput: PropTypes.func,
  isValid: PropTypes.bool,
};

export default FormInput;
