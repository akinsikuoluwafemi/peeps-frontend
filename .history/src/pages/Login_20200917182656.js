import React, { useState, useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigationDrawer from "../components/NavigationDrawer";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";
import { RequestContext } from "../context";
import axios from 'axios';


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
    textAlign: "center",
  },
}));

function Login() {
    const { handleLogin } = useContext(RequestContext);



    const value = useContext(RequestContext);
  console.log(value);
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');

  

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

    const handleSubmit = (e) => {
      //  do stuff
        e.preventDefault();
        let user = {
          password,
          email,
        };
        axios.post('http://localhost:3001/login', { user }, { withCredentials: true })
        .then(response => {
            if(response.data.logged_in){
                handleLogin(response.data);
                <Redirect/>
            }
        })
        
      
    };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavigationDrawer />

      <main className={classes.content}>
        <div className={classes.toolbar}></div>

        <section className={classes.section}>
          <img src={HelpLogo} alt="" style={{ height: "5rem" }} />

          <p className="h1 py-2">Login</p>

          <div class="row">
            <div class="col-lg-4  col-10"></div>
            <div class="col-lg-4 col-10    m-auto">
              <form onSubmit={handleSubmit}>

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
            <div class="col-lg-4  col-10"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

// api key='AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE'

export default Login;
