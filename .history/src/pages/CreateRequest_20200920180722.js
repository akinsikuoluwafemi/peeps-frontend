import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from 'axios';


class CreateRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  

  handleSubmit = (e) => {
    //  do stuff
    e.preventDefault();
    // const { email, password } = this.state;


    

//   redirect = () => {
//     this.props.history.push("/");
//   };

  

  render() {
    // const { email, password } = this.state;
    return (
      <div style={{ display: "flex" }}>
        <CssBaseline />

        <NavigationDrawer />

        <main style={{ flexGrow: "1" }}>
          <div style={{ marginTop: "5rem" }}></div>

          <section style={{ textAlign: "center" }}>

                    <p>Createrequest</p>

          </section>
        </main>
      </div>
    );
  }
}

export default CreateRequest;
