import React, { Component, useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { Map } from "../components/Search";
import {  UserContext, ChatContext } from "../ContextFile";

function Home(props) {






  return (
    <section style={{ textAlign: "center", height: '100vh' }}>
      <div>
        <Map />
      </div>
     
    </section>
  );
}

export default Home;
