import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';


export default function ButtonAppBar() {

  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={{background: '#3F51B5'}}>
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <div className="m"></div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#">
            Features
          </a>
          <a class="nav-item nav-link" href="#">
            Pricing
          </a>
          <a class="nav-item nav-link disabled" href="#">
            Disabled
          </a>
        </div>
      </div>
    </nav>
  );
}