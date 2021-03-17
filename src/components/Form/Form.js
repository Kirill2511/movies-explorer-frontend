import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

function Form({ handleFormSubmit, children }) {
  return (
    <form className="form" onSubmit={handleFormSubmit} noValidate>
      {children}
    </form>
  );
}

Form.propTypes = {
  handleFormSubmit: PropTypes.func,
  children: PropTypes.array,
};

export default Form;
