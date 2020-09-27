import React, {Component, useEffect, useState} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import axios from 'axios';
import {
  UserContext,
  UserLatContext,
  UserLngContext,
  AllRequestContext,
} from "./ContextFile";




const App = () =>  {
  
  const [userData, setUserData] = useState({
    token: null,
    user: null,
    isLoggedIn: null
  })



  const [userLat, setUserLat] = useState(0)
  const [queryLng, setQueryLng] = useState(0)
  const [allRequest, setAllRequest] = useState([])

  useEffect(() => {
    
  },[])

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
