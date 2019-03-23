import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Test from './pages/Test';

import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={'/'} component={withRouter(Home)} />
        <Route path={'/sign-in/'} component={withRouter(SignIn)} />
        <Route path={'/test/'} component={withRouter(Test)} />
      </Switch>
    );
  }
}

export default App;
