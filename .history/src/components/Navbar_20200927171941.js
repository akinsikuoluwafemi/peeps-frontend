import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';


export default function ButtonAppBar() {

  return (
    <div class=" ">
      <div class=" navbar navbar-expand-lg">
        <a class="navbar-brand" href="./index.html">
          {/* <img src="./images/newlog.png" width="50" height="50" alt="Watchit Outside Logo"> */}
          Watchit Outside
        </a>
        <button
          class="navbar-toggler bg-dark"
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

          <a class=" btn btn-success text-white border " href="./booking.html">
            Register Join for Free
          </a>
          <a class="nav-link" href="#news">
            Login
          </a>
          <a class="nav-link" href="#news"></a>
        </div>
      </div>
    </div>
  );
}