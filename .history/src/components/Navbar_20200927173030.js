import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';


export default function ButtonAppBar() {

  return (
    <div class="bg-dark ">
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

          <NavLink class="nav-link" to="/login">
            Log in
          </NavLink>
          <NavLink class=" btn btn-success text-white border" to="/signup">
            Join for Free
          </NavLink>
        </div>
      </div>
    </div>
  );
}