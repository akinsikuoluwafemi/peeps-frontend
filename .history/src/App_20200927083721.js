import React, {Component, useState} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import axios from 'axios';
import {
  UserContext,
  QueryLatContext,
  QueryLngContext,
  AllRequestContext,
} from "./ContextFile";




const App = () =>  {
  
  const [userData, setUserData] = useState({
    token: null,
    user: null,
    isLoggedIn: null
  })

  const [queryLat, setQueryLat] = useState(0)
  const [queryLng, setQueryLng] = useState(0)
  const [allRequest, setAllRequest] 

    return (
      <Switch>
        <UserContext.Provider value={{userData, setUserData}}>
          <Route exact path="/" component={Home} />

          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </UserContext.Provider>
      </Switch>
    );
  
}

export default App;
