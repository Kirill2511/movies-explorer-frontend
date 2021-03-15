import React from 'react';
import PropTypes from 'prop-types';
import './FormErrorMessage.css';

function FormErrorMessage({ errorMsg, isError }) {
  const formErrorActiveSelector = isError ? 'form-error-message_active' : '';
  return (
    <p className={`form-error-message ${formErrorActiveSelector}`}>
      {errorMsg}
    </p>
  );
}

FormErrorMessage.propTypes = {
  errorMsg: PropTypes.string,
  isError: PropTypes.bool,
};

export default FormErrorMessage;
