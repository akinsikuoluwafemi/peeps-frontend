import React, { Component, useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import { Map } from "../components/Search";
import { FormRequestContext, UserContext, ChatContext } from "../ContextFile";
import Chat from '../components/Chat/Chat';

function Home() {

  const { userData, setUserData } = useContext(UserContext);

  const { showChat, setShowChat } = useContext(ChatContext);



  console.log(userData)
  console.log(showChat);


  return (
      <section style={{ textAlign: "center" }}>
      <Map />
      {/* <Chat/> */}
      {showChat ? }
      </section>
  );
}

export default Home;
