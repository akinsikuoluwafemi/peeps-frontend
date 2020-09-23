import React, { Component, useEffect, useState, useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigationDrawer from "../components/NavigationDrawer";
import { RequestContext } from '../context';
import { Map } from '../components/Search';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

function Home () {
        const classes = useStyles();
    const value = useContext(RequestContext)
    // console.log(value);
        return (
          <div className={classes.root}>
            <CssBaseline />

            <NavigationDrawer />
            <main style={{ flexGrow: "1" }}>
              <div style={{ marginTop: "5rem" }}></div>
              <section style={{ textAlign: "center" }}>
                <Map />
              </section>
            </main>
          </div>
        );
}

  

export default Home;