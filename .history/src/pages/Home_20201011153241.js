import React, { Component, useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import { Map } from "../components/Search";
import { FormRequestContext, UserContext, ChatContext } from "../ContextFile";
import Chat from '../components/Chat/Chat';

function Home() {

  const { userData, setUserData } = useContext(UserContext);

  


  console.log(userData)

  return (
      <section style={{ textAlign: "center" }}>
      <Map />
      {/* <Chat/> */}
      </section>
  );
}

export default Home;
