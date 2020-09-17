import React, {useContext,useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import { RequestContext } from './context';



function App() {
  



  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Home {...props} loggedInStatus={isLoggedin} />}
      />

      <Route
        path="/signup"
        render={(props) => (
          <Signup
            {...props}
            loggedInStatus={isLoggedin}
            handleLogin={handleLogin}
          />
        )}
      />

      <Route
        path="/login"
        render={(props) => (
          <Login
            {...props}
            loggedInStatus={isLoggedin}
            handleLogin={handleLogin}
          />
        )}
      />

      {/* <Route path="/createrequest" component={CreateRequest} /> */}
    </Switch>
  );
}

export default App;