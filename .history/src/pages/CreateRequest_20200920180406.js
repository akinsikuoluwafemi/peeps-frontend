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
    const { email, password } = this.state;


    

  redirect = () => {
    this.props.history.push("/");
  };

  

  render() {
    // const { email, password } = this.state;
    return (
      <div style={{ display: "flex" }}>
        <CssBaseline />

        <NavigationDrawer />

        <main style={{ flexGrow: "1" }}>
          <div style={{ marginTop: "5rem" }}></div>

          <section style={{ textAlign: "center" }}>
            <img src={HelpLogo} alt="" style={{ height: "5rem" }} />

            <p className="h1 py-2">Login</p>

            <div class="row">
              <div class="col-lg-4  col-10"></div>
              <div class="col-lg-4 col-10    m-auto">
                <form onSubmit={this.handleSubmit}>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={this.handleChange}
                    fullWidth
                  />

                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={this.handleChange}
                    fullWidth
                  />

                  <p className="py-2">
                    dont have an account? <Link to="/signup">Signup</Link>
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
                <div className="row">
                  <div className="col">
                    {this.state.error ? this.handleErrors() : null}
                  </div>
                </div>
              </div>
              <div class="col-lg-4  col-10"></div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default CreateRequest;
