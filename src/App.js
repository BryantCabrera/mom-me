import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing/Landing'
import { Switch, Route, withRouter} from 'react-router-dom'
import Nav from './Components/Nav/Nav'




class App extends Component {
  render() {

    return (
      <div>
      <Nav/>
      <Switch>
      <Landing/>
      </Switch>
      </div>
    )
  }
}

export default App;
