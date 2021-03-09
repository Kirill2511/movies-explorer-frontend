import React from 'react';
import PropTypes from 'prop-types';
import './FormErrorMessage.css';

const FormErrorMessage = ({ errorMsg }) => (
  <p className="form-error-message">{errorMsg}</p>
);

FormErrorMessage.propTypes = {
  errorMsg: PropTypes.string,
};

export default FormErrorMessage;
