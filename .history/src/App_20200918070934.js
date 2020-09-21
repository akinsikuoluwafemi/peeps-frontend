import React, {Component} from 'react';
import logo from './logo.svg';
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
      isLoggedIn: false,
      user: {},
    };
  }
 

  componentDidMount() {
    this.loginStatus();
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };

  loginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
        console.log(response)
      }, (error) => console.log('api errors: '))
      .catch((error) => console.log("api errors:", error));
  };

  render() {
    return (
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route
          exact
          path="/"
          render={(props) => (
            <Home {...props} loggedInStatus={this.state.isLoggedIn} />
          )}
        />

        <Route
          exact
          path="/signup"
          render={(props) => (
            <Signup
              {...props}
              handleLogin={this.handleLogin}
              loggedInStatus={this.state.isLoggedIn}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              {...props}
              handleLogin={this.handleLogin}
              loggedInStatus={this.state.isLoggedIn}
            />
          )}
        />

        {/* <Route path="/createrequest" component={CreateRequest} /> */}
      </Switch>
    );
  }
}

export default App;
