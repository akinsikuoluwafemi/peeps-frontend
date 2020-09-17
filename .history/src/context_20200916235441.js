import React, { Component, createContext } from "react";


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
  }
    
  handleLogin = (data) => {
      this.state({
          isLoggedin: true,
          user: data.user
      })
  }
    
    handleLogout = () => {
        
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
        value={{ ...this.state, getUserLocation: this.getUserLocation }}
      >
        {this.props.children}
      </RequestContext.Provider>
    );
  }
}

const RequestConsumer = RequestContext.Consumer;

export { RequestProvider, RequestConsumer, RequestContext };
