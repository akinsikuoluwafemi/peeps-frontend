import React, { Component, useState, useHistory } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();



  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const fileUploadHandler = () => {
    console.log("uploaded");
  };

  const handleSubmit = (e) => {
    //  do stuff
    e.preventDefault();
  };
  // redirect = () => {
  //   // this.props.history.push('/')
  // };

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />

      <NavigationDrawer />

      <main style={{ flexGrow: "1" }}>
        <div style={{ marginTop: "5rem" }}></div>

        <section style={{ textAlign: "center" }}>
          <img src={HelpLogo} alt="" style={{ height: "5rem" }} />

          <p className="h1 py-2">Sign Up</p>

          <div class="row">
            <div class="col-lg-4  col-10"></div>
            <div class="col-lg-4 col-10    m-auto">
              <form onSubmit={handleSubmit}>
                <TextField
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  label="Firstname"
                  value={firstName}
                  onChange={handleFirstName}
                  fullWidth
                />

                <TextField
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  label="Lastname"
                  value={lastName}
                  onChange={handleLastName}
                  fullWidth
                />

                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={handleEmail}
                  fullWidth
                />

                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={handlePassword}
                  fullWidth
                />

                <br />

                <TextField
                  style={{ display: "none" }}
                  id="file"
                  name="file"
                  type="file"
                  label="file"
                  value={file}
                  onChange={handleFile}
                  fullWidth
                />

                <Button
                  style={{ marginTop: "10px" }}
                  variant="contained"
                  component="label"
                  // value={file}
                  // onChange={handleFile}
                  onClick={fileUploadHandler}
                >
                  Upload File
                  {/* <input type="file" style={{ display: "none" }} /> */}
                </Button>
                <p className="py-2">
                  already have an account? <Link to="/login">Login</Link>
                </p>
                {/* <br /> */}

                <Button
                  variant="contained"
                  color="primary"
                  // className={classes.button}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
            <div class="col-lg-4  col-10"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
