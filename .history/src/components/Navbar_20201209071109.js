import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, useHistory } from "react-router-dom";
  
import { AllRequestContext, UserContext , FirstNameContext, ChatContext, AllRoomContext} from "../ContextFile";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Button from "@material-ui/core/Button";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import ChatDialogue from "./ChatDialogue";


export default function ButtonAppBar() {
  let history = useHistory();

  const { userData, setUserData } = useContext(UserContext);

  const { allRequest } = useContext(AllRequestContext);

  const { firstName, setFirstName } = useContext(FirstNameContext);

  let { showChat, setShowChat } = useContext(ChatContext);


  let {allRooms, setAllRooms} = useContext(AllRoomContext)



  const unfufilledRequest = [...allRequest].length;
  
  console.log(unfufilledRequest)

  const Logout = () => {
    setUserData({
      token: null,
      isLoggedIn: false,
      user: null
    })
    
     setTimeout(() => {
       window.location.reload();
     },500);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

  }

  



  return (
    <div className=" ">
      <div class="bg-dark">
        <div class="navbar navbar-expand-lg navbar-dark ">
          <NavLink class="navbar-brand" to="/feed">
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
              <a href="#" class="nav-link badge badge-success">
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
                  {/* LogOut */}

                  <Tooltip title="Logout" placement="left">
                    <ExitToAppOutlinedIcon style={{ color: "white" }} />
                  </Tooltip>
                </NavLink>

                <ChatDialogue />
              </>
            ) : (
              <>
                <NavLink
                  style={{ margin: "0 1rem" }}
                  class="nav-link mx-2"
                  to="/login"
                >
                  <Tooltip title="Login" placement="left">
                    <LockOpenOutlinedIcon style={{ color: "white" }} />
                  </Tooltip>
                </NavLink>
                <NavLink
                    style={{
                    text
                    padding: "6px 12px",
                    background: "#4CAF4F",
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


