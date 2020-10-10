import React, { Component, useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import { Map } from "../components/Search";
import { FormReques } from "../ContextFile";
import Chat from '../components/Chat/Chat';

function Home() {
  
  
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData)

  return (
      <section style={{ textAlign: "center" }}>
        <Map />
      </section>
  );
}

export default Home;
