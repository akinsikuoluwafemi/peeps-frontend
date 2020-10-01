import React, { Component, useEffect, useState, useContext } from "react";
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
// import NavigationDrawer from "./components/NavigationDrawer";
import Navbar from "./components/Navbar";

const App = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    token: JSON.parse(localStorage.getItem("token")) || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoggedIn: JSON.parse(localStorage.getItem("user")) ? true : false ,
  });

  const [userLat, setUserLat] = useState(0);
  const [userLng, setUserLng] = useState(0);
  const [allRequest, setAllRequest] = useState([]);

 



   useEffect(() => {
     getCurrentUser();
    
    //  getAllUsers(userData.user.email);
    //  getAllUsers();
     
     // getUser('akinsiku.o@yahoo.com');
     checkedLoggedIn();
     getAllRequest();
     getUserLocation();
   }, []);


  

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

    }
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
      .then(response =>{
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

  const getCurrentUser = async  ()  => {
   let res = await axios.get("http://localhost:3001/users/")
    .then(response => {
      console.log(response.data);
      if(userData.isLoggedIn){
      const user = JSON.parse(localStorage.getItem("user"));
        const curUser = response.data.find((item) => item.email === user.email);
        console.log(curUser);
        setUserData({
          user: curUser,
          isLoggedIn: true
        });
      }
      
    }, (error) => {
      console.log(error)
    })
    console.log('i am getting all users')
    return res;

  }

  console.log(userData.user);

  const getUserRecord = (obj) => {
    let k = Object.values(obj)
    console.log(k)
  }

  setTimeout(() => {
    getUserRecord()
  }, 2000);
  
  

  return (
    <>
      <AllRequestContext.Provider value={{ allRequest, setAllRequest }}>
        <UserLngContext.Provider value={{ userLng, setUserLng }}>
          <UserLatContext.Provider value={{ userLat, setUserLat }}>
            <UserContext.Provider value={{ userData, setUserData }}>
              <Navbar />

              <Switch>
                {/* <Route exact path="/" component={Home} /> */}

                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute path="/">
                  <Home />
                </PrivateRoute>
              </Switch>
            </UserContext.Provider>
          </UserLatContext.Provider>
        </UserLngContext.Provider>
      </AllRequestContext.Provider>
    </>
  );
};

export default App;

function PrivateRoute ({children, ...rest}) {
 
  let { userData, setUserData } = useContext(UserContext);
  
  return (
    <Route
      {...rest}
      render={({ location }) => userData.isLoggedIn ? (children) : (
        <Redirect
          to={{
            pathname:"/login",
            state: {from: location}
          }}
        />
      ) }
      
      /> )
      
  
}