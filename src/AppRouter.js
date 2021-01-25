import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/404';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/some" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
