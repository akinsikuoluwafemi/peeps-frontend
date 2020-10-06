import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import axios from 'axios';
import {UserContext} from './ContextFile'


const App = () =>  {
  

    return (
      <Switch>
        <UserContext.
        <Route exact path="/" component={Home} />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login}  /> 


      </Switch>
    );
  
}

export default App;