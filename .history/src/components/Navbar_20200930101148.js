import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, useHistory } from "react-router-dom";
import { AllRequestContext, UserContext } from "../ContextFile";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Button from "@material-ui/core/Button";

export default function ButtonAppBar() {
  let history = useHistory();

  const { userData, setUserData } = useContext(UserContext);

  const { allRequest } = useContext(AllRequestContext);

  console.log(allRequest);
  const unfufilledRequest = [...allRequest].length;

  return (
    // <div class="container">
    //   <div class="navbar navbar-expand-lg ">
    //     <NavLink class="navbar-brand" to="/">
    //       {/* <img src="./images/newlog.png" width="50" height="50" alt="Watchit Outside Logo"> */}
    //       Peeps
    //     </NavLink>
    //     <button
    //       class="border navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#contentOfNavbar"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>

    //     <div id="contentOfNavbar" class="collapse navbar-collapse">
    //       <ul class="navbar-nav mr-auto">
    //         <li class="nav-item active">
    //           <a class="nav-link" href="./index.html">
    //             {/* Home */}
    //           </a>
    //         </li>
    //       </ul>

    //       <Tooltip title="Unfufilled Request" placement="left">
    //         <Badge badgeContent={unfufilledRequest} color="secondary">
    //           <HelpOutlineIcon />
    //         </Badge>
    //       </Tooltip>

    //       {userData.isLoggedIn ? (
    //         <NavLink style={{ margin: "0 1rem" }} class="nav-link mx-2" to="">
    //           LogOut
    //         </NavLink>
    //       ) : (
    //         <>
    //           <NavLink
    //             style={{ margin: "0 1rem" }}
    //             class="nav-link mx-2"
    //             to="/login"
    //           >
    //             Log in
    //           </NavLink>
    //           <NavLink
    //             style={{
    //               padding: "6px 12px",
    //               background: "green",
    //               color: "white",
    //               borderRadius: "3px",
    //             }}
    //             class=" btn  text-white border"
    //             to="/signup"
    //           >
    //             Join for free
    //           </NavLink>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </div>

    <div class="col navbar navbar-expand-lg navbar-dark">
      <a aria-current="page" class="navbar-brand  active" href="/">
        pEEPS{" "}
      </a>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#contentOfNavbar"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="contentOfNavbar" class="navbar-collapse collapse" >
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ">
          <li class="nav-item ">
            <a
              aria-current="page"
              class="nav-link  d-inline-block mx-3 text-white main-nav-active"
              href="/"
            >
              <span>Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white d-inline-block mx-3" href="/about">
              <span>About</span>
            </a>
          </li>
          <li class="nav-item ">
            <a
              class="nav-link text-white d-inline-block mx-3"
              href="/portfolio"
            >
              <span>Portfolio</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white d-inline-block ml-3" href="/contact">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

{
  /* <div class="col navbar navbar-expand-lg navbar-dark"><a aria-current="page" class="navbar-brand  active" href="/"><img src="https://fontmeme.com/permalink/200402/1bbfb101792de39b85fcea68e43b26ac.png" alt="signature-fonts" border="0"> </a><button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#contentOfNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div id="contentOfNavbar" class="navbar-collapse collapse" style=""><ul class="navbar-nav mr-auto"></ul><ul class="navbar-nav "><li class="nav-item "><a aria-current="page" class="nav-link  d-inline-block mx-3 text-white main-nav-active" href="/"><span>Home</span></a></li><li class="nav-item"><a class="nav-link text-white d-inline-block mx-3" href="/about"><span>About</span></a></li><li class="nav-item "><a class="nav-link text-white d-inline-block mx-3" href="/portfolio"><span>Portfolio</span></a></li><li class="nav-item"><a class="nav-link text-white d-inline-block ml-3" href="/contact"><span>Contact</span></a></li></ul></div></div> */
}
