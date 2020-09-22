import React, { Component, useEffect, useState, useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigationDrawer from "../components/NavigationDrawer";
import { RequestContext } from '../context';
import { Map } from '../components/Search';
import { FormRequestContext } from '../ContextFile'

function Home () {
  const value = useContext(RequestContext)
  
  const [showForm, setShowForm] = useState(false)


  console.log(showForm)

    // console.log(value);
        return (
          <div style={{ display: "flex" }}>
            <CssBaseline />

            <NavigationDrawer />
            <main style={{ flexGrow: "1" }}>
              <div style={{ marginTop: "5rem" }}></div>
              <FormRequestContext.Provider value={{ showForm, setShowForm }}>
                <section style={{ textAlign: "center", display:  }}>
                  <div className={showForm ? "removemap" : "showmap"}>
                    <Map />
                  </div>
                </section>
              </FormRequestContext.Provider>
            </main>
          </div>
        );
}

  

export default Home;
