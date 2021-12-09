import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from './AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={() => (auth.user ? children : <Redirect to='/login' />)}
    ></Route>
  );
};

export default PrivateRoute;