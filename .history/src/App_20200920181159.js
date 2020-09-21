import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import axios from 'axios';
import Create



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
 





  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
            />
          )}
        />

        <Route
          exact
          path="/signup"
          render={(props) => (
            <Signup
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              {...props}
            />
          )}
        />

        <Route path="/createrequest" component={CreateRequest} />
      </Switch>
    );
  }
}

export default App;
