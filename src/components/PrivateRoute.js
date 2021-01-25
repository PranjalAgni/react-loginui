import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../api/index';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
};

export default PrivateRoute;
