import React, { Component, useCallback, useEffect, useState, useContext } from "react";
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
  FirstNameContext,
  UserIdContext,
  RequestOwnerContext,
  AllVolunteerContext,
  RequestIdContext,
  ReqOwnerFirstNameContext,
  ChatContext,
  AllMessagesContext,
  AllRoomContext,
  SelectedRoomContext,
  SelectedChatContext,
  SelectedReqDescContext,
  ChatRoomIdContext,
  AllUserIdContext,
  RequestOwnerIdContext,
  CurrentRoomContext,
  UserClickedRequest
} from "./ContextFile";
// import NavigationDrawer from "./components/NavigationDrawer";
import Navbar from "./components/Navbar";
import { ActionCable } from "react-actioncable-provider";
import { API_ROOT } from './constants';



const App = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    token: JSON.parse(localStorage.getItem("token")) || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoggedIn: JSON.parse(localStorage.getItem("user")) ? true : false,
  });

  const [userLat, setUserLat] = useState(0);
  const [userLng, setUserLng] = useState(0);
  const [allRequest, setAllRequest] = useState([]);
  const [allVolunteers, setAllVolunteers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [requestOwner, setRequestOwner] = useState(null);
  const [userId, setUserId] = useState(null);
  const [requestId, setRequestId] = useState(null);

  const [reqOwnerFirstName, setReqOwnerFirstName] = useState('');
  const [showChat, setShowChat] = useState(null);
  // const [showChat, setShowChat] = useState(true);
  const [allMessages, setAllMessages] = useState([]);
  const [allRooms, setAllRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedChat, setSelectedChat] = useState([]);
  const [reqDescription, setReqDescription] = useState('');
  const [chatRoomId, setChatRoomId] = useState(null);
  const [allUserId, setAllUserId] = useState([]);
  const [chatReceiverId, setChatReceiverId] = useState(null);
  const [userRequest, setUserRequest] = useState([]);


  const [currentRoom, setCurrentRoom] = useState({
    room: {},
    users: [],
    messages: []
  })


  useEffect(() => {
    
    getCurrentUser();
    checkedLoggedIn();
    getAllRequest();
    getUserLocation();
    getAllVolunteers();
    getAllRooms();

  }, []);

 

  // console.log(firstName, userId);

  const checkedLoggedIn = () => {
    let token = localStorage.getItem("token");
    if (token) {
      console.log("there is a token");
      setUserData({
        isLoggedIn: true,
      });
      history.push("/");
    } else {
      console.log("there is no token");
    }
  };

  const getAllRequest = async() => {
      let res = await axios
        .get("http://localhost:3001/requests/", {
          headers: {
            'Authorization': `Basic ${userData.token}`,
          },
        })
        .then(
          (response) => {
            let filteredReq = response.data.filter(
              (item) => item.fulfilled === false
            );
            setAllRequest(filteredReq);
            console.log(allRequest);
          },
          (error) => {
            console.log(error);
          }
        );

    return res;
  
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

  const getCurrentUser = async () => {
    let res = await axios
      .get("http://localhost:3001/users/", {
        headers: {
          Authorization: `Basic ${userData.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const getAllId = response.data.map(user => user.id)
        setAllUserId(getAllId);
          if (userData.isLoggedIn) {
            const user = JSON.parse(localStorage.getItem("user"));
            const curUser = response.data.find(
              (item) => item.email === user.email
            );
            let userRec = Object.values(curUser);
            // console.log(userRec);
            setUserId(userRec[0]);
            setFirstName(userRec[1]);

            // console.log(curUser);
            setUserData({
              user: curUser,
              isLoggedIn: true,
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    // console.log("i am getting all users");
    return res;
  };


  const getAllVolunteers = async () => {
    let res = await axios.get("http://localhost:3001/requests_users", {
      headers: {
        'Authorization': `Basic ${userData.token}`,

      }
    }).then((response) => {
      console.log(response.data)
      setAllVolunteers(response.data);

    }, (error) => {
      console.log(error)
    })
    return res;
    
  }
      console.log(userData);

  


    const getAllRooms = async () => {
         let res = await axios
           .get(`${API_ROOT}/rooms`, {
             headers: {
               Authorization: `Basic ${userData.token}`,
             },
           })
           .then(
             (response) => {
               console.log(response.data);

               setAllRooms(response.data);
             },
             (error) => {
               console.log(error);
             }
           );

         return res;
    };

  // const getRequestOwner = async (id) => {
  //     console.log(userData);
    
  //   if(id){
  //     console.log(userData)
  //     let res = await axios
  //       .get(`http://localhost:3001/users/${id}`, {
  //         headers: {
  //           Authorization: `Basic ${userData.token}`,
  //         },
  //       })
  //       .then(
  //         (response) => {
  //           console.log(response.data);
  //           let ownerRec = Object.values(response.data);
  //           setReqOwnerFirstName(ownerRec[1]);
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //       return res;
  //   }
  

  // }



   const getRequestOwner = async (id) => {

     if (id) {
       console.log(userData);
       let res = await axios
         .get(`http://localhost:3001/users/${id}`, {
           headers: {
             'Authorization': `Basic ${userData.token}`,
           },
         })
         .then(
           (response) => {
             console.log(response.data);
             let ownerRec = Object.values(response.data);
             setChatReceiverId(ownerRec[0]);
             setReqOwnerFirstName(ownerRec[1]);
             console.log(reqOwnerFirstName);
           },
           (error) => {
             console.log(error);
           }
         );
       return res;
     }
   };


  getRequestOwner(requestOwner);
  
  return (
    <>
      <AllRequestContext.Provider value={{ allRequest, setAllRequest }}>
        <UserLngContext.Provider value={{ userLng, setUserLng }}>
          <UserLatContext.Provider value={{ userLat, setUserLat }}>
            <UserContext.Provider value={{ userData, setUserData }}>
              <FirstNameContext.Provider value={{ firstName, setFirstName }}>
                <UserIdContext.Provider value={{ userId, setUserId }}>
                  <RequestOwnerContext.Provider
                    value={{ requestOwner, setRequestOwner }}
                  >
                    <AllVolunteerContext.Provider
                      value={{ allVolunteers, setAllVolunteers }}
                    >
                      <RequestIdContext.Provider
                        value={{ requestId, setRequestId }}
                      >
                        <ReqOwnerFirstNameContext.Provider
                          value={{ reqOwnerFirstName, setReqOwnerFirstName }}
                        >
                          <ChatContext.Provider
                            value={{ showChat, setShowChat }}
                          >
                            <AllMessagesContext.Provider
                              value={{ allMessages, setAllMessages }}
                            >
                              <AllRoomContext.Provider
                                value={{ allRooms, setAllRooms }}
                              >
                                <SelectedRoomContext.Provider
                                  value={{ selectedRoom, setSelectedRoom }}
                                >
                                  <SelectedChatContext.Provider
                                    value={{ selectedChat, setSelectedChat }}
                                  >
                                    <SelectedReqDescContext.Provider
                                      value={{
                                        reqDescription,
                                        setReqDescription,
                                      }}
                                    >
                                      <ChatRoomIdContext.Provider
                                        value={{ chatRoomId, setChatRoomId }}
                                      >
                                        <AllUserIdContext.Provider
                                          value={{ allUserId, setAllUserId }}
                                        >
                                          <RequestOwnerIdContext.Provider value={{ chatReceiverId, setChatReceiverId }}>
                                            <CurrentRoomContext.Provider value={{currentRoom, setCurrentRoom}}>
                                          <UserClickedRequest.Provider value={{userRequest, setUserRequest}}>

                                                
                                            <Navbar />

                                            <Switch>
                                              {/* <Route exact path="/" component={Home} /> */}

                                              <Route
                                                exact
                                                path="/signup"
                                                component={Signup}
                                              />
                                              <Route
                                                exact
                                                path="/login"
                                                component={Login}
                                              />
                                              <PrivateRoute path="/">
                                                <Home />
                                              </PrivateRoute>
                                              </Switch>
                                            </CurrentRoomContext.Provider>
                                              
                                          </RequestOwnerIdContext.Provider>
                                        </AllUserIdContext.Provider>
                                      </ChatRoomIdContext.Provider>
                                    </SelectedReqDescContext.Provider>
                                  </SelectedChatContext.Provider>
                                </SelectedRoomContext.Provider>
                              </AllRoomContext.Provider>
                            </AllMessagesContext.Provider>
                          </ChatContext.Provider>
                        </ReqOwnerFirstNameContext.Provider>
                      </RequestIdContext.Provider>
                    </AllVolunteerContext.Provider>
                  </RequestOwnerContext.Provider>
                </UserIdContext.Provider>
              </FirstNameContext.Provider>
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