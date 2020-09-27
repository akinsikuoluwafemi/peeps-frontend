import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { AllRequestContext, UserContext } from '../ContextFile';
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Button from "@material-ui/core/Button";

export default function ButtonAppBar() {
  const { allRequest } = useContext(AllRequestContext);

  console.log(allRequest);
  const unfufilledRequest = [...allRequest].length;

  return (
    <div class="container">
      <div class=" navbar navbar-expand-lg ">
        <NavLink class="navbar-brand" to="/">
          {/* <img src="./images/newlog.png" width="50" height="50" alt="Watchit Outside Logo"> */}
          Peeps
        </NavLink>
        <button
          class="navbar-toggler bg-info"
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
              <a class="nav-link" href="./index.html">
                {/* Home */}
              </a>
            </li>
          </ul>

          <Tooltip title="Unfufilled Request" placement="left">
            <Badge badgeContent={unfufilledRequest} color="secondary">
              <HelpOutlineIcon />
            </Badge>
          </Tooltip>

          <NavLink
            style={{ margin: "0 1rem" }}
            class="nav-link mx-2"
            to="/login"
          >
            Log in
          </NavLink>
          <NavLink style={{padding: ''}} class=" btn btn-success text-white border" to="/signup">
              Join for free
          </NavLink>
        </div>
      </div>
    </div>
  );
}