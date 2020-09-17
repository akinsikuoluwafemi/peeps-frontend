import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";



function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => (
        <Home />
      )} />

      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      {/* <Route path="/createrequest" component={CreateRequest} /> */}
    </Switch>
  );
}

export default App;
