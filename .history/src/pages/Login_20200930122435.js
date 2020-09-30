import React, { Component, useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Button from "@material-ui/core/Button";
import { UserContext, AllRequestContext } from '../ContextFile';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    
  },[])

  const history = useHistory();

  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);

  const {allRequest} = useContext(AllRequestContext)
  console.log(allRequest)

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  
  

  

  const handleSubmit = (e) => {
    //  do stuff
    e.preventDefault();

    const data = {
      email: email,
      password: password
    }

    console.log(data);

    axios
      .post("http://localhost:3001/auth/signin", {
        auth: {
          email: email,
          password: password
        }
      })
      .then(
        (response) => {
          console.log(response);
          console.log(response.data.jwt);
          setUserData({
            token: response.data.jwt,
            isLoggedIn: true
          });
          localStorage.setItem("token", JSON.stringify(response.data.jwt));
          history.push('/');
        },
        (error) => {
          console.log(error);
        }
    );
      console.log(userData);
    

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
                  // className={classes.button}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
            <div class="col-lg-4 col-md-7  col-10"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
