import React, { Component, useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { Map } from "../components/Search";
import { FormRequestContext, UserContext, ChatContext } from "../ContextFile";
import Chat from '../components/Chat/Chat';

function Home(props) {

  const { userData, setUserData } = useContext(UserContext);

  const { showChat, setShowChat } = useContext(ChatContext);




  return (
    <section style={{ textAlign: "center" }}>
      <div className={showChat ? `remove-map` : `show-map`}>
        <Map />
      </div>
     
    </section>
  );
}

export default Home;