import React, { Component, useEffect, useState, useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigationDrawer from "../components/NavigationDrawer";
import { RequestContext } from '../context';


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
    const { value: userLat } = useContext(RequestContext)
    console.log(userLat);
        return (
    
          <div className={classes.root}>
            <CssBaseline />

            <NavigationDrawer />
            <main className={classes.content}>
              <div className={classes.toolbar}></div>
                home
            </main>
          </div>
       
  );
}

  

export default Home;
