import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing/Landing'
import { Switch, Route, withRouter } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import "semantic-ui-css/semantic.min.css";
import Sittersindex from './Components/Sittersindex/Sittersindex'
import Login from './Components/Login/Login'



class App extends Component {
  render() {

    return (
      <body>
        <Nav />
        <Switch>
          <Route exact path={'/home'} component={ () => <Login/>} />
          <Route exact path={'/sitters'} component={() => <Sittersindex />} />
        </Switch>
      </body>
    )
  }
}

export default App;
