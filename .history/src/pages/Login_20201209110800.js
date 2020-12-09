import React, { Component, useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Button from "@material-ui/core/Button";
import { UserContext, AllRequestContext, ErrorContext } from '../ContextFile';
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";



const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  useEffect(() => {
    document.title = "Login to | Peeps";
    
  },[])



  const history = useHistory();

  const { userData, setUserData } = useContext(UserContext);

  const {allRequest} = useContext(AllRequestContext)

  let { error, setError } = useContext(ErrorContext);

  
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  
  

  

  const handleSubmit = async (e) => {
    //  do stuff
    e.preventDefault();

    const data = {
      email: email,
      password: password
    }




  let res = await axios
      .post("http://localhost:3001/auth/signin", {
        auth: {
          email: email,
          password: password
        }
      },
    
      
  )
      .then(
        (response) => {
          setUserData({
            token: response.data.jwt,
            isLoggedIn: true,
            user: data,
          });
          localStorage.setItem("token", JSON.stringify(response.data.jwt));
          localStorage.setItem("user", JSON.stringify(data));
          setTimeout(() => {
            window.location.reload();
          }, 3500);
          history.push("/feed");
          setError(false);

        },
        (error) => {
          console.log(error.message);
          handleClick({ vertical: "top", horizontal: "center" });
          setError(true);
        }
    );

    return res
    

  };
  

  return (
    <div>
      <main>
        <div style={{ marginTop: "5rem" }}></div>

        <section style={{ textAlign: "center" }}>
          <img src={HelpLogo} alt="" style={{ height: "5rem" }} />

          <p className="h1 py-2">Login</p>

          <div class="row">
            <div class="col-lg-4 col-md-7 col-10"></div>
            <div class="col-lg-4 col-md-7 col-10    m-auto">
              <form onSubmit={handleSubmit}>
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

                <p className="py-2">
                  don't have an account? <Link to="/signup">Signup</Link>
                </p>
                {/* <br /> */}

                <Button
                  variant="contained"
                  color="primary"
                  style={{ background: "#4CAF4F" }}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
              {/*  */}
             
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="error">
                  email or password is incorrect
                </Alert>
              </Snackbar>
              {/*  */}
            </div>
            <div class="col-lg-4 col-md-7  col-10"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
