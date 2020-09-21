import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";



class App extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        {/* <Route path="/createrequest" component={CreateRequest} /> */}
      </Switch>
    );
  }
}

export default App;
