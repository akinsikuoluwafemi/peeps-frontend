import React, { useState, useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigationDrawer from "../components/NavigationDrawer";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { RequestContext } from '../context';

const drawerWidth = 230;

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
  form: {
    textAlign: "center",
  },
  textField: {
    // margin: '5px auto'
  },
  button: {
    marginTop: 10,
  },
    section: {
      textAlign: 'center'
  }
}));

function Signup() {
    // const value = useContext(RequestContext)
    // console.log(value)
    const classes = useStyles();

  
  


 

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavigationDrawer />

      <main className={classes.content}>
        <div className={classes.toolbar}></div>

        <section className={classes.section}>
          <img src={HelpLogo} alt="" style={{ height: "5rem" }} />

          <p className="h1 py-2">Sign Up</p>

          <div class="row">
            <div class="col-lg-4  col-10"></div>
            <div class="col-lg-4 col-10    m-auto">
              <form onSubmit={handleSubmit}>
                {/* <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" aria-placeholder="name@example.com" required/>

                    </div> */}

                <TextField
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  label="Firstname"
                  className={classes.textField}
                  value={firstName}
                  onChange={handleFirstName}
                  fullWidth
                />

                <TextField
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  label="Lastname"
                  className={classes.textField}
                  value={lastName}
                  onChange={handleLastName}
                  fullWidth
                />

                <TextField
                  id="userName"
                  name="userName"
                  type="userName"
                  label="username"
                  className={classes.textField}
                  value={username}
                  onChange={handleUserName}
                  fullWidth
                />

                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  className={classes.textField}
                  value={email}
                  onChange={handleEmail}
                  fullWidth
                />

                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  className={classes.textField}
                  value={password}
                  onChange={handlePassword}
                  fullWidth
                />

                <TextField
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  label="Confirm Password"
                  className={classes.textField}
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  fullWidth
                />

                <br />

                <TextField
                  style={{ display: "none" }}
                  id="file"
                  name="file"
                  type="file"
                  label="file"
                  className={classes.textField}
                  value={file}
                  onChange={handleFile}
                  fullWidth
                />

                <Button
                  className={classes.button}
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
}


export default Signup;



class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      firstName: "",
      username: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      file: null,
      loading: false,
      errors: {}
    }
  }

  handleSubmit = (e) => {
    //  do stuff
    e.preventDefault();
    setLoading(true);
    console.log({
      firstName,
      lastName,
      username,
      password,
      confirmPassword,
      email,
      file,
    });
  };

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleConfirmPassword = (e) => {
    console.log(confirm)
  }

     
   handleFile = (e) => {
    setFile(e.target.files[0]);
  };

   fileUploadHandler = () => {
    console.log("uploaded");
  };

  
  render(){
     
    
    return (
      <div className={classes.root}>
        <CssBaseline />

        <NavigationDrawer />

        <main className={classes.content}>
          <div className={classes.toolbar}></div>

          <section className={classes.section}>
            <img src={HelpLogo} alt="" style={{ height: "5rem" }} />

            <p className="h1 py-2">Sign Up</p>

            <div class="row">
              <div class="col-lg-4  col-10"></div>
              <div class="col-lg-4 col-10    m-auto">
                <form onSubmit={handleSubmit}>
                  {/* <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" aria-placeholder="name@example.com" required/>

                    </div> */}

                  <TextField
                    id="firstName"
                    name="firstName"
                    type="firstName"
                    label="Firstname"
                    className={classes.textField}
                    value={firstName}
                    onChange={this.handleChange}
                    fullWidth
                  />

                  <TextField
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    label="Lastname"
                    className={classes.textField}
                    value={lastName}
                    onChange={this.handleChange}
                    fullWidth
                  />

                  <TextField
                    id="userName"
                    name="userName"
                    type="userName"
                    label="username"
                    className={classes.textField}
                    value={username}
                    onChange={this.handleChange}
                    fullWidth
                  />

                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    className={classes.textField}
                    value={email}
                    onChange={this.handleChange}
                    fullWidth
                  />

                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    className={classes.textField}
                    value={password}
                    onChange={this.handleChange}
                    fullWidth
                  />

                  <TextField
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    label="Confirm Password"
                    className={classes.textField}
                    value={confirmPassword}
                    onChange={this.handleConfirmPassword}
                    fullWidth
                  />

                  <br />

                  <TextField
                    style={{ display: "none" }}
                    id="file"
                    name="file"
                    type="file"
                    label="file"
                    className={classes.textField}
                    value={file}
                    onChange={handleFile}
                    fullWidth
                  />

                  <Button
                    className={classes.button}
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
  }
}