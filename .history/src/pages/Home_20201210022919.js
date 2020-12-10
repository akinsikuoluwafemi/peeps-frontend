import React, { Component, useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { Map } from "../components/Search";
import { FormRequestContext, UserContext, ChatContext } from "../ContextFile";

function Home(props) {

  const { userData, setUserData } = useContext(UserContext);

  const { showChat, setShowChat } = useContext(ChatContext);




  return (
    <section style={{ textAlign: "center", height:  }}>
      <div>
        <Map />
      </div>
     
    </section>
  );
}

export default Home;
