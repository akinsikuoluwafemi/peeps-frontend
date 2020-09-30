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
import NavigationDrawer from "./components/NavigationDrawer";
import Navbar from "./components/Navbar";

const App = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    token: null,
    user: null,
    isLoggedIn: false,
  });

  const [userLat, setUserLat] = useState(0);
  const [userLng, setUserLng] = useState(0);
  const [allRequest, setAllRequest] = useState([]);

 
  console.log(userData);

   useEffect(() => {
     getAllUsers(userData.user.email);
     // getUser('akinsiku.o@yahoo.com');
     checkedLoggedIn();
     getAllRequest();
     getUserLocation();
     console.log(userData);
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

  const getAllUsers =   (mail)  => {
      axios.get("http://localhost:3001/users/")
    .then(response => {
      console.log(response.data);
      // const theUser = user.find(item => item.email === mail)
      // console.log(theUser);
      let currentUser = response.data.find(item => item.email === mail)
      console.log(currentUser)
    }, (error) => {
      console.log(error)
    })
    console.log('i am getting all users')
  }

  const getUser = (mail) => {
    
    // const user = [
    //   {
    //     id: 3,
    //     first_name: "Femi",
    //     last_name: "Akinsiku",
    //     email: "akinsiku.o@yahoo.com",
    //     password_digest:
    //       "$2a$12$082kvS9PPIVA7J96UsaNje5iL7jXyeAMAbiOHuPQSYi64aqu3tUKG",
    //     created_at: "2020-09-25T10:39:03.970Z",
    //     updated_at: "2020-09-25T10:39:03.970Z",
    //   },
    //   {
    //     id: 4,
    //     first_name: "Steve",
    //     last_name: "Warner",
    //     email: "warner@yahoo.com",
    //     password_digest:
    //       "$2a$12$Dv.RWMnw9G/fg5PNiFDj4upyTdkkOkVpCNjfj20FdvNmchJzz8.gq",
    //     created_at: "2020-09-25T13:13:14.795Z",
    //     updated_at: "2020-09-25T13:13:14.795Z",
    //   },
    // ];

    // console.log(user)
    // const theUser = user.find(item => item.email === mail)
    // console.log(theUser);

  }


  

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