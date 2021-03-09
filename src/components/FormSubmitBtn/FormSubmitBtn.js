import React from 'react';
import PropTypes from 'prop-types';
import './FormSubmitBtn.css';

function FormSubmitBtn({ text, isDisabledBtn }) {
  const btnDisabledSelector = isDisabledBtn ? 'form-submit-btn_disabled' : '';
  return (
    <button type="submit" className={`form-submit-btn ${btnDisabledSelector}`}>{text}</button>
  );
}

FormSubmitBtn.propTypes = {
  text: PropTypes.string,
  isDisabledBtn: PropTypes.bool,
};

export default FormSubmitBtn;
