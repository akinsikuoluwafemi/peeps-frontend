import React, { Component, useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, useHistory, Redirect, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import axios from "axios";
import {
  UserContext,
  UserLatContext,
  UserLngContext,
  AllRequestContext,
} from "./ContextFile";
import NavigationDrawer from "./components/NavigationDrawer";
import Navbar from "./components/Navbar";
import Chat from './pages/'

const App = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    token: null,
    user: null,
    isLoggedIn: null,
  });

  const [userLat, setUserLat] = useState(0);
  const [userLng, setUserLng] = useState(0);
  const [allRequest, setAllRequest] = useState([]);

  useEffect(() => {
    checkedLoggedIn();
    getAllRequest();
    getUserLocation();
  }, []);

  console.log(userData);

  const checkedLoggedIn = () => {
    let token = localStorage.getItem("token");
    if (token) {
      console.log("there is a token");
      setUserData({
        isLoggedIn: true
      });
      history.push("/");
    } else {
      console.log("there is no token");
      // history.push("/login");

    }
    // console.log(token)
  };

  const getAllRequest =  () => {
    //  let req = fetch("http://localhost:3001/requests/", {
    //    headers: {
    //      Authorization: `Bearer ${localStorage.getItem("token")}`
    //    }
    //  })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // console.table(data, ["lat", "lng"]);
    //       let filteredReq = data.filter((item) => item.fulfilled === false);
    //       setAllRequest(filteredReq);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //     return req
    //   axios.get('http://localhost:3001/requests/', {
    //   headers: {
    //      Authorization: `Bearer ${localStorage.getItem("token")}`
    //    }
    // }).then(response => {
    //   let filteredReq = response.data.filter((item) => item.fulfilled === false);
    //       setAllRequest(filteredReq);
    //       console.log(allRequest)
    // }, (error) => {
    //   console.log(error)
    // })

    axios.get('http://localhost:3001/requests/')
      .then(response =>
      {
      let filteredReq = response.data.filter((item) => item.fulfilled === false);
          setAllRequest(filteredReq);
          console.log(allRequest)
    }, (error) => {
      console.log(error)
      })
    
  };

  const getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        let { latitude, longitude } = position.coords;

        setUserLat(latitude);
        setUserLng(longitude);
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

  return (
    <>
      <AllRequestContext.Provider value={{ allRequest, setAllRequest }}>
        <UserLngContext.Provider value={{ userLng, setUserLng }}>
          <UserLatContext.Provider value={{ userLat, setUserLat }}>
            <UserContext.Provider value={{ userData, setUserData }}>
              <Navbar />

              <Switch>
                
                <Route exact path="/" component={Home} />


                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </UserContext.Provider>
          </UserLatContext.Provider>
        </UserLngContext.Provider>
      </AllRequestContext.Provider>
    </>
  );
};

export default App;