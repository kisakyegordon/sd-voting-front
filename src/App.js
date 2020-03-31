import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ElectionList from './components/ElectionList';
import ElectionDetail from './components/ElectionDetail';
import Results from './components/Results';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    election: []
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/register' component={Register}/>
          <PrivateRoute exact path='/elections' component={ElectionList}/>
          <PrivateRoute path='/elections/:id' component={ElectionDetail}/>
          <PrivateRoute path='/results' component={Results}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
