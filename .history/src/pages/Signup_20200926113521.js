import React, { Component, useSt } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import NavigationDrawer from "../components/NavigationDrawer";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from 'axios';


// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       firstName: "",
//       lastName: "",
//       password: "",
//       file: null,
//     };
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

 

//   handleFile = (e) => {
//     this.setState({
//       file: e.target.files[0],
//     });
//   };

//   fileUploadHandler = () => {
//     console.log("uploaded");
//   };
//   handleSubmit = (e) => {
//     //  do stuff
//     e.preventDefault();
//     const { email, password, firstName, lastName, file } = this.state;
    

//   }
//   redirect = () => {
//     // this.props.history.push('/')
//   }


//   render() {
//     const {  email, password, firstName, lastName, file } = this.state;
//     return (
//       <div style={{ display: "flex" }}>
//         <CssBaseline />

//         <NavigationDrawer />

//         <main style={{ flexGrow: "1" }}>
//           <div style={{ marginTop: "5rem" }}></div>

//           <section style={{ textAlign: "center" }}>
//             <img src={HelpLogo} alt="" style={{ height: "5rem" }} />

//             <p className="h1 py-2">Sign Up</p>

           

//             <div class="row">
//               <div class="col-lg-4  col-10"></div>
//               <div class="col-lg-4 col-10    m-auto">
//                 <form onSubmit={this.handleSubmit}>
//                   <TextField
//                     id="firstName"
//                     name="firstName"
//                     type="firstName"
//                     label="Firstname"
//                     value={firstName}
//                     onChange={this.handleChange}
//                     fullWidth
//                   />

//                   <TextField
//                     id="lastName"
//                     name="lastName"
//                     type="lastName"
//                     label="Lastname"
//                     value={lastName}
//                     onChange={this.handleChange}
//                     fullWidth
//                   />


//                   <TextField
//                     id="email"
//                     name="email"
//                     type="email"
//                     label="Email"
//                     value={email}
//                     onChange={this.handleChange}
//                     fullWidth
//                   />

//                   <TextField
//                     id="password"
//                     name="password"
//                     type="password"
//                     label="Password"
//                     value={password}
//                     onChange={this.handleChange}
//                     fullWidth
//                   />

                

//                   <br />

//                   <TextField
//                     style={{ display: "none" }}
//                     id="file"
//                     name="file"
//                     type="file"
//                     label="file"
//                     value={file}
//                     onChange={this.handleChange}
//                     fullWidth
//                   />

//                   <Button
//                     style={{ marginTop: "10px" }}
//                     variant="contained"
//                     component="label"
//                     // value={file}
//                     // onChange={handleFile}
//                     onClick={this.fileUploadHandler}
//                   >
//                     Upload File
//                     {/* <input type="file" style={{ display: "none" }} /> */}
//                   </Button>
//                   <p className="py-2">
//                     already have an account? <Link to="/login">Login</Link>
//                   </p>
//                   {/* <br /> */}

//                   <Button
//                     variant="contained"
//                     color="primary"
//                     // className={classes.button}
//                     type="submit"
//                   >
//                     Submit
//                   </Button>
//                 </form>
//               </div>
//               <div class="col-lg-4  col-10"></div>
//             </div>
//           </section>
//         </main>
//       </div>
//     );
//   }
// }

// export default Signup;


const Signup =() =>  {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      file: null,
    };
  }

  const [email, setEmail] = useState('')

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
    const { email, password, firstName, lastName, file } = this.state;
  };
  redirect = () => {
    // this.props.history.push('/')
  };

  render() {
    const { email, password, firstName, lastName, file } = this.state;
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
                <form onSubmit={this.handleSubmit}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    type="firstName"
                    label="Firstname"
                    value={firstName}
                    onChange={this.handleChange}
                    fullWidth
                  />

                  <TextField
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    label="Lastname"
                    value={lastName}
                    onChange={this.handleChange}
                    fullWidth
                  />

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

                  <br />

                  <TextField
                    style={{ display: "none" }}
                    id="file"
                    name="file"
                    type="file"
                    label="file"
                    value={file}
                    onChange={this.handleChange}
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

export default Signup;