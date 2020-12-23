import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
  
import { AllRequestContext, UserContext , FirstNameContext, RequestFormContext} from "../ContextFile";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import ChatDialogue from "./ChatDialogue";
import '../App.css';
import Button from "@material-ui/core/Button";


export default function ButtonAppBar() {

  const { userData, setUserData } = useContext(UserContext);

  const { allRequest } = useContext(AllRequestContext);

  const { firstName } = useContext(FirstNameContext);

  const {showRequestForm, setShowRequestForm} = useContext(RequestFormContext)





  const unfufilledRequest = [...allRequest].length;
  

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
      <div className="bg-dark">
        <div className="navbar navbar-expand-lg navbar-dark ">
          <NavLink className="navbar-brand" to="/feed">
            Peeps
          </NavLink>
          <button
            className="border navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#contentOfNavbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="contentOfNavbar" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a href="*" class="nav-link badge badge-success">
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
              <a href="*" class="nav-link badge badge-success">
                {userData.isLoggedIn ? `Hi ${firstName}` : null}
                {/* Home */}
              </a>
            </li>

            {userData.isLoggedIn ? (
              <>
                <NavLink
                  onClick={Logout}
                  style={{ margin: "0 1rem" }}
                  className="nav-link mx-2"
                  to=""
                >
                  {/* LogOut */}

                  <Tooltip title="Logout" placement="left">
                    <ExitToAppOutlinedIcon style={{ color: "white" }} />
                  </Tooltip>
                </NavLink>

                <ChatDialogue />

                <Button
                  onClick={() => setShowRequestForm()}
                  style={{ margin: ".5rem" }}
                  variant="contained"
                  color="primary"
                  // className={classes.button}
                  type="submit"
                >
                  Add Request
                </Button>
              </>
            ) : (
              <>
                <NavLink
                  style={{ margin: "0 1rem" }}
                  className="nav-link mx-2"
                  to="/login"
                >
                  <Tooltip title="Login" placement="left">
                    <LockOpenOutlinedIcon style={{ color: "white" }} />
                  </Tooltip>
                </NavLink>
                <NavLink
                  style={{
                    textDecoration: "none",
                    padding: "6px 12px",
                    background: "#4CAF4F",
                    color: "white",
                    borderRadius: "3px",
                  }}
                  className="btn-signup"
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


