import React, { Component, useEffect, useState, useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigationDrawer from "../components/NavigationDrawer";
import { Map } from '../components/Search';
import { FormRequestContext } from '../ContextFile'

function Home () {
  



    // console.log(value);
        return (
          <div >

            {/* navigation drawer start */}

            {/* <p>Navoigat</p> */}
            {/* <NavigationDrawer /> */}


            {/* navigation drawer end */}


   
                <section style={{ textAlign: "center" }}>
                    <Map />
                </section>
            </main>
          </div>
        );
}

  

export default Home;