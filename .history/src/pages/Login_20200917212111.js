import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      username: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      file: null,
      loading: false,
      errors: {},
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleConfirmPassword = (e) => {
    console.log("confirm");
  };

  handleFile = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };

  fileUploadHandler = () => {
    console.log("uploaded");
  };
  handleSubmit = (e) => {
    //  do stuff
    e.preventDefault();
  };

  render() {
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
                    value={this.state.email}
                    onChange={this.handleChange}
                    fullWidth
                  />

                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    fullWidth
                  />

                


                  <TextField
                    style={{ display: "none" }}
                    id="file"
                    name="file"
                    type="file"
                    label="file"
                    value={this.state.file}
                    onChange={this.handleFile}
                    fullWidth
                  />

                  <Button
                    style={{ marginTop: "10px" }}
                    variant="contained"
                    component="label"
                    // value={file}
                    // onChange={handleFile}
                    onClick={this.fileUploadHandler}
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
  }
}

export default Login;
