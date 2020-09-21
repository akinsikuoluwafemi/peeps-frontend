import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    //  do stuff
    e.preventDefault();
    // const { email, password } = this.state;

    // let user = {
    //   email,
    //   password,
    // };

//     axios
//       .post("http://localhost:3001/login", { user }, { withCredentials: true })
//       .then((response) => {
//         // if (response.data.logged_in) {
//         //   this.props.handleLogin(response.data);
//         //   this.redirect();
//         // } else {
//         //   this.setState({
//         //     errors: response.data.errors,
//         //   });
        
//         // }
//         console.log(response)
//       }, (error) => {
//         console.log("api errors", error);
//       })
//   };

  redirect = () => {
    // this.props.history.push("/");
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


            
          </section>
        </main>
      </div>
    );
  }
}

export default Login;
