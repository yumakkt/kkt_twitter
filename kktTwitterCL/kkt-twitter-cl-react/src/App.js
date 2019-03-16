import React, {
  Component
} from 'react';
import './App.css';
import Home from './pages/Home'
import User from './pages/User'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={'/user/'} component={User} />
          <Route exact path={'/'} component={Home} />
        </Switch>
      </Router>
    )
  }
}


export default App;