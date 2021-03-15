import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  isLoggedIn,
  path,
  ...props
}) => (
  <Route path={path}>
    {() => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
  </Route>
);

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  path: PropTypes.string,
};

export default ProtectedRoute;
