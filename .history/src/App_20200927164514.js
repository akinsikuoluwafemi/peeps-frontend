import React, {Component, useEffect, useState} from 'react';
import './App.css';
import { Switch, Route, useHistory } from "react-router-dom";
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
import NavigationDrawer from './components/NavigationDrawer';
import Navbar from './components/Navbar';



const App = () =>  {
  const history = useHistory();
  const [userData, setUserData] = useState({
    token: null,
    user: null,
    isLoggedIn: null
  })



  const [userLat, setUserLat] = useState(0)
  const [userLng, setUserLng] = useState(0)
  const [allRequest, setAllRequest] = useState([])

  useEffect(() => {
    getAllRequest()
    getUserLocation()
    checkedLoggedIn()

  }, [])

  console.log(userData)

  const checkedLoggedIn = () => {
    const token = localStorage.getItem('token')
    if(token){
      console.log('there is a token')
      setUserData({
        isLoggedIn: true
      })
      history.push('/')
    }else {
      console.log('there is no token')
    }
    // console.log(token)
  }

  
   const getAllRequest = () => {
     fetch("http://localhost:3001/requests/")
       .then((response) => response.json())
       .then((data) => {
         // console.table(data, ["lat", "lng"]);
         let filteredReq = data.filter((item) => item.fulfilled === false);
         setAllRequest(filteredReq)
       })
       .catch((error) => {
         console.log(error);
       });
   };
  
  const getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        let { latitude, longitude } = position.coords;
       
        setUserLat(latitude)
        setUserLng(longitude)
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
      
      <Switch>
        <AllRequestContext.Provider value={{ allRequest, setAllRequest }}>
          <UserLngContext.Provider value={{ userLng, setUserLng }}>
            <UserLatContext.Provider value={{ userLat, setUserLat }}>
              <UserContext.Provider value={{ userData, setUserData }}>
                <Route exact path="/" component={Home} />

                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
              </UserContext.Provider>
            </UserLatContext.Provider>
          </UserLngContext.Provider>
        </AllRequestContext.Provider>
      </Switch>

      </>
    );
  
}

export default App;
