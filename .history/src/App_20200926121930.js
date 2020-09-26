import React, {Component, useState} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import axios from 'axios';
import {UserContext} from './ContextFile'


const App = () =>  {
  
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

    return (
      <Switch>
        <UserContext.Provider value={{}}>
          <Route exact path="/" component={Home} />

          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </UserContext.Provider>
      </Switch>
    );
  
}

export default App;
