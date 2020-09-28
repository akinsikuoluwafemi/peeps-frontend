import React, { Component, useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import { Map } from "../components/Search";
import { FormRequestContext } from "../ContextFile";

function Home() {
  return (
    <div>
      <section >
        <Map />
      </section>
    </div>
  );
}

export default Home;
