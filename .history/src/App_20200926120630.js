import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import axios from 'axios';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
 





  render() {
    return (
      <Switch>
        <Route exact path="/"  <Home  /> />

        <Route exact path="/signup"  <Signup  /> />
        <Route exact path="/login"  <Login  /> 


      </Switch>
    );
  }
}

export default App;
