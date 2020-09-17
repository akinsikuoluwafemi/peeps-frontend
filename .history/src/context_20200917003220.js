import React, { Component, createContext } from "react";
import axios from "axios";

const RequestContext = createContext();

class RequestProvider extends Component {
  state = {
    showChat: null,
    userLat: 0,
    userLng: 0,
    isLoggedin: false,
    user: {}
    
  };

  componentDidMount() {
    this.getUserLocation();
    this.loginStatus()
  }
    
  handleLogin = (data) => {
      this.state({
          isLoggedin: true,
          user: data.user
      })
  }
    
    handleLogout = () => {
        this.setState({
            isLoggedin: false,
            user: {}
        })
    }

    loginStatus = () => {
        axios.get('http://local:3001/logged_in', {withCredentials: true})
        .then(response => {
          if(response.data.logg)
          console.log(response)
        })
    }
    

  getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        let { latitude, longitude } = position.coords;
        this.setState({
          userLat: latitude,
          userLng: longitude,
        });
      },
      (error) => {
        if (error.code === 1) {
          // setLat(do something)
          // setLng(do something)
          alert(
            "Kindly allow location, for a more immersive experience with the app."
          );
          console.log(error);
        }
      }
    );
  };

  render() {
    return (
      <RequestContext.Provider
        value={{ ...this.state, getUserLocation: this.getUserLocation, loginStatus: this.loginStatus }}
      >
        {this.props.children}
      </RequestContext.Provider>
    );
  }
}

const RequestConsumer = RequestContext.Consumer;

export { RequestProvider, RequestConsumer, RequestContext };
