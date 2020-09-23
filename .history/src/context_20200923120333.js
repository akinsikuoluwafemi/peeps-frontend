import React, { Component, createContext } from "react";
import axios from "axios";

const RequestContext = createContext();

class RequestProvider extends Component {
  state = {
    showChat: null,
    userLat: 0,
    userLng: 0,
    allRquest: []
    

  };

  componentDidMount() {
    this.getUserLocation();
    this.getAllRequest()
  }


  getAllRequest = () => {
    fetch("http://localhost:3001/requests/")
      .then((response) => response.json())
      .then((data) => {
        // console.table(data, ["lat", "lng"]);
        let filteredReq = data.filter((item) => item.fulfilled === false);
        this.setState({ allRquest: filteredReq });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  countUnfulfilled = (array) => {
    for (var i = 0; i < array.length)
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
        value={{
          ...this.state,
          getUserLocation: this.getUserLocation,
          loginStatus: this.loginStatus,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
        }}
      >
        {this.props.children}
      </RequestContext.Provider>
    );
  }
}

const RequestConsumer = RequestContext.Consumer;

export { RequestProvider, RequestConsumer, RequestContext };
