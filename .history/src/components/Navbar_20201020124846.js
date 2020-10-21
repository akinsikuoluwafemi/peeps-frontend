import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, useHistory } from "react-router-dom";
import { AllRequestContext, UserContext , FirstNameContext} from "../ContextFile";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Button from "@material-ui/core/Button";

export default function ButtonAppBar() {
  let history = useHistory();

  const { userData, setUserData } = useContext(UserContext);

  const { allRequest } = useContext(AllRequestContext);

  const { firstName, setFirstName } = useContext(FirstNameContext);

  console.log(allRequest);
  console.log(userData.user);

  useEffect(() => {
  },[])

  // const getUserRecord = () => {
  //   if(user){
  //   const userRecord = Object.values(user)
  //     console.log(userRecord);
  //   }
  // }
  // let getUserRecord = () => {
    //  if (user) {
    //    const userRecord = Object.values(user);
    //    console.log(userRecord);
    //  }
  // }
 
  // let getUserRecord = (obj) => {
  //   for(let data in obj ){
  //     console.log(`key: ${data}: value: ${obj[data]}`)
  //   }
  // }

  //   getUserRecord(userData.user);


  const unfufilledRequest = [...allRequest].length;

  

  const Logout = () => {
    console.log('i just logged out')
    setUserData({
      token: null,
      isLoggedIn: false,
      user: null
    })
    localStorage.removeItem("token");
    localStorage.removeItem("user");

  }

  



  return (
    <div className=" ">
      <div class="bg-dark">
        <div class="container navbar navbar-expand-lg navbar-dark ">
          <NavLink class="navbar-brand" to="/">
            Peeps
          </NavLink>
          <button
            class="border navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#contentOfNavbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="contentOfNavbar" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link badge badge-success">
                  {/* {userData.isLoggedIn ? `Hi ${firstName}` : null} */}
                  {/* Home */}
                </a>
              </li>
            </ul>

            <Tooltip title="Unfufilled Request" placement="left">
              <Badge badgeContent={unfufilledRequest} color="primary">
                <HelpOutlineIcon style={{ color: "white" }} />
              </Badge>
            </Tooltip>

            <li class="nav-item active">
              <a class="nav-link badge badge-success">
                {userData.isLoggedIn ? `Hi ${firstName}` : null}
                {/* Home */}
              </a>
            </li>

            {userData.isLoggedIn ? (
              <>
              <NavLink
                onClick={Logout}
                style={{ margin: "0 1rem" }}
                class="nav-link mx-2"
                to=""
              >
                Show Messages
              </NavLink>
              <NavLink
                onClick={Logout}
                style={{ margin: "0 1rem" }}
                class="nav-link mx-2"
                to=""
              >
                  LogOut
              </NavLink>
              </>
                
            ) : (
              <>
                <NavLink
                  style={{ margin: "0 1rem" }}
                  class="nav-link mx-2"
                  to="/login"
                >
                  Log in
                </NavLink>
                <NavLink
                  style={{
                    padding: "6px 12px",
                    background: "green",
                    color: "white",
                    borderRadius: "3px",
                  }}
                  class=" btn  text-white border"
                  to="/signup"
                >
                  Join for free
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


