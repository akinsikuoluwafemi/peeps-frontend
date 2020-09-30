import React, { Component, useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import { Map } from "../components/Search";
import { FormRequestContext, UserC } from "../ContextFile";

function Home() {
  return (
      <section style={{ textAlign: "center" }}>
        <Map />
      </section>
  );
}

export default Home;
